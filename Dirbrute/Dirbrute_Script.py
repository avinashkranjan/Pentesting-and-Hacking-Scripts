#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  dirbrute.py
#
#  Copyright 2023 Kalivarapubindusree
#
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#

yellow = "\033[93m"
green = "\033[92m"
blue = "\033[94m"
red = "\033[91m"
bold = "\033[1m"
end = "\033[0m"


print(
    blue
    + bold
    + """

\t     _ _      _                _       
\t  __| (_)_ __| |__  _ __ _   _| |_ ___ 
\t / _` | | '__| '_ \| '__| | | | __/ _ \\
\t| (_| | | |  | |_) | |  | |_| | ||  __/
\t \__,_|_|_|  |_.__/|_|   \__,_|\__\___|"""
    + bold
    + "V: 1.6"
    + end
    + blue
    + """
\t
\t             Coded by: Kalivarapubindusree
\t             ---------------
"""
    + end
)


from concurrent.futures import ThreadPoolExecutor as executor
import sys, time, requests
from optparse import *

start = time.time()


def printer(word):
    sys.stdout.write(word + "                                        \r")
    sys.stdout.flush()
    return True


def presearch(domain, ext, url):
    if ext == "Null" or ext == "None":
        checkstatus(domain, url)
    elif url == "" or url == " ":
        pass
    else:
        ext = list(ext)
        ext.append("")
        for i in ext:
            if i == "" or i == "None":
                link = url
            else:
                link = url + "." + str(i)

            checkstatus(domain, link)


def checkstatus(domain, url):
    if url == "" or url == " ":
        pass
    elif url.startswith("#"):
        pass
    elif len(url) > 30:
        pass

    else:
        printer("Testing: " + domain + url)
        # time.sleep(1)
        try:
            link = domain + url
            req = requests.head(link)
            st = str(req.status_code)
            if st.startswith("2"):
                print(
                    green
                    + "[+] "
                    + st
                    + " | Found: "
                    + end
                    + "[ "
                    + url
                    + " ]"
                    + "                                                   \r"
                )
            elif st.startswith("3"):
                link = req.headers["Location"]
                # link = req.url
                print(
                    yellow
                    + "[*] "
                    + st
                    + " | Redirection From: "
                    + end
                    + "[ "
                    + url
                    + " ]"
                    + yellow
                    + " -> "
                    + end
                    + "[ "
                    + link
                    + " ]"
                    + "                                         \r"
                )

            elif st.startswith("1"):
                print(
                    green
                    + "[+] "
                    + st
                    + " | Found: "
                    + end
                    + "[ "
                    + url
                    + " ]"
                    + "                                                   \r"
                )
            elif st.startswith("4"):
                if st != "404":
                    print(
                        blue
                        + "[!] "
                        + st
                        + " | Found: "
                        + end
                        + "[ "
                        + url
                        + " ]"
                        + "                                                   \r"
                    )

                    # writer(link,'up')

            return True

        except Exception:
            # writer(url,'down')
            return False


parser = OptionParser(
    green
    + """

#Usage:"""
    + yellow
    + """
	-t target host
	-w wordlist
	-d thread number (Optional, Default: 10)
	-e extensions (Optional, ex: html,php)
"""
    + green
    + """
#Example:"""
    + yellow
    + """
	python3 dirbrute.py -t domain.com -w dirlist.txt -d 20 -e php,html

"""
    + end
)


def Main():
    try:
        parser.add_option("-t", dest="target", type="string", help="the target domain")
        parser.add_option("-w", dest="wordlist", type="string", help="wordlist file")
        parser.add_option("-d", dest="thread", type="int", help="the thread number")
        parser.add_option("-e", dest="extension", type="string", help="the extendions")
        (options, args) = parser.parse_args()
        if options.target == None or options.wordlist == None:
            print(parser.usage)
            exit(1)
        else:
            target = str(options.target)
            wordlist = str(options.wordlist)
            thread = str(options.thread)
            ext = str(options.extension)

            if thread == "None":
                thread = 10
            else:
                thread = thread

            if target.startswith("http"):
                target = target
            else:
                target = "http://" + target

            if target.endswith("/"):
                target = target
            else:
                target = target + "/"

            lines = len(open(wordlist).readlines())

            print("[" + yellow + bold + "Info" + end + "]:\n")
            print(blue + "[" + red + "+" + blue + "] Target: " + end + target)
            print(blue + "[" + red + "+" + blue + "] File: " + end + wordlist)
            print(blue + "[" + red + "+" + blue + "] Length: " + end + str(lines))
            print(blue + "[" + red + "+" + blue + "] Thread: " + end + str(thread))
            print(blue + "[" + red + "+" + blue + "] Extension: " + end + str(ext))
            print("\n[" + yellow + bold + "Start Searching" + end + "]:\n")

            if ext == "None":
                ext = "Null"
            else:
                ext = ext.split(",")

            urls = open(wordlist, "r")
            with executor(max_workers=int(thread)) as exe:
                jobs = [
                    exe.submit(presearch, target, ext, url.strip("\n")) for url in urls
                ]

            took = time.time() - start
            took = took / 60
            took = round(took, 2)

            print(
                red + "Took: " + end + str(took) + " m" + "                          \r"
            )

            print("\n\t* Happy Hacking *")
    except Exception as e:
        print(red + "#Error: " + end + str(e))
        exit(1)


if __name__ == "__main__":
    Main()
