import os
try:
    import requests
except:
    os.system("pip3 install requests")
    print("Run the setup again to continue.")
    exit(0)
import sys
try:
    import urllib3
except:
    os.system("pip3 install urllib3")
    print("Run the setup again to continue.")
    exit(0)
try:
    from colorama import Fore
except:
    os.system("pip3 install colorama")
    print("Run the setup again to continue.")
    exit(0)
if len(sys.argv)>1:
    if sys.argv[1]=="-r":
        print("Repairing...")
        command = "rm -r .verified.rc"
        try:
            open(".verified.rc")
            os.system(command)
        except:
            print("Unable to repair the tool.")
            sys.exit(1)

try:
    open(".verified.rc")
    print("The tool is already configured!\nrun the command rpcscan -h to see help menu.\nNote: If you are not able to run the tool run the command python3 setup.py -r .")
    sys.exit(1)
except:
    pass

currentdir = os.getcwd()

try:
    open("rpcscan.py")
except:
    print("[-] rpcscan.py not found [-]")
    ask = input("Do you want to download rpcscan.py? (y/n) ")
    if ask=="y" or ask=="yes":
        print("Downloading....")
        file_content = requests.get("https://raw.githubusercontent.com//shraddha761").text
        file = open("rpcscan.py", "w")
        file.write(file_content)
        file.close()
    elif ask=="n" or "no":
        exit(0)
    else:
        ask = "Please type y/n : "
        if ask=="y" or ask=="yes":
            print("Downloading....")
        elif ask=="n" or "no":
            exit(0)
        else:
            exit(0)
try:
    open("scanner.py")
except:
    print("[-] scanner.py not found [-]")
    ask = input("Do you want to download scanner.py? (y/n) ")
    if ask=="y" or ask=="yes":
        print("Downloading....")
        file_content = requests.get("https://raw.githubusercontent.com//shraddha761").text
        file = open("scanner.py", "w")
        file.write(file_content)
        print("File has been downloaded now rerun this program to proceed")
        file.close()
        exit(0)
    elif ask=="n" or "no":
        exit(0)
    else:
        ask = "Please type y/n : "
        if ask=="y" or ask=="yes":
            print("Downloading....")
            file_content = requests.get("https://raw.githubusercontent.com//shraddha761").text
            file = open("scanner.py", "w")
            file.write(file_content)
            print("File has been downloaded now rerun this program to proceed")
            file.close()
            exit(0)
        elif ask=="n" or "no":
            exit(0)
        else:
            exit(0)
def verifyintsall():
    command = "echo true >> .verified.rc"
    os.system(command)
    print("The tool is now successfully installed!\nNow you can use the command rpcscan <websitelist> to find xmlrpc.php files.")

def install():
    command = "cp rpcscan.py /data/data/com.termux/files/usr/bin/rpcscan"
    try:
        os.system(command)
    except:
        print("Unable to setup the file.\nTry running this script as superuser.")
        sys.exit(1)
    command = "cp scanner.py /data/data/com.termux/files/usr/bin/rpcscanner"
    try:
        os.system(command)
        verifyintsall()
    except:
        print("Unable to setup the file.\nTry running this script as superuser.")
        sys.exit(1)
install()