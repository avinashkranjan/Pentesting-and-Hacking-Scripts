***
# NOTICE:
 
## This repository has been archived and is not supported.
 
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
***

# Nightcall

Automated enumeration script built to reduce repetitive tasks during large black-box network pentests. Initial host discovery performed by basic throttled masscan, followed by service enumeration of each host, full port if host count less than a preconfigured constant, top port count otherwise. Nmap outputs are then parsed and common tooling queued up for follow up enumeration based on discovered service. All tasks after initial host discovery are multi-processed, with the task count being a configurable constant.

While actions and tooling are by no means exhaustive, tooling and configuration are meant to be easily configurable and modifiable to suit testers' needs. Most command configuration strings and wordlist selections are located at the beginning of the script. Nmap NSEs were selected for speed, safety, and usefulness. Nightcall is not meant as a replacement for vulnerability scanning solutions such as Tenable or OpenVAS, merely to fill a gap where manual testing efforts intersect. Additionally, Nightcall is focused more on understanding known IPv4 ranges than discovery of unknown subdomains. CaKinney's [domained](https://github.com/cakinney/domained) is a good option for that task.

## Prereqs and Setup

Nightcall was built for use on Kali Linux. While it may function on alternate distros, certain tooling and pathing is assumed available outside setup. Because of the tooling and tasks performed, privileged root access is required. A code review is encouraged.

A goal was made to stay as close to out-of-the-box tooling as possible, but as development progressed minor additions were made to address challenges. Future improvements may address this by leveraging pre-installed solutions. For the time being, the following should install prerequisites. Again... a code review is encouraged.

```
root@kali:~# python3 nightcall.py --install-prereqs
```

Alternatively, prerequisites can be manually prepared.

```
root@kali:~# apt-get install python3-pip masscan nfs-common xvfb -yqq
root@kali:~# pip3 install tqdm
```

## Running

While Nightcall has some basic progress metering, its meant more as a fire and review-later solution made for backgrounding with something like [screen](https://linuxize.com/post/how-to-use-linux-screen/). The running log can be [tailed](https://www.linode.com/docs/tools-reference/tools/view-and-follow-the-end-of-text-files-with-tail/) during use.

By default, neither Medusa brute-forcing nor extended web checks with Wfuzz and Nikto will be performed. Those checks can be enabled by leveraging -w and -b respectively. If connecting over vpn use the -i switch to specify the interface to be used for masscan and nmap scans.

Nightcall was not built to handle resuming of previous sessions, but if a previous run was interrupted or follow-up testing needs to be performed, -sP can be leveraged to import nmap xml. Ensure an xml directory containing nmap xml exists in the working directory. Only the targets specified (-f or single address) will be imported from these xml files in order to facilitate selective follow up enumeration.

```
root@kali:~# python3 nightcall.py

usage: nightcall.py [-h] [-sP] [-i IFACE] [-f TARGET_FILE] [--install-prereqs]
                    [-b] [-w] [--disable-resolve]
                    [single_address]

positional arguments:
  single_address        single host or network (excludes -f)

optional arguments:
  -h, --help            show this help message and exit
  -sP, --skip-portscans
                        skip portscans, directly import xml
  -i IFACE, --iface IFACE
                        interface to use for masscan and nmap
  -f TARGET_FILE, --target-file TARGET_FILE
                        target file containing line separated ip addresses
                        (cidr supported)
  --install-prereqs     attempt to install TQDM progress bar, python3-pip,
                        masscan, nfs-common, xvfb
  -b, --brute           enable bruteforcing (consider lockouts)
  -w, --web             enable additional web related scans
  --disable-resolve     disable separate hostname resolution (outside nmap)

```

![Nightcall](../screenshots/nightcall.png?raw=true)

## Tooling

* **masscan** - host discovery amongst sparse ranges, throttled to reduce impact potential 
* **nmap** - service enumeration and select NSEs
* **whatweb** - web technology identification
* **cutycapt** - Image capture
* **enum4linux** - smb/samba enumeration
* **dnsrecon** - general dns zone xfer and ptr review 
* **metasploit** - additional auxiliary checks

**Optional Web Checks**
* **nikto** - general web service enumeration
* **wfuzz** - predictable content discovery
* **wafw00f** - IDS / WAF detection
* **wpscan** - wordpress enumeration
* **joomscan** - joomla enumeration

**Optional Brute-Forcing**
* **medusa** - optional brute-forcing attempts

**Auxiliary MSF Modules**
* auxiliary/scanner/http/dir_listing
* auxiliary/scanner/http/http_put
* auxiliary/scanner/http/host_header_injection
* auxiliary/scanner/http/smt_ipmi_49152_exposure
* auxiliary/scanner/ipmi/ipmi_cipher_zero
* auxiliary/scanner/ipmi/ipmi_dumphashes
* auxiliary/scanner/ipmi/ipmi_version
* auxiliary/scanner/misc/java_rmi_server
* auxiliary/scanner/smtp/smtp_enum
* auxiliary/scanner/snmp/snmp_login
* auxiliary/scanner/ssh/ssh_enumusers
* auxiliary/scanner/ssl/openssl_ccs
* auxiliary/scanner/http/crawler (optional web)
* auxiliary/scanner/http/jboss_vulnscan (optional web)
* auxiliary/scanner/http/tomcat_mgr_login (optional web)
* auxiliary/scanner/tftp/tftpbrute (optional brute)

## Output

Tooling output will be collected and organized into the following subdirectories during enumeration by {host}-{port}.{type}, where type is some combination of categorization and tool depending on the application.

* **nmap** - *textual and greppable nmap output*
* **xml** - *masscan and nmap xml*
* **msf** - *metasploit module results*
* **misc** - *various tooling output*
* **http** - *web related output*
* **http/images** - *screenshot captures*
* **brute** - *brute-forcing results if selected*

![Nightcall Output](../screenshots/nightcall_output.png?raw=true)

This approach was preferred over a by-host-subfolder strategy due to the massive number of directories that can be created and ease of grepping. Some minor summarization will be collected from specific files. Smaller engagements may benefit from Metasploit’s db_import of nmap xml, but for larger engagements leveraging a solution such as [Offensive Elk](https://github.com/marco-lancini/docker_offensive_elk), [Moloch](https://github.com/aol/moloch), or [IVRE](https://ivre.rocks/) is recommended. A primary log file in the project directory contains a journal of commands executed and their associated timestamps.

![Nightcall Log](../screenshots/nightcall_log.png?raw=true)

## Built With
* **[tqdm](https://pypi.org/project/tqdm/)**

## Known-Issues

### Timeouts

Because timeouts and host connectivity can cause interuptions during enumeration of many hosts, a strategy of try / timeout / move-on was preferred rather than holding up other queued tasks. Most time-outs are configurable within the script.

Because Nightcall was created to handle large host-count engagements, small host count may cause masscan issues with timeout during initial host discovery. Timeout can be manually adjusted via constant in the script (DISCOVERY_WAIT), or a separate Nmap can be performed and imported leveraging the -sP switch described above.

Masscan has received bugfixes over the past year that appear to have improved this, but have not yet made it into Kali’s repository. It is highly recommended to build it from [@ErrataRob](https://twitter.com/erratarob)’s [repo](https://github.com/robertdavidgraham/masscan) should any host discovery issues be experienced. Additionally, ensure the correct interface has been specified with -i if scanning over a vpn connection.

### Sanitization

While teaching us about *rm*, a wise man once followed the lesson with the adage "*your gun... your foot*". This script requires escalated privileges to run, and executes shell commands by design. Review it prior to running, be careful what you import, and where you aim.

## License

This project is licensed under the Apache 2.0 license - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

Dori Clark, Caleb Ashe, David Winkle and others at Walmart Infosec Security Testing & Analysis for input and patience during alpha/beta testing.

Shout-out to [@xer0dayz](https://twitter.com/xer0dayz) for [Sn1per](https://github.com/1N3/Sn1per) and [BruteX](https://github.com/1N3/BruteX). Dig the tools but had different needs. Imitation is the most sincere form of flattery :grin:
