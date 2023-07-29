#!/bin/python3

import requests
import argparse
from html.parser import HTMLParser
from queue import Queue
import threading


class WFarm:
    class CustomHTMLParser(HTMLParser):
        def __init__(self, nextUrls, url, args, wordsFound):
            HTMLParser.__init__(self)
            self.nextUrls = nextUrls
            self.url = url
            self.args = args
            self.wordsFound = wordsFound

        def handle_starttag(self, tag, attrs):
            if tag == "a":
                for attr in attrs:
                    if attr[0] == "href":
                        link = attr[1]
                        if link.startswith(tuple(["http", "https"])):
                            self.nextUrls.add(link)
                        elif link.startswith("/"):
                            self.nextUrls.add(self.url + link)

        def handle_data(self, data):
            words = data.split(" ")
            for word in words:
                if len(self.wordsFound) >= int(self.args.l):
                    return
                word = word.strip()
                word = word.replace(",", "")
                word = word.replace("?", "")
                word = word.replace("{", "")
                word = word.replace("}", "")
                word = word.replace("(", "")
                word = word.replace(")", "")
                word = word.replace("\n", "")
                word = word.replace("\t", "")
                if len(word) >= int(self.args.min) and len(word) <= int(self.args.max):
                    self.wordsFound.add(word)
                    if self.args.c:
                        self.wordsFound.add(word.upper())
                        self.wordsFound.add(word.lower())

    def __init__(self):
        super().__init__()
        self.parser = argparse.ArgumentParser()
        self.wordsFound = set()
        self.foundUrls = set()
        self.nextUrls = set()
        self.threadQueue = Queue()
        self.totalUrls = 1
        self.attemptCount = 0
        self.parseArgs()
        self.spiderUrls()
        self.writeWordlist()

    def parseArgs(self):
        self.parser.add_argument("url", help="url to spider.")
        self.parser.add_argument(
            "-min", help="minimum length of word. Default is 4.", default=4
        )
        self.parser.add_argument(
            "-max", help="maximum length of word. Default is 10.", default=10
        )
        self.parser.add_argument(
            "-d", help="depth of urls found on page to visit. Default is 2.", default=2
        )
        self.parser.add_argument(
            "-t", help="number of threads to use. Default is 5.", default=5
        )
        self.parser.add_argument(
            "-o", help="path of output file of wordlist.", default="wordlist.txt"
        )
        self.parser.add_argument(
            "-c", help="include both upper and lower case.", action="store_true"
        )
        self.parser.add_argument(
            "-l",
            help="max limit of words to add to wordlist. Default is 200k",
            default=200000,
        )
        self.args = self.parser.parse_args()

    def spiderUrls(self):
        try:
            self.nextUrls.add(self.args.url)
            for depth in range(int(self.args.d)):
                if len(self.nextUrls) == 0:
                    return
                self.totalUrls += len(self.nextUrls)
                self.foundUrls = self.nextUrls.copy()
                self.nextUrls.clear()

                for url in self.foundUrls:
                    if self.threadQueue.qsize() == int(self.args.t):
                        self.threadQueue.get().join()
                    self.attemptCount += 1
                    farmThreading = threading.Thread(
                        target=self.getWordsFromUrl, args=(url,)
                    )
                    farmThreading.daemon = True
                    farmThreading.start()
                    self.threadQueue.put(farmThreading)

                while not self.threadQueue.empty():
                    self.threadQueue.get().join()

        except KeyboardInterrupt:
            print("\nProgram terminated by user!")

    def getWordsFromUrl(self, url):
        try:
            resp = requests.get(
                url,
                headers={
                    "User-Agent": "Mozilla/5.0 (X11; Linux i686; rv:45.0) Gecko/20100101 Firefox/45.0"
                },
            )
            print("Trying: {} .... [{}]".format(url, resp.status_code))
            print("{}/{}".format(self.attemptCount, self.totalUrls), end="\r")
            if resp.status_code == 200:
                htmlParser = self.CustomHTMLParser(
                    self.nextUrls, url, self.args, self.wordsFound
                )
                htmlParser.feed(resp.text)
                if len(self.wordsFound) >= int(self.args.l):
                    print("Maximum word limit reached!")
                    self.writeWordlist()
                    exit()
        except Exception as e:
            print("A problem occured! Failed to get this url!")

    def writeWordlist(self):
        print("Writing wordlist to file....")
        with open(self.args.o, "w") as wordlistFile:
            wordlistFile.write("\n".join(self.wordsFound))


WFarm()
