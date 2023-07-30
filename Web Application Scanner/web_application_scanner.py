import requests
from bs4 import BeautifulSoup


def scan_web_application(url, depth=1, scan_vulnerabilities=True):
    scanned_links = set()  # To track scanned links and avoid duplicates
    scan_results = {}  # To store vulnerability scan results

    def scan_link(link, depth):
        if link.startswith("#") or link.startswith("mailto:"):
            return  # Skip internal links and email links

        if link not in scanned_links:
            scanned_links.add(link)
            response = requests.get(link)

            if response.status_code == 200:
                if scan_vulnerabilities:
                    vulnerabilities = perform_vulnerability_scan(response.text)
                    scan_results[link] = vulnerabilities

                if depth > 1:
                    sub_links = extract_links(response.text)
                    for sub_link in sub_links:
                        scan_link(sub_link, depth - 1)

    response = requests.get(url)
    if response.status_code == 200:
        if scan_vulnerabilities:
            vulnerabilities = perform_vulnerability_scan(response.text)
            scan_results[url] = vulnerabilities

        if depth > 1:
            links = extract_links(response.text)
            for link in links:
                scan_link(link, depth - 1)

    # Generate a report or take further actions based on the scan results
    generate_report(scan_results)


def extract_links(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    links = soup.find_all("a")
    extracted_links = [link.get("href") for link in links]
    return extracted_links


def perform_vulnerability_scan(content):
    # Implement vulnerability scanning logic
    vulnerabilities = []  # Store the detected vulnerabilities

    # Example vulnerability scans (add more relevant scans):
    if "sql" in content.lower():
        vulnerabilities.append("SQL Injection vulnerability detected")
    if "xss" in content.lower():
        vulnerabilities.append("Cross-Site Scripting (XSS) vulnerability detected")
    # ...

    return vulnerabilities


def generate_report(scan_results):
    # Implement report generation logic
    # Print or save the scan results and generate a report
    print("Scan Results:")
    for link, vulnerabilities in scan_results.items():
        print(f"URL: {link}")
        if vulnerabilities:
            print("Vulnerabilities:")
            for vulnerability in vulnerabilities:
                print(f"- {vulnerability}")
        else:
            print("- No vulnerabilities found")
        print()


# Example usage: Scan a web application
target_url = "https://example.com"
scan_web_application(target_url, depth=2, scan_vulnerabilities=True)
