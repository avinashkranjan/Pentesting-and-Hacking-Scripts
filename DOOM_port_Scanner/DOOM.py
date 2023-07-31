import socket
from IPy import IP
import subprocess
import sys
import asyncio
from datetime import datetime

subprocess.call('cls', shell=True)

print(
    """
You are using the DOOM Port scanner.

1. Fast scanning to provide the open ports
2. You can scan both URL links and both IP's 
3. Gives Total scanning time
)
# ip adresess
targets = input("enter targets or URL's ")

# min range of ports
min_port = int(input("enter min number of ports "))

# max range of ports
max_port = int(input("enter max number of ports "))
try:
    speed = int(
        input(
            "Enter the speed you want to scan in (try using a Irrational number, deffult is 0.1) "
        )
    )
except:
    speed = 0.1
""")
# Ask for input
remoteServer = input("Enter a remote host to scan: ")
remoteServerIP = socket.gethostbyname(remoteServer)

# Print a nice banner with information on which host we are about to scan
print("-" * 60)
print("Please wait, scanning remote host", remoteServerIP)
print("-" * 60)

# Check what time the scan started
t1 = datetime.now()

async def scan_port(port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setblocking(False)
    try:
        await asyncio.wait_for(
            asyncio.get_event_loop().sock_connect(sock, (remoteServerIP, port)),
            timeout=1
        )
        print("Port {}: Open".format(port))
    except (socket.timeout, ConnectionRefusedError):
        pass
    finally:
        sock.close()

async def main():
    tasks = []
    for port in range(1, 1025):
        tasks.append(scan_port(port))
    await asyncio.gather(*tasks)

try:
    asyncio.run(main())
except KeyboardInterrupt:
    print("You pressed Ctrl+C")
    sys.exit()

except socket.gaierror:
    print('Hostname could not be resolved. Exiting')
    sys.exit()

def multi_targets(ip):
    converted_ip = check_ip(ip)
    # using loop to scan the port
    print(f"scaning port for {ip}")
    for port in range(min_port, max_port + 1):
        scan_port(converted_ip, port)


# check if the ip is URL link or ip
def check_ip(ip):
    try:
        IP(ip)
        return ip
    except ValueError:
        socket.gethostbyname(ip)
        return ip


def get_data_from_port(soc):
    return soc.recv(1024)


# scan port function
def scan_port(ip, port):
    try:
        sc = socket.socket()
        sc.settimeout(speed)
        sc.connect((ip, port))
        try:
            data = get_data_from_port(sc)

            print(f"[+] port {port} is on and recived data is: {data}")
        except:
            print(f"[+] {port} port is open")

    except:
        print("scaning ports...")


# converted ip adress to link and int ip

if ", " in targets:
    for ip_add in targets.split(","):
        multi_targets(ip_add.strip(" "))
else:
    multi_targets(targets)

except socket.error:
    print("Couldn't connect to server")
    sys.exit()

# Checking the time again
t2 = datetime.now()

# Calculates the difference of time, to see how long it took to run the script
total = t2 - t1

print('Scanning Completed in:', total)