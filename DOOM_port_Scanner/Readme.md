# DOOM Port Scanner

The DOOM Port Scanner is a tool designed to scan ports on a target system quickly and easily. It helps identify open ports and determine which services are running on the target system. This README provides information on how to set up and use the DOOM Port Scanner effectively.

## Features

- Fast and efficient port scanning.
- Support for scanning multiple target systems simultaneously.
- Gives Total scanning time.
- Clear and concise output displaying open ports and associated services.

## Installation

Clone the repository:

```bash
git clone https://github.com/pentesting-and-Hacking-Scripts/DOOM-port-scanner.git

cd doom-port-scanner

pkg install git -y

pkg install python -y

pkg install python3 -y

python DOOM_port_scanner.py --target 192.168.0.1 --ports 1-1000 --timeout 3
```
