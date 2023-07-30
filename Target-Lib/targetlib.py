import os
import sys
import time
import struct
import socket
import random
import queue
import threading


class targetlib(object):
    def __init__(self):
        """
        self.tgt_q = queue.Queue()
                this is a queue.Queue() and holds a random generated iplist via generate_random_ip()
                to see the content of it:
                size: print self.tgt_q.qsize()
                get an element: element = self.tgt_q.get()

        self.randiter = 2
                default value is 2, this variable sets how many iterations of randomization of the targetlist shall be done
        """
        self.tgt_q = queue.Queue()
        self.randiter = 2
        self.version = "0.1"

    def printd(self, data):
        print(data)

    def generate_target_range(self, startip, endip):
        """
        with help of this function you get a queue.Queue() with all IPs in defined range
        """

        # convert the startip to an integer
        spack = socket.inet_aton(startip)
        sip_int = struct.unpack("!L", spack)[0]

        # convert the endip to an integer
        epack = socket.inet_aton(endip)
        eip_int = struct.unpack("!L", epack)[0]

        while sip_int != eip_int + 1:
            nip = socket.inet_ntoa(struct.pack("!L", sip_int))
            self.printd(nip)
            sip_int += 1
            self.tgt_q.put(nip)

        self.printd("Generated Range with %d IPs" % (self.tgt_q.qsize()))

        return

    def randomizeIP(self, iplist):
        """function to randomize ips to scan
        iplist is a list with ip addresses
        example:
                iplist = ['1.1.1.1','2.2.2.2','3.3.3.3']
                rip_list = self.randomizeIP(iplist)
                print rip_list
                ['2.2.2.2','1.1.1.1','3.3.3.3']

        """
        orig_list = iplist

        # check if we have double ips
        for ip in orig_list:
            if iplist.count(ip) > 1:
                print("[*] Warning, %s is %d times in list" % (ip, iplist.count(ip)))
                while iplist.count(ip) > 1:
                    iplist.remove(ip)

        spos = 0
        epos = len(iplist) - 1
        cnt = 0
        while [1]:
            a = random.randint(0, epos)
            b = random.randint(0, epos)
            amove = iplist[a]
            bmove = iplist[b]
            iplist[a] = bmove
            iplist[b] = amove
            cnt += 1
            rnd = 2
            if cnt > epos * self.randiter:
                print("[+] Did %d random iterations, break" % (self.randiter))
                break

        # check if all ips still there (you never know ;))
        for ip in orig_list:
            if iplist.count(ip) == 0:
                print("Warning missing %s" % (ip))

        return iplist

    def _generate_ip(self):
        """
        this function will generate a random ip address
        you can call this function directly if you do not want to use generate_random_ip()
        example:
                import targetlib
                tl = targetlib.targetlib()
                tl._generate_ip()
                '80.185.139.160'
        """
        blockOne = random.randrange(0, 255, 1)
        blockTwo = random.randrange(0, 255, 1)
        blockThree = random.randrange(0, 255, 1)
        blockFour = random.randrange(0, 255, 1)

        if blockOne == 10:
            return self._generate_ip()

        elif blockOne == 172:
            return self._generate_ip()

        elif blockOne == 192:
            return self._generate_ip()

        else:
            newIp = (
                str(blockOne)
                + "."
                + str(blockTwo)
                + "."
                + str(blockThree)
                + "."
                + str(blockFour)
            )
            return newIp

    def generate_random_ip(self, count):
        """
        you can call this function to generate a list of random ips
        generate_random_ip(1000) for 1000 randomly generated ip addresses
        please note that the generated ips are placed in the class variable self.tgt_q
        example:
        import targetlib
        tl = targetlib.targetlib()
        tl.generate_random_ip(100)
        print tl.tgt_q.qsize()
        100
        #getting one element
        tl.tgt_q.get()
        '163.146.106.96'
        """
        i = 0
        count = int(count)
        # print 'cnt', count
        while i < count:
            ip = self._generate_ip()
            self.tgt_q.put(ip)
            i += 1
        self.printd("gen %d" % (self.tgt_q.qsize()))
        return
