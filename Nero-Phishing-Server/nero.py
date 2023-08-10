
import sys
import httpd
import urllib
import os
import sys
import time

modules = {
    0 : 'DNS Spoof                => Ative sniffing to spoof the DNS from the client to this machine',
    1 : 'Port Scanning            => Basic port scanning',
    2 : 'Host Discovery           => Detect the host from the client',
    3 : 'SSL                      => Setup an encrypted server (default SSL file should be named "cert.pem" from dir "cert". Same with the private key)',
    4 : 'Costum Page              => Dont download a webpage, will use any index.html from the root directory with a full HTTP server. You can set a full directory, NERO will parse everthing'
}

status = [False,False,False,False,False]
_dns = ""

T_URL = "" or "None"
LHOST = "" or 0
LPORT = 0 or 0

def set_module(_ID):
    try:
        if status[_ID] == False:
            if _ID == 4: 
                T_URL = "None"
            if _ID == 0:
                _dns = str(input("nero (dns) > "))
                if len(_dns) == 0 or _dns == "":
                    print("[!] Please provide a valid dns!!")
                    _dns = ""
                else:
                    pass
                
            print("[+] Module sent: {}".format(modules[_ID]))
            status[_ID] = True

        elif status[_ID] == True:
            print("[+] Module disabled: {}".format(modules[_ID]))
            status[_ID] = False

    except:
        print("[!] Module not found!")

def get_extensions():
    x = 0
    print("\n")
    while x < len(modules):
        print("\t[{}] {} ".format(x,modules[x]))
        x = x + 1
    print("\n")

def banner():
    x = "\033[1;37m"+str(open("core/banner.txt","r").read()[:-1])+"\033[m"
    print(x)

def main():
    print("\n")
    try:
        while True:
            command = input("\033[1;36mnero > \033[m").split() or None

            if command[0] == "set":
                if command[1] == "url":
                    try:
                        T_URL = command[2]
                        print("\033[1;32m[+] URL sent: {}\033[m".format(T_URL))
                    except:
                        print("\033[1;31m[!] Please provide an argument for the option!\033[m")

                if command[1] == "port":
                    try:
                        LPORT = command[2]
                        print("\033[1;32m[+] PORT sent: {}\033[m".format(LPORT))
                    except:
                        print("\033[1;31m[!] Please provide an argument for the option!\033[m")

                if command[1] == "ip":
                    try:
                        import socket

                        try:
                            socket.inet_aton(command[2])
                            LHOST = command[2]
                            print("\033[1;32m[+] IP sent: {}\033[m".format(LHOST))
                        except:
                            print("\033[1;31m[!] Not a valid IP adress!\033[m")
                    except:
                        print("\033[1;31m[!] Please provide an argument for the option!\033[m")

                if command[1] == "module":
                    try:
                        #module_id = int(input("\033[1;37mnero (run\module_id) > \033[m"))
                        module_id = int(command[2])
                        try:
                            set_module(module_id)
                        except:
                            print("\033[1;31m[!] PORT not configured!\033[m")
                    except:
                        print("\033[1;31m[!] Please provide a valid option!\033[m")

            if command[0] == "options":
                try:
                    print("\n\tCurrent options:\n\n")
                    print("\tHOST = {}".format(LHOST))
                    print("\tPORT = {}".format(LPORT))
                    print("\tURL  = {}".format(T_URL))
                except:
                    pass

            if command[0] == "help":
                import help
                help.help_()

            if command[0] == "list":
                get_extensions()

            if command[0] == "clear":
                os.system("clear")

            if command[0] == "run":
                if T_URL == "":
                    print("[!] No URL provided!")
                elif T_URL != "":
                    try:
                        if LPORT != 0:
                            pass
                    except:
                        print("[!] No port configured, using 8080")
                        LPORT = 8080
                        
                    httpd.run(LHOST,LPORT,T_URL)

            if command[0] == "exit" or command[0] == "close" or command[0] == "bye":
                print("[*] Quiting...")
                return

            if command[0] == "banner":
                banner()
                print("\n")
                
    except KeyboardInterrupt:
        print("[*] Quiting...")

if __name__ == "__main__":
    print("[!] Starting NERO in fews seconds...")
    time.sleep(2)
    os.system("clear")
    banner()
    main()