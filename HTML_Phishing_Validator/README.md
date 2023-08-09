# HTML Phishing Validator

- This script will help you identify issues with your HTML code that you wish to use as your Phishing template.
- This will serve as a powerful tool for validating and checking the loopholes in HTML files to detect and prevent phishing attacks.
- Phishing attacks aim to deceive users into disclosing sensitive information by mimicking legitimate websites.
- This script provides an automated approach to identify potential vulnerabilities in HTML files that could be exploited for phishing purposes.

## Setup/Installation

1. Make sure you have Python 3 installed.
2. Clone the GitHub repository that contains the Python script.
3. Navigate to the directory where the Python script is located.
4. Run `python3 ./html_phishing_validator.py` to start validating your html document.

## Key Features

- This script comes with so much of handy features, It can able to validate the following things!

- **HTML Parsing**: The script parses the HTML file to extract relevant elements, such as form inputs, links, and scripts, which are commonly targeted in phishing attacks.

- **Link Verification**: It analyzes the links within the HTML file and performs various checks, including verifying the domain, checking for redirects, and detecting suspicious URLs.

- **Form Validation**: The script inspects the HTML form elements and their attributes to ensure proper validation and secure handling of user input. It checks for potential weaknesses like missing CSRF tokens, insecure communication protocols, or inadequate input sanitization.

- **Content Analysis**: It examines the content of the HTML file for any embedded scripts, suspicious code snippets, or obfuscated JavaScript that may indicate malicious intent.

- **External Resource Analysis**: The script investigates external resources, such as CSS files or JavaScript libraries, to identify potential security risks or references to blacklisted domains.

- **Reporting and Recommendations**: After performing the analysis, the script generates a comprehensive report highlighting any detected vulnerabilities, potential phishing indicators, or areas of concern. It also provides recommendations for securing the HTML file and mitigating the identified risks.

<br>

## Disclaimer

> **Warning**
>
> Please note that this script is not a guarantee of complete protection against phishing attacks, as new techniques and vulnerabilities emerge over time. It should be used as an additional layer of security assessment to complement other security measures and best practices in place.
