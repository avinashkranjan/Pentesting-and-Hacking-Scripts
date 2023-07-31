import requests
import sys
import concurrent.futures
import argparse


def check_subdomain(subdomain, domain):
    url = f"http://{subdomain}.{domain}"
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            print("[+] Discovered subdomain:", url)
            print("    Response Status Code:", response.status_code)
            discovered_subdomains.append(url)
        else:
            print("[*] Discovered subdomain:", url)
            print("    Response Status Code:", response.status_code)
    except requests.ConnectionError:
        pass
    except requests.Timeout:
        print("[!] Timeout occurred while checking subdomain:", url)
    except requests.RequestException as e:
        print("[!] An error occurred while checking subdomain:", url)
        print("    Error:", str(e))


def main():
    parser = argparse.ArgumentParser(description="Subdomain Scanner")
    parser.add_argument("domain", help="The domain to scan for subdomains")
    parser.add_argument(
        "subdomains_file", help="Path to the file containing subdomains"
    )
    args = parser.parse_args()

    domain = args.domain
    subdomains_file = args.subdomains_file

    with open(subdomains_file) as file:
        subdomains = file.read().splitlines()

    print("\n[Welcome to Subdomain Scanner]\n")
    print("Scanning subdomains...")
    print("Press Ctrl+C to stop the scan.\n")

    try:
        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(check_subdomain, subdomains, [domain] * len(subdomains))
    except KeyboardInterrupt:
        print("\n\nSubdomain scanning stopped by the user.")

    if discovered_subdomains:
        with open("discovered_subdomains.txt", "w") as file:
            for subdomain in discovered_subdomains:
                print(subdomain, file=file)
        print(
            "\nSubdomain scanning completed. Discovered subdomains saved in 'discovered_subdomains.txt'."
        )
    else:
        print("\nNo subdomains discovered.")


if __name__ == "__main__":
    discovered_subdomains = []
    main()
