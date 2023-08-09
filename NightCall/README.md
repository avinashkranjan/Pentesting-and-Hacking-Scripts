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
