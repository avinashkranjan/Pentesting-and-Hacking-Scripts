from colorama import Fore
import re
import requests
import os
import sys
import urllib3

url = sys.argv[1]
urllib3.disable_warnings()
http = urllib3.PoolManager(cert_reqs='CERT_NONE')

print(f"{Fore.BLUE}[!] Checking if Mod_Security waf is present [!]")
checkxml = """<methodCall>
<methodName>system.listMethods</methodName>
<params></params>
</methodCall>"""
headers = {'Content-Type': 'application/xml'}
url = f"{url}/xmlrpc.php"
postresp = requests.post(url, data=checkxml, headers=headers, verify=False).text
if re.search("Mod_Security", postresp):
    print(f"{Fore.RED}[!] Potential: Target is protected by Mod_Security WAF [!]")
    print("[!] Interrupting Attack [!]")
    sys.exit(0)
else:
    print("[!] Mod_Security not found [!]")
    print(f"[!] Confidence: 100% [!]")

print(f"{Fore.BLUE}[!] Checking for DDOS exploit(pingback.ping method) [!]")
if re.search("pingback.ping", postresp):
    print(f"{Fore.GREEN}[!] {Fore.RED}Potential: {Fore.BLUE}Method pingback.ping enabled {Fore.GREEN}[!]")
    print(f"{Fore.GREEN}[!] {Fore.RED}Potential: {Fore.BLUE}Possibly this domain can be used as a botnet in a DDOS attack {Fore.GREEN}[!]")
    print(f"{Fore.GREEN}[!] {Fore.RED}Potential: {Fore.BLUE}Possible internal port scanning. [!]")
else:
    print(f"{Fore.GREEN}[!] Method pingback.ping not found [!]")

print(f"{Fore.BLUE}[!] Checking if Bruteforce is Possible(wp.getUserBlogs) [!]")
if re.search("wp.getUserBlogs", postresp):
    print(f"{Fore.GREEN}[!] {Fore.RED}Potential: {Fore.BLUE}Method wp.getUserBlogs enabled {Fore.GREEN}[!]")
    print(f"{Fore.GREEN}[!] {Fore.RED}Potential: {Fore.BLUE} Accounts can be cracked by taking advantage of this method {Fore.GREEN}[!]")
else:
    print(f"{Fore.GREEN}[!] Method wp.getUserBlogs not found [!]")

inp = input("Do you want to check all the available XMLRPC methods that are allowed? (y/any key) : ")

if inp=='y':
    ask=input("Do you want to save this response in a file for futher testing? (y/any key) : ")
    if ask=="y":
        filename = input("Enter the filename for output : ")
        try:
            op = open(filename, "a")
            op.write(postresp)
            print(postresp)
            print(f"\n[I] output saved to {filename} [I]")
        except:
            print(f"{Fore.RED}[!] Unable to open/create a file in this directory. [!]\nTry:\n\t1. Changing the directory.\n\t2. Run this script as root(if not running).")
    else:
        print(postresp)
else:
    pass