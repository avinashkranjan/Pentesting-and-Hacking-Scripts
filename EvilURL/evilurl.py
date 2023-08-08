#!/usr/bin/env python

# Imports
import sys
import argparse
from nmap import PortScanner
from whois import whois
import colorama
from colorama import Fore, Style
import itertools

# Initialize colorama for colored output on Windows
colorama.init(autoreset=True)

# Constants
EVIL_CHARS = {
    'a': '\u0430', 'c': '\u03F2', 'e': '\u0435',
    'o': '\u043E', 'p': '\u0440', 's': '\u0455',
    'd': '\u0501', 'q': '\u051B', 'w': '\u051D'
}

UNICODES = {
    '\u0430': 'Cyrillic Small Letter A',
    '\u03F2': 'Greek Lunate Sigma Symbol',
    '\u0435': 'Cyrillic Small Letter Ie',
    '\u043E': 'Cyrillic Small Letter O',
    '\u0440': 'Cyrillic Small Letter Er',
    '\u0455': 'Cyrillic Small Letter Dze',
    '\u0501': 'Cyrillic Small Letter Komi De',
    '\u051B': 'Cyrillic Small Letter Qa',
    '\u051D': 'Cyrillic Small Letter We'
}

def generate_evil(domain, check_connection=False, output_file=None, check_availability=False):
    # Generate evil domains based on the given domain name
    domain = domain.lower()
    tld = '.' + domain.split('.')[-1]

    evils = list(EVIL_CHARS.keys())
    e_matchs = [ch for ch in evils if ch.upper() in domain.upper()]

    words = []
    for i in range(1, 9):
        for combination in itertools.combinations(e_matchs, i):
            words.append(''.join(combination))

    with open(output_file, 'w') as output:
        for word in words:
            new_url = domain
            unicodes_used = []
            chars_replaced = []
            for w in word:
                if w in EVIL_CHARS:
                    char = EVIL_CHARS[w]
                    unicodes_used.append(char)
                    chars_replaced.append(w)
                    name = UNICODES[char]
                    new_url = new_url.replace(w, char)

            evil_url = new_url + tld
            output.write(f"{domain} -> {''.join(chars_replaced)} -> {''.join(unicodes_used)} -> {evil_url}\n")
            print_evil(evil_url, chars_replaced, unicodes_used)

            if check_connection:
                check_url_connection(evil_url)

            if check_availability:
                check_domain_availability(evil_url)

def check_evil(url):
    # Check if the given URL contains evil characters
    evil_chars = [EVIL_CHARS[ch] for ch in EVIL_CHARS if ch in url]

    if evil_chars:
        msg = f"{Fore.GREEN}[+] Evil URL detected: {url}\n"
        msg += f"{Fore.GREEN}[+] Unicode characters used: {', '.join(evil_chars)}"
    else:
        msg = f"{Fore.YELLOW}[-] Evil URL NOT detected: {url}"

    print(msg)

def check_url_connection(url):
    # Check connection to the given URL
    nm_scan = PortScanner()
    result = nm_scan.scan(url, arguments='-sn')

    if int(result['nmap']['scanstats']['uphosts']) > 0:
        msg = f"{Fore.GREEN}[+] Connection test: UP"
    else:
        msg = f"{Fore.YELLOW}[-] Connection test: DOWN"

    print(msg)

def check_domain_availability(domain):
    # Check if the domain is available
    try:
        whois_info = whois(domain)
        if whois_info.registrar is None:
            msg = f"{Fore.GREEN}[+] Available domain"
        else:
            msg = f"{Fore.YELLOW}[-] Unavailable domain"
    except:
        msg = f"{Fore.RED}[!] Unable to check domain availability"

    print(msg)

def print_evil(url, chars_replaced, unicodes_used):
    # Print the evil URL details
    unicodes_used_str = ', '.join([f"{unicode} ({UNICODES[unicode]})" for unicode in unicodes_used])
    chars_replaced_str = ', '.join(chars_replaced)
    print(f"{Fore.CYAN}[+] Domain name: {url}")
    print(f"{Fore.CYAN}[+] Char replaced: {chars_replaced_str}")
    print(f"{Fore.CYAN}[+] Using Unicode: {unicodes_used_str}")

def main():
    parser = argparse.ArgumentParser(description="Generate unicode evil domains for IDN Homograph Attack and detect them.")
    subparsers = parser.add_subparsers(dest='mode', title='Modes', description='Available modes')

    generate_parser = subparsers.add_parser('generate', help='Generate unicode evil domains')
    generate_parser.add_argument('domain', type=str, help='Domain name with termination (example.com)')
    generate_parser.add_argument('-c', '--check-connection', action='store_true', help='Check generated domain connections')
    generate_parser.add_argument('-o', '--output-file', type=str, help='Save generated evil domains to a file')
    generate_parser.add_argument('-a', '--check-availability', action='store_true', help='Check if domain is available')

    check_parser = subparsers.add_parser('check', help='Check if a URL contains evil characters')
    check_parser.add_argument('url', type=str, help='URL to check for evil characters')

    args = parser.parse_args()

    if args.mode == 'generate':
        generate_evil(args.domain, args.check_connection, args.output_file, args.check_availability)
    elif args.mode == 'check':
        check_evil(args.url)
    else:
        parser.print_help()

if __name__ == '__main__':
    main()
