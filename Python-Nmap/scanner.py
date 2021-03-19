import nmap3
import json
import socket
import sys

def Valid_IP(IP):
    try:
        socket.inet_aton(IP)
        return True
    except:
        return False

IP_ADDRESS = ""
DOMAIN_NAME = ""

print("-"*20, "Python Nmap Scanner", "-"*20)

print("1. Scan top ports")
print("2. Determine the OS of the host")
print("3. Perform a DNS-brute script")
print("4. Service/Version Detection")
print("5. Nmap version info")
print("6. Perform list scan")
print("7. Perform subnet scan")
print("8. Perform SYN scan")
print("9. Perform TCP scan")
print("10. Performa UDP scan")
print("11. Perform FIN scan")
print("12. Perform IDLE scan")
print("13. Perform PING scan")
print("14. Exit")
print()

task = int(input("From the listed tasks select a task that you want to perform: "))

if(task < 1 or task > 15):
    print("Enter a valid choice.")
    exit()

if(task == 14):
    print("Exiting program.")
    exit()

print()
print("You have selected to perform task", task)

print()
print("Scanner is currently performing the task")
print()

if(1 <= task <= 7):
    nmap = nmap3.Nmap()

else:
    nmap = nmap3.NmapScanTechniques()

def call_for_input():
    print("1. IP address")
    print("2. Domain Name")
    print()
    choice = int(input("Select your choice: "))
    print()
    if(choice == 1):
        IP_ADDRESS = input("Enter an IP address: ")
        print()
        if(Valid_IP(IP_ADDRESS) == True):
            return IP_ADDRESS
        else:
            return -1
    elif(choice == 2):
        DOMAIN_NAME = input("Enter a domain: ")
        print()
        return DOMAIN_NAME
    return -1

if(task == 1):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.scan_top_ports(string)

elif(task == 2):
    print("You must be root/administrator to perform this task")
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_os_detection(string) 

elif(task == 3):
    string = input("Enter a subdomain: ")
    scan_result = nmap.nmap_dns_brute_script(string)

elif(task == 4):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_version_detection(string)

elif(task == 5):
    scan_result = nmap.nmap_version()

elif(task == 6):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_list_scan(string)

elif(task == 7):
    string = input("Enter a valid subnet: ")
    scan_result = nmap.nmap_subnet_scan(string)

elif(task == 8):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_syn_scan(string)

elif(task == 9):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_tcp_scan(string)

elif(task == 10):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_udp_scan(string)

elif(task == 11):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_fin_scan(string)

elif(task == 12):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_idle_scan(string)

elif(task == 13):
    string = call_for_input()
    if(string == -1):
        print("Enter a valid choice.")
        exit()
    scan_result = nmap.nmap_ping_scan(string)

else:
    exit()

print()

results = json.dumps(scan_result)

formatted_result = json.loads(results)

print(json.dumps(formatted_result, indent = 1))
