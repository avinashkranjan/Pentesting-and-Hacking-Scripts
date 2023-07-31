import os
import sys
import time
from time import sleep
import requests
from os import system


try:
    request = requests.get(
        "https://www.google.com/search?q=freemailsender.com", timeout=3
    )
except (requests.ConnectionError, requests.Timeout) as exception:
    print("[!] Oops, It looks like you have no Internet [!]")
    sys.exit()

import requests

R = "\033[1;31m"
G = "\033[1;32m"
Y = "\033[1;33m"
C = "\033[1;36m"
W = "\033[1;37m"


def hprint(s):
    for c in s + "\n":
        sys.stdout.write(c)
        sys.stdout.flush()
        time.sleep(8.0 / 100)


logo = """
\033[1;32m ____    ____     ___     ___    _____  __   __
\033[1;32m/ ___|  |  _ \   / _ \   / _ \  |  ___| \ \ / /
\033[1;32m\___ \  | |_) | | | | | | | | | | |_     \ V /
\033[1;32m ___) | |  __/  | |_| | | |_| | |  _|     | |
\033[1;32m|____/  |_|      \___/   \___/  |_|       |_|  


\033[1;36m [\033[1;37m+\033[1;36m]\033[1;32m DEVELOPED BY NIRAJ GAJUREL \033[1;31m(\033[1;33mNIRAJ GAJUREL\033[1;31m)

\033[1;36m [\033[1;37m+\033[1;36m]\033[1;32m MADE IN \033[1;31m(\033[1;33mNEPAL\033[1;31m)
"""
system("clear")
print(logo)
hprint(G + " Starting Spoofy for Sending Emails ...")
sleep(2)
print("")
license = input(G + " Enter License Key" + C + " --> " + Y)
print("")
name = input(G + " Enter Sender's Name" + C + " --> " + Y)
print("")
sender = input(G + " Enter Sender's Email" + C + " --> " + Y)
print("")
receiver = input(G + " Enter Receiver's Email" + C + " --> " + Y)
print("")
subject = input(G + " Enter Subject" + C + " --> " + Y)
print("")
body = input(G + " Enter the Message" + C + " --> " + Y)
print("")

files = {
    "license": (None, license),
    "name": (None, name),
    "subject": (None, subject),
    "email": (None, receiver),
    "from": (None, sender),
    "message": (None, body),
    "submit": (None, "submit"),
}
response = requests.post(
    "https://mail.polarnightfraternity.com/spoofy/spoofy.php", files=files
)
hprint(C + " Sending email to " + receiver + " ...")
print("")
print(G + " " + response.text)
print("")


if "BTC" in response.text:
    print(R + " Talk Live With Me --> https://t.me/")
else:
    print("")
