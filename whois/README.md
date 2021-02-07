## Whois

This script will retrieve and parse Whois (technically RDAP) information for IP addresses. In addition, the script also has the ability to quickly perform reverse DNS lookups for any given domain name(s). This script was created primarily to facilitate recursive Whois queries.

```
Whois - A python based Whois retriever/parser

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit
  --clean               Print CIDRs from results
  --raw                 Print raw RDAP results as JSON

Search:
  query                 IP address or domain name to query
  -f [file], --file [file]
                        A new line delimited file containing IP addresses or
                        domain names
  -r, --reverse         Retrieve IP address for given domain(s)
```
