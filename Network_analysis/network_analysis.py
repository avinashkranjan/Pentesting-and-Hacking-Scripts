from scapy.all import sniff, TCP


def packet_callback(packet):
    if TCP in packet:
        src_ip = packet[IP].src
        dst_ip = packet[IP].dst
        src_port = packet[TCP].sport
        dst_port = packet[TCP].dport
        print(f"Source IP: {src_ip}\tSource Port: {src_port}")
        print(f"Destination IP: {dst_ip}\tDestination Port: {dst_port}")


# Sniff network packets on a specified interface (e.g., 'eth0')
sniff(iface="eth0", prn=packet_callback, filter="tcp")
