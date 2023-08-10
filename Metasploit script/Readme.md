# Metasploit Script

## Description

This script demonstrates the usage of the Metasploit Framework's RPC (Remote Procedure Call) API to interact with a Metasploit instance and perform penetration testing tasks.

## Requirements

- Python 3.x
- Metasploit Framework
- `metasploit` Python package (`pip install metasploit`)

## Usage

1. Start the Metasploit RPC service by running `msfrpcd -P your_password -S` in the command line. Replace `your_password` with your desired password.
2. Update the script with the appropriate values for the following variables:
   - `password`: The password used to authenticate with the Metasploit RPC service.
   - `exploit_name`: The name of the exploit module to use.
   - `target_ip`: The IP address of the target system.
   - `target_port`: The port number of the target system.
   - `payload_name`: The name of the payload to use.
3. Run the script: `python metasploit_script.py`.
4. View the console output to check if the exploit was successful.
5. Once finished, stop the Metasploit RPC service by running `msfrpcd --stop` in the command line.
