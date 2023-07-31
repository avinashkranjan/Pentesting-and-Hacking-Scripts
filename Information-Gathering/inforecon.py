import sys
import requests
import socket
import json
import whois
from Wappalyzer import Wappalyzer, WebPage
import warnings
import nmap3

if len(sys.argv) < 2:
    print("Usage: " + sys.argv[0] + " <url>")
    sys.exit(1)

req = requests.get("https://" + sys.argv[1])
print("\n***----- Headers -----***")
print("\n" + str(req.headers))


gethostby_ = socket.gethostbyname(sys.argv[1])
print("\nThe IP address of " + sys.argv[1] + " is:" + gethostby_ + "\n")

# ipinfo.io --> API for location
# IP lookup
req_two = requests.get("https://ipinfo.io/" + gethostby_ + "/json")
resp_ = json.loads(req_two.text)
print("\n***-----IP lookup-----***")
print("Location: " + resp_["loc"])
print("Region: " + resp_["region"])
print("City: " + resp_["city"])
print("Country: " + resp_["country"])

# WHOis lookup
whois_data = whois.query(sys.argv[1])
print("\n***-----Whois lookup-----***")
print("Domain Registrar: " + whois_data.registrar)
print("Registration Date: " + str(whois_data.creation_date))
print("Expiration Date: " + str(whois_data.expiration_date))
print("Name Servers: " + ", ".join(whois_data.name_servers))

# Wappalyzer Results
print("\n***-----Technologies used-----***")
warnings.filterwarnings(
    "ignore",
    message="""Caught 'unbalanced parenthesis at position 119' compiling regex""",
    category=UserWarning,
)
link = WebPage.new_from_url("https://" + sys.argv[1])
wappalyzer = Wappalyzer.latest()
details = wappalyzer.analyze_with_categories(link)
print(json.dumps(details, indent=5))

# Nmap results
print("\n***-----Port scan-----***")
nmap = nmap3.Nmap()
results = nmap.scan_top_ports(gethostby_)
print(json.dumps(results, indent=4))
