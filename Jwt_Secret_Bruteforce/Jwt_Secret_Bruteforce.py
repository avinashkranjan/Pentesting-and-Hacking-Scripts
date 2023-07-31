#!/usr/bin/env python3
#
# Python Script to bruteforce for Json Web Token Secret.
#

from concurrent.futures import ThreadPoolExecutor as executor
import argparse
import jwt, sys


def crack(token, algo, secret):
    options = {"verify_exp": False}
    try:
        payload = jwt.decode(token, secret, algorithm=algo, options=options)
        print("The Secret Key: " + secret)
        print("Payload: " + str(payload))
    except Exception:
        return False


parser = argparse.ArgumentParser()

parser.add_argument("-t", dest="token", type=str, help="Json Web Token.", required=True)
parser.add_argument(
    "-w", dest="wordlist", type=str, help="Wordlist Of Secrets.", required=True
)
parser.add_argument("-c", dest="threads", type=int, help="Threds Number (Default: 10).")
parser.add_argument("-a", dest="algo", type=str, help="The Algorithm (Default: HS256).")
args = parser.parse_args()
token = str(args.token)
wlist = str(args.wordlist)
threads = args.threads
algo = str(args.algo)
if threads == None:
    threads = 10
if algo == None:
    algo = "HS256"

secrets = open(wlist, "r")
with executor(max_workers=int(threads)) as exe:
    [exe.submit(crack, token, algo, secret.strip("\n")) for secret in secrets]


print("* Done! *")
