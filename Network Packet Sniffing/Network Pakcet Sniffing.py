# Before implementing the raw socket sniffer, let us understand the struct method as described below −

struct.pack(fmt, a1,a2,…)
#As the name suggests, this method is used to return the string, which is packed according to the given format. The string contains the values a1, a2 and so on.

struct.unpack(fmt, string)
#As the name suggests, this method unpacks the string according to a given format.

#In the following example of raw socket sniffer IP header, which is the next 20 bytes in the packet and among these 20 bytes we are interested in the last 8 bytes. The latter bytes show if the source and destination IP address are parsing −

#Now, we need to import some basic modules as follows −

import socket
import struct
import binascii

#Now, we will create a socket, which will have three parameters. The first parameter tells us about the packet interface — PF_PACKET for Linux specific and AF_INET for windows; the second parameter tells us that it is a raw socket and the third parameter tells us about the protocol we are interested in —0x0800 used for IP protocol.

s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket. htons(0x0800))
#Now, we need to call the recvfrom() method to receive the packet.

while True:
   packet = s.recvfrom(2048)
#In the following line of code, we are ripping the Ethernet header −

ethernet_header = packet[0][0:14]
#With the following line of code, we are parsing and unpacking the header with the struct method −

eth_header = struct.unpack("!6s6s2s", ethernet_header)
#The following line of code will return a tuple with three hex values, converted by hexify in the binascii module −

print "Destination MAC:" + binascii.hexlify(eth_header[0]) + " Source MAC:" + binascii.hexlify(eth_header[1]) + " Type:" + binascii.hexlify(eth_header[2])
#We can now get the IP header by executing the following line of code −

ipheader = pkt[0][14:34]
ip_header = struct.unpack("!12s4s4s", ipheader)
print "Source IP:" + socket.inet_ntoa(ip_header[1]) + " Destination IP:" + socket.inet_ntoa(ip_header[2])

#Similarly, we can also parse the TCP header.

