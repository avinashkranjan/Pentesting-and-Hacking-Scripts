import time
import threading
import pandas as pd
import socket
from queue import Queue

socket.setdefaulttimeout(1)
print_lock = threading.Lock()

target = input("Enter the host to be scanned: ")
t_IP = socket.gethostbyname(target)
url = f"https://www.speedguide.net/ip/{t_IP}"
a = pd.read_html(url)

result = {}
for i in range(len(a[1])):
    result[str(a[1][0][i])[:-1]] = a[1][1][i]

result = dict(zip(a[1][0], a[1][1]))

ports_arr = []
max_connections = 100
max_ports = 500

def portscan(q):
    while True:
        worker = q.get()
        if worker is None:
            break
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        try:
            con = s.connect((t_IP, worker))
            with print_lock:
                ports_arr.append(worker)
            con.close()
        except:
            pass
        finally:
            q.task_done()

def threader(q):
    for _ in range(max_connections):
        t = threading.Thread(target=portscan, args=(q,))
        t.daemon = True
        t.start()



def portscan(port):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        con = s.connect((t_IP, port))
        with print_lock:
            ports_arr.append(port)
        con.close()
    except:
        pass


def threader():
    while True:
        worker = q.get()
        portscan(worker)
        q.task_done()


q = Queue()

startTime = time.time()


for x in range(100):
    t = threading.Thread(target=threader)
    t.daemon = True
    t.start()

for worker in range(1, 500):
threader(q)

for worker in range(1, max_ports + 1):
    q.put(worker)

q.join()

# Stop the threads
for _ in range(max_connections):
    q.put(None)

result["ports"] = ports_arr
print(result)


def PortInfo(port_no):
    url = f"https://www.speedguide.net/port.php?port={port_no}"
    a = pd.read_html(url)
    final = {
        "Port": a[2]["Port(s)"][0],
        "Protocol": a[2]["Protocol"][0],
        "Service": a[2]["Service"][0],
        "Description": a[2]["Details"][0],
    }
    return final
    # Exception Handling
    try:
        a = pd.read_html(url)
        final = {
            "Port": a[2]["Port(s)"][0],
            "Protocol": a[2]["Protocol"][0],
            "Service": a[2]["Service"][0],
            "Description": a[2]["Details"][0]
        }
        return final
    except Exception as e:
        print(f"Error fetching port info for port {port_no}: {e}")
        return {}
