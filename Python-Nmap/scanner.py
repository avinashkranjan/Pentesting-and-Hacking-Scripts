import os
import sys
import json
import nmap3
import socket
import subprocess
import urllib.request
from nmap3.exceptions import NmapNotInstalledError


# Function to download Nmap installer if not already present
def download_nmap():
    url = "https://nmap.org/dist/nmap-7.93-setup.exe"
    filename = "nmap-7.93-setup.exe"
    cwd = os.path.realpath(os.path.dirname(__file__))
    path = os.path.join(cwd, "nmap-7.93-setup.exe")
    if not os.path.exists(path):
        print(
            "Downloading Nmap...\nThis may take time according to your network connection..."
        )
        urllib.request.urlretrieve(url, filename)
        print("Download Complete")
    else:
        print("Executable file already exists")


# Function to install Nmap using the downloaded installer
def install_nmap():
    cwd = os.getcwd()
    cmd = os.path.join(cwd, "nmap-7.93-setup.exe")
    subprocess.call(cmd, shell=True)
    print(
        "\n\n\n\nIt is recommended to restart your PC after installation completes.\n\n\n\n"
    )
    shut = input("Do you want to restart?\nPress 1 to restart\nPress 0 to continue")
    if shut == "1":
        print("Restarting")
        subprocess.call("shutdown /r /t 5")


# Function to check if Nmap is installed, if not, download and install it on Windows
def check_nmap_install():
    os_type = sys.platform
    if os_type == "win32":
        try:
            nmap3.Nmap().nmap_version()
        except NmapNotInstalledError:
            download_nmap()
            install_nmap()


# Function to check if a given IP address is valid
def is_valid_ip(ip):
    try:
        socket.inet_aton(ip)
        return True
    except socket.error:
        return False


# Function to prompt user for input (IP address or domain name) and return the value
def get_user_input():
    print("1. IP address")
    print("2. Domain Name")
    print()
    choice = input("Select your choice: ")
    while choice not in ["1", "2"]:
        print("\n-----Invalid choice!-----\n")
        choice = input("Select your choice: ")
    print()

    if choice == "1":
        ip_address = input("Enter an IP address: ")
        print()
        if is_valid_ip(ip_address):
            return ip_address
        else:
            print("Invalid IP address.")
            return None
    elif choice == "2":
        domain_name = input("Enter a domain: ")
        print()
        return domain_name


# Function to perform the selected task based on user input
def perform_task(task):
    nmap = nmap3.Nmap() if 1 <= task <= 7 else nmap3.NmapScanTechniques()
    if task == 1:
        string = get_user_input()
        if string is None:
            return
        scan_result = nmap.scan_top_ports(string)
    elif task == 2:
        print("You must be root/administrator to perform this task")
        string = get_user_input()
        if string is None:
            return
        scan_result = nmap.nmap_os_detection(string)
    elif task == 3:
        string = input("Enter a subdomain: ")
        scan_result = nmap.nmap_dns_brute_script(string)
    elif task == 4:
        string = get_user_input()
        if string is None:
            return
        scan_result = nmap.nmap_version_detection(string)
    elif task == 5:
        scan_result = nmap.nmap_version()
    elif task == 6:
        string = get_user_input()
        if string is None:
            return
        scan_result = nmap.nmap_list_scan(string)
    elif task == 7:
        string = input("Enter a valid subnet: ")
        scan_result = nmap.nmap_subnet_scan(string)
    else:
        return

    # Convert the scan result to JSON format
    results = json.dumps(scan_result)

    # Load the formatted JSON result
    formatted_result = json.loads(results)

    # Print the formatted result
    print(json.dumps(formatted_result, indent=1))


# Variables for storing IP address and domain name
ip_address = ""
domain_name = ""

# Check if Nmap is installed, if not, download and install it
check_nmap_install()

print("-" * 20, "Python Nmap Scanner", "-" * 20)

# Print menu options for the user
menu_options = [
    "Scan top ports",
    "Determine the OS of the host",
    "Perform a DNS-brute script",
    "Service/Version Detection",
    "Nmap version info",
    "Perform list scan",
    "Perform subnet scan",
    "Perform SYN scan",
    "Perform TCP scan",
    "Perform UDP scan",
    "Perform FIN scan",
    "Perform IDLE scan",
    "Perform PING scan",
    "Exit",
]

for index, option in enumerate(menu_options, start=1):
    print(f"{index}. {option}")

print()

# Prompt the user to select a task
task = input("From the listed tasks, select a task that you want to perform: ")
while not task.isdigit() or int(task) < 1 or int(task) > 14:
    print("Enter a valid choice.")
    task = input("From the listed tasks, select a task that you want to perform: ")
task = int(task)

if task == 14:
    print("Exiting program.")
    sys.exit()

print()
print("You have selected to perform task", task)

print()
print("Scanner is currently performing the task")
print()

perform_task(task)
