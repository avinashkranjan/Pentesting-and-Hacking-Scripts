from bs4 import BeautifulSoup
import requests

def extract_links(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            links = [link.get('href') for link in soup.find_all('a')]
            return links
    except Exception as e:
        pass

    try:
        response = requests.get(url)
        if response.status_code == 200:
            headers = response.headers
            server_header = headers.get('Server', 'Unknown')
            print(f"Server header: {server_header}")
            # You can implement more fingerprinting checks here
    except Exception as e:
        pass

        try:
            url = f"https://services.nvd.nist.gov/rest/json/cve/{cve_id}"
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                if 'result' in data and 'CVE_Items' in data['result']:
                    for item in data['result']['CVE_Items']:
                        cve_data = item['cve']
                        print(f"Title: {cve_data['CVE_data_meta']['ID']}")
                        print(f"Description: {cve_data['description']['description_data'][0]['value']}")
        except Exception as e:
            pass