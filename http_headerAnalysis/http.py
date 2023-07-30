import requests

url = "https://example.com"
response = requests.get(url)

print("Response Header")
for header, value in response.headers.items():
    print(f"{header}:{value}")

content_type = response.headers.get("Content-Type")
server = response.headers.get("Server")
if response.status_code in ["300", "301", "302", "303", "307", "308"]:
    location = response.headers.get("Location")
    print(f"redirected to:{location}")
else:
    print("No redirection")
final_url = response.url
print(f"Final url:{final_url}")

request_header = response.request.headers
print("Request Header")
for header, value in request_header.items():
    print(f"{header}:{value}")
