#!/usr/bin/python
# coding=utf-8
# Author github.com/Eltotiz

import os
from colorama import Fore, init, Style
import requests
import time
import random
import string


def clear():
    if os.name == "posix":
        os.system ("clear")
    elif os.name == ("ce", "nt", "dos"):
        os.system ("cls")

clear()


print()
print("""                                                       
     _____ _                     _____         _           
    |   __| |_ ___ ___ ___ _____|  |  |_ _ ___| |_ ___ ___ 
    |__   |  _|  _| -_| .'|     |     | | |   |  _| -_|  _|
    |_____|_| |_| |___|__,|_|_|_|__|__|___|_|_|_| |___|_|  

                Created by github.com/Eltotiz
                """)
input(" [+] Press enter to start!")
print()
print(" [+] Searching videos...")
print()
print()

value = 1

while value <= 1000000000000000000000000000000000000000:
    value += 1
    text = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(6))
    minus = text.lower()
    time.sleep(1)
    src = requests.get(f'https://streamable.com/{minus}')
    try:
        if src.status_code == 404:
            Lol = "Hello :)"
        else:
            print(Fore.GREEN + f' [+] https://streamable.com/{minus} VALID LINK')
                
    except Exception:
        print()
        print(" [?] There was an error connecting to stremeable.com ...")
