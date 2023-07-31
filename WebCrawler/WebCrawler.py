# pip install requests
# pip install beautifulsoup4
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import random
import re
from collections import deque


def crawl(url, depth, max_pages, user_agent):
    visited = set()
    queue = deque([(url, 0)])

    while queue:
        current_url, current_depth = queue.popleft()

        if current_depth > depth or len(visited) >= max_pages:
            break

        if current_url in visited:
            continue

        try:
            headers = {"User-Agent": user_agent}
            response = requests.get(current_url, headers=headers)
            visited.add(current_url)

            soup = BeautifulSoup(response.text, "html.parser")
            print("Crawling:", current_url)

            # Extract and process relevant information here
            # For example, you can extract links with <a> tags:
            links = soup.find_all("a")
            for link in links:
                href = link.get("href")
                absolute_url = urljoin(current_url, href)
                normalized_url = normalize_url(absolute_url)

                if not is_internal_link(url, normalized_url):
                    continue

                print("Found link:", normalized_url)

                # Add the new link to the queue if not visited
                if normalized_url not in visited:
                    queue.append((normalized_url, current_depth + 1))

        except Exception as e:
            print("Error:", e)

        time.sleep(random.uniform(0.5, 1.5))  # Random delay between 0.5 and 1.5 seconds


def normalize_url(url):
    # Normalize the URL by removing any query parameters or fragments
    parsed_url = urlparse(url)
    return parsed_url.scheme + "://" + parsed_url.netloc + parsed_url.path


def is_internal_link(base_url, url):
    # Check if the URL is an internal link within the base URL's domain
    parsed_base_url = urlparse(base_url)
    parsed_url = urlparse(url)
    return parsed_base_url.netloc == parsed_url.netloc


# Example usage
crawl("https://example.com", 2, 10, "My User Agent")
