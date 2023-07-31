import argparse
import requests
from http.cookies import SimpleCookie
import time


class bcolors:
    HEADER = "\033[95m"
    OKBLUE = "\033[94m"
    OKGREEN = "\033[92m"
    WARNING = "\033[93m"
    FAIL = "\033[91m"
    ENDC = "\033[0m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"


def codecollors(code):
    color_map = {
        "2": "\033[92m",
        "3": "\033[93m",
        "4": "\033[91m",
        "5": "\033[94m",
    }
    return f"{color_map.get(str(code)[0], '')}[{code}] \033[0m"


class request:
    def query(self, url, cookie=None):
        if cookie:
            rawdata = "Cookie: " + cookie
            cookie = SimpleCookie()
            cookie.load(rawdata)

        req = requests.get(url, cookies=cookie, allow_redirects=False)
        self.raw = req.text
        self.code = req.status_code


def forloop():
    if arguments.string not in arguments.url:
        sys.exit(
            f"String: {bcolors.WARNING}{arguments.string}{bcolors.ENDC} not found in url: {bcolors.FAIL}{arguments.url}\n"
        )

    count = 0
    duplicate = set()
    depth = arguments.depth
    while count != (depth + 1):
        print(f"[+] Depth: {count}")
        for var in dotvar:
            for bvar in befvar:
                for word, match_pattern in match.items():
                    rewrite = bvar + (var * count) + word
                    fullrewrite = arguments.url.replace(arguments.string, rewrite)

                    if fullrewrite not in duplicate:
                        req = request()
                        req.query(fullrewrite)
                        catchdata = re.findall(str(match_pattern), req.raw)
                        if len(catchdata) != 0:
                            print(codecollors(req.code) + fullrewrite)
                            print(f" Contents Found: {len(catchdata)}")
                        elif arguments.verbose:
                            print(codecollors(req.code) + fullrewrite)

                        icount = 0
                        for i in catchdata[:6]:
                            print(f" {bcolors.FAIL}{i}{bcolors.ENDC}")
                            icount += 1
                            if icount > 6:
                                print(" [...]")
                                break
                            if arguments.verbose:
                                time.sleep(0)
                        duplicate.add(fullrewrite)
        count += 1


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="dot dot slash - An automated Path Traversal Tester."
    )
    parser.add_argument(
        "--url", "-u", action="store", dest="url", required=True, help="Url to attack."
    )
    parser.add_argument(
        "--string",
        "-s",
        action="store",
        dest="string",
        required=True,
        help="String in --url to attack. Ex: document.pdf",
    )
    parser.add_argument(
        "--cookie",
        "-c",
        action="store",
        dest="cookie",
        required=False,
        help="Document cookie.",
    )
    parser.add_argument(
        "--depth",
        "-d",
        action="store",
        dest="depth",
        required=False,
        type=int,
        default=6,
        help="How deep we will go?",
    )
    parser.add_argument(
        "--verbose", "-v", action="store_true", required=False, help="Show requests"
    )
    arguments = parser.parse_args()

    forloop()
