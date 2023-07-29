# !/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  webtech.py
#
#  Copyright 2019 bingo <bingo@hacklab>
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

from concurrent.futures import ThreadPoolExecutor as executor  # pip install futures
from Wappalyzer import Wappalyzer, WebPage  # pip install python-Wappalyzer
import urllib3, argparse

urllib3.disable_warnings(
    urllib3.exceptions.InsecureRequestWarning
)  # disable Python SSL warnings !

green = "\033[32m"
blue = "\033[34m"
red = "\033[31m"
bold = "\033[1m"
end = "\033[0m"

wappalyzer = Wappalyzer.latest()


print(
    blue
    + """
__        __   _   _____         _     
\ \      / /__| |_|_   _|__  ___| |__  
 \ \ /\ / / _ \ '_ \| |/ _ \/ __| '_ \ 
  \ V  V /  __/ |_) | |  __/ (__| | | |
   \_/\_/ \___|_.__/|_|\___|\___|_| |_| @bing0o
        Web Technologies Detector
	
	"""
    + end
)


def check(out, ig, url):
    if not url.startswith("http"):
        url = "http://" + url
    try:
        webpage = WebPage.new_from_url(url)
        tech = wappalyzer.analyze(webpage)
        print("[+] " + str(url) + " | " + green + bold + " - ".join(tech) + end)
        if out != "None":
            with open(out, "a") as f:
                f.write(url + " | " + " - ".join(tech) + "\n")
                f.close()

    except Exception as e:
        if ig == "True":
            pass
        else:
            print(
                red + "Error: " + end + "[ " + bold + str(url) + end + " ] > " + str(e)
            )


parser = argparse.ArgumentParser()
parser.add_argument(
    "-w", "--wordlist", help="Domains List File", type=str, required=True
)
parser.add_argument("-t", "--thread", help="Theads Number - (Default: 10)", type=int)
parser.add_argument("-i", "--ignore", help="To Ignore The Errors", action="store_true")
parser.add_argument("-o", "--output", help="Save The Results To a File", type=str)

args = parser.parse_args()

links = str(args.wordlist)
threads = str(args.thread)
ig = str(args.ignore)
out = str(args.output)

lines = len(open(links).readlines())

if threads == "None":
    threads = 10

print(blue + "[" + red + "+" + blue + "] File: " + end + links)
print(blue + "[" + red + "+" + blue + "] Length: " + end + str(lines))
print(blue + "[" + red + "+" + blue + "] Output: " + end + str(out))
print(blue + "[" + red + "+" + blue + "] Threads: " + end + str(threads))
print(blue + "[" + red + "+" + blue + "] Ignore: " + end + str(ig))

print(red + "\n[+] Results:\n" + end)


urls = open(links, "r")
with executor(max_workers=int(threads)) as exe:
    [exe.submit(check, out, ig, url.strip("\n")) for url in urls]
