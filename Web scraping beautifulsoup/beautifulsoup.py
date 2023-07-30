import requests
import beautifulsoup4

import requests
from bs4 import BeautifulSoup

url = "https://www.example.com/technology"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, "html.parser")

    # Find all the article elements
    articles = soup.find_all("article")

    # Loop through each article and extract title and link
    for article in articles:
        title = article.find("h2").text.strip()
        link = article.find("a")["href"]
        print(f"Title: {title}")
        print(f"Link: {link}")
        print("---")
else:
    print("Failed to fetch data from the website.")
