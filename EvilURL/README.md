# Evil URL

The script is a Python tool called "EvilURL," designed to generate unicode evil domains for IDN Homograph Attacks and detect them. It aims to identify potential security vulnerabilities related to IDN (Internationalized Domain Names) homograph attacks, where visually similar characters from different character sets are used to deceive users and create phishing or malicious websites.

## The main functionalities of the script are as follows:

1. Generating Evil Domains: The script allows users to input a domain name and generates various evil domains by replacing certain characters with visually similar Unicode characters. It then saves the generated evil domains to a file, checks their connection status, and provides information about the Unicode characters used in each domain.

2. Checking for Evil Characters: The script offers the ability to check if a given URL contains evil characters (specifically, the ones used for IDN homograph attacks). It lists the Unicode characters present in the URL if any are found.

3. Checking Domain Connection: The script includes an option to check the connection status of a domain using the nmap library. It indicates whether the domain is up or down based on the network scan results.

4. Checking Domain Availability: Additionally, users can check if the generated or provided domains are available for registration or have already been taken. The script uses the whois library to query domain registration information.

The script has been optimized by using f-strings for string formatting, implementing argparse subparsers for handling different modes, and using a single instance of nmap.PortScanner for efficiency. Furthermore, the script supports colored output on both Windows and Unix-like systems using the colorama library.

## To install the dependencies

`pip install -r requirements.txt`

## To generate evil domains for a given domain and save them to a file:

`python evilurl.py generate example.com -c -o output.txt -a`

## To check if a URL contains evil characters:

`python evilurl.py check http://www.exaмple.com`
