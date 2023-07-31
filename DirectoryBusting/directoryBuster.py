import requests
import argparse
import threading
from urllib3.exceptions import InsecureRequestWarning
from collections import deque
from queue import Queue


class DirectoryBuster:
    def __init__(self):
        super().__init__()
        requests.packages.urllib3.disable_warnings(category=InsecureRequestWarning)
        self.totalWords = 0
        self.initialWords = 0
        self.attemptCount = 0
        self.directoryThreadsCount = 1
        self.wordlist = None
        self.foundSubdirectories = deque()
        self.threadQueue = Queue()
        self.parser = argparse.ArgumentParser()
        self.setupArgs()
        self.initiateBusting()

    def setupArgs(self):
        self.parser.add_argument("-dict", help="Dictionary to use")
        self.parser.add_argument("-r", help="Be recursive", action="store_true")
        self.parser.add_argument(
            "-p", help="Number of parallel directories to bruteforce", default=1
        )
        self.parser.add_argument(
            "-t", help="Number of Threads to bust each directory", default=5
        )
        self.parser.add_argument("-url", help="Url to bust")
        self.parser.add_argument(
            "-v", help="Show all url attempts", action="store_true"
        )
        args = self.parser.parse_args()

        if args.url is None:
            print("Required url argument. Try using -url [url]")
            exit()
        if args.dict is None:
            print("Required dict argument. Try using -dict [dictionary]")
            exit()

    def initiateBusting(self):
        args = self.parser.parse_args()

        try:
            with open(args.dict) as dictionary:
                words = dictionary.readlines()
                self.wordlist = words
                threadLimit = int(args.t)
                self.initialWords = len(words)
                blockSize = self.initialWords // threadLimit
                self.totalWords = self.initialWords
                self.foundSubdirectories.append("/")
                print("====================================")
                if not args.v:
                    print("Links found:")
                else:
                    print("Links attempted:")
                print("====================================")
                args.url = args.url.strip()

                subdirectory = self.foundSubdirectories.popleft()
                self.directoryThread(words, args, subdirectory, threadLimit, blockSize)

                while not self.threadQueue.empty():
                    self.threadQueue.get().join()

        except KeyboardInterrupt:
            print("\n\033[93mProgram terminated by user!")
            exit()
        except FileNotFoundError:
            print("\033[93mDictionary file not found!")
            exit()

    def directoryThread(self, words, args, subdirectory, threadLimit, blockSize):
        for threadNumber in range(threadLimit - 1):
            lowerBound = threadNumber * blockSize
            upperBound = (threadNumber + 1) * blockSize - 1
            bustingThread = threading.Thread(
                target=self.bustingThread,
                args=(
                    words[lowerBound:upperBound],
                    args,
                    subdirectory,
                    False,
                    threadLimit,
                    blockSize,
                ),
            )
            bustingThread.daemon = True
            bustingThread.start()
            self.threadQueue.put(bustingThread)

        bustingThread = threading.Thread(
            target=self.bustingThread,
            args=(
                words[(threadLimit - 1) * blockSize :],
                args,
                subdirectory,
                True,
                threadLimit,
                blockSize,
            ),
        )
        bustingThread.daemon = True
        bustingThread.start()
        self.threadQueue.put(bustingThread)

    def bustingThread(
        self, words, args, subdirectory, isLastThread, threadLimit, blockSize
    ):
        for link in words:
            if link.startswith("#"):
                continue
            self.attemptCount += 1
            link = link.strip()
            print(
                "\u001b[37m{}/{}".format(self.attemptCount, self.totalWords), end="\r"
            )
            dest = args.url + subdirectory + link
            resp = requests.head(
                dest,
                headers={
                    "User-Agent": "Mozilla/5.0 (X11; Linux i686; rv:45.0) Gecko/20100101 Firefox/45.0"
                },
                verify=False,
            )

            if resp.status_code < 400 or resp.status_code >= 500:
                if resp.status_code >= 200 and resp.status_code < 300 and link != "":
                    print("\033[92m{} (status code: {})".format(dest, resp.status_code))
                else:
                    print("\033[93m{} (status code: {})".format(dest, resp.status_code))

                if link != "" and args.r:
                    newSubdirectory = "/{}/".format(link)

                    if self.directoryThreadsCount < int(args.p):
                        self.directoryThreadsCount += 1
                        directoryThread = threading.Thread(
                            target=self.directoryThread,
                            args=(
                                self.wordlist,
                                args,
                                newSubdirectory,
                                threadLimit,
                                blockSize,
                            ),
                        )
                        directoryThread.daemon = True
                        directoryThread.start()
                        self.threadQueue.put(directoryThread)
                    else:
                        self.foundSubdirectories.append(newSubdirectory)

                    self.totalWords += self.initialWords

            elif args.v:
                print("\033[91m{} (status code: {})".format(dest, resp.status_code))

        if self.foundSubdirectories:
            if isLastThread:
                nextSubdirectory = self.foundSubdirectories.pop()
            else:
                nextSubdirectory = self.foundSubdirectories[0]
            self.bustingThread(
                words, args, nextSubdirectory, isLastThread, threadLimit, blockSize
            )


DirectoryBuster()
