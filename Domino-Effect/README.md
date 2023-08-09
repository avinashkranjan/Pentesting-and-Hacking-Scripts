## Domino Effect

---

Domino effect exploits an IBM Domino Database Security Bypass vulnerability, [CVE-2005-2428](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2005-2428), to extract password hashes from the _names.nsf_ database. Domino effect obtains password hashes from hidden HTML _HTTPPassword_ and _dspHTTPPassword_ fields and outputs them to stdout in multiple formats for use with hashcat and/or john the ripper.

This script was inspired by @maudits's [fetchDomino](https://github.com/maudits/fetchDomino)

### Help

```
Domino Effect - A Lotus Domino password hash tool by Jonathan Broche (@g0jhonny)

positional arguments:
  system               IP address or hostname to harvest hashes from.

optional arguments:
  -h, --help           show this help message and exit
  -v, --version        show program's version number and exit
  -u path, --uri path  Path to the names.nsf file. [Default: /names.nsf]

Output Options:
  --hashcat            Print results for use with hashcat.
  --john               Print results for use with John the Ripper.

```
