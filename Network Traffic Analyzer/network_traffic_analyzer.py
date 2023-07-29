import pcapy
import dpkt


def capture_packets(interface):
    # Open the network interface for packet capture
    cap = pcapy.open_live(interface, 65536, True, 100)

    # Set a filter (optional)
    cap.setfilter("tcp")

    # Capture and process packets
    while True:
        (header, packet) = cap.next()
        eth = dpkt.ethernet.Ethernet(packet)

        # Process IP packets
        if isinstance(eth.data, dpkt.ip.IP):
            ip = eth.data
            process_ip_packet(ip)


def process_ip_packet(ip):
    # Extract relevant information from the IP packet
    src_ip = socket.inet_ntoa(ip.src)
    dst_ip = socket.inet_ntoa(ip.dst)
    protocol = ip.p

    # Print packet information
    print(f"Source IP: {src_ip}, Destination IP: {dst_ip}, Protocol: {protocol}")


# Example usage: Capture packets on 'eth0' interface
capture_packets("eth0")
