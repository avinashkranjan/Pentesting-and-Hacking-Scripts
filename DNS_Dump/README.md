# DNS Dump Python Script

This script is a simple Python tool that allows you to retrieve and save a DNS dump image for a specified domain. It utilizes the DNSDumpster service to generate the DNS map image.

## Prerequisites

- Python 3.7 or higher
- `argparse` library
- `requests` library

## Usage

```
python dnsdump.py DOMAIN [OUTFILE]
```

- `DOMAIN`: The domain name to query and generate a DNS map for.
- `OUTFILE` (optional): The name of the image file to save. If not provided, the default filename will be `<domain>_dnsdump.png`.

## How it Works

1. The script accepts command-line arguments using `argparse`.
2. It constructs the URL for the DNSDumpster service using the specified domain.
3. The script sends an HTTP GET request to the DNSDumpster service to retrieve the DNS map image.
4. If the request is successful (status code 200), the script saves the image file locally using the specified or default filename.
5. Finally, the script prints a confirmation message with the saved filename.

## Example

```
python dnsdump.py example.com dns_dump_example.png
```

This example will generate a DNS dump image for the "example.com" domain and save it as "dns_dump_example.png" in the current directory.

## Disclaimer

This script relies on the DNSDumpster service for generating the DNS map image. Please ensure you have proper authorization and use it responsibly and within the bounds of the service's terms and conditions.
