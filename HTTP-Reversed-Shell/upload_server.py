import os
import sys

host = "192.168.109.128"
port = 1177
ADDRESS = f"http://{host}:{port}"


def check_py_version():
    """[checking your python version cause of it contains commands that runs only with python 3.x.]"""

    print("[+] Checking your python version. . .")
    py_version = sys.version_info[0]
    if py_version != 3:
        print("[-] Python 3.x is required.")
        print("[-] Run it with python3")
        exit()
    else:
        print("[+] Python3 is founded <3\n")


def start_server(host, port):
    """[start server aims to start a simple HTTP server to allow the victim to download files from our PC.
        an example of files to upload: keylogger "not_included in shell :(" - and any script you want to run.]

    Args:
        host ([string]) : [the attacker ip address]
        port ([int])    : [open port at the attacker and target pc]
    """

    # change dir to the currant file path to list all files in this path
    currant_path = os.path.dirname(__file__)
    try:
        os.chdir(currant_path)
        # start server in this directory
        print(f"[+] Now server is up @ http://{ADDRESS}")
        print(f"[+] The link of files is: http://{ADDRESS}/file_name\n")
        # this command runs only in python3
        # start HTTP server @ spacific port number.
        os.system(f"python3 -m http.server {str(port)}")
    except Exception as error:
        os.system("clear")
        print(f"[-] Error Message: {str(error)}")


def main():
    """[our script start here <3]"""

    # check python version
    check_py_version()
    # calling server to start
    start_server(host, port)


# calling main function
if __name__ == "__main__":
    main()
