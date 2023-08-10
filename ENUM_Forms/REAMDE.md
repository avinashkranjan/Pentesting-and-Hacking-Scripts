# Enumerate Forms Python Script - README

## Description

This Python script, named "enum_forms," is a command-line utility designed to enumerate and extract form data from a specified URL. The script is useful for analyzing web pages to identify forms, their input elements, and related details.

The script leverages the 'requests' library to retrieve the content of the provided URL, and the 'zetanize' library to extract the form information from the HTML content.

## Prerequisites

Before running the script, ensure that you have the following requirements met:

1. Python 3.7 or higher installed on your system.

2. The 'huepy' library for colorful output. You can install it using `pip3 install huepy`.

3. The 'terminaltables' library for creating tabular output. You can install it using `pip3 install terminaltables`.

4. The 'zetanize' library for form extraction. You can install it using `pip3 install zetanize`.

## Usage

To use the script, follow the steps below:

1. Clone or download the script to your local machine.

2. Open a terminal or command prompt.

3. Navigate to the directory containing the script.

Run the script with the following command:

```
python3 enum_forms.py URL
```

Replace `URL` with the web page URL you want to analyze for forms. For example:

```
python3 enum_forms.py https://example.com/login
```

## Output

The script will fetch the content of the specified URL and then extract the form data, including input element names, values, and types. The extracted information will be displayed in a tabular format, making it easy to review and understand.

The output table will include the following columns:

1. **NAME**: The name attribute of the form input element.

2. **VALUE**: The value attribute of the form input element.

3. **TYPE**: The type attribute of the form input element.

Additionally, the script will provide the following information:

- **Action**: The value of the "action" attribute of the form.

- **Found Forms**: The total number of forms identified on the web page.

## Example

Assuming you want to enumerate forms on the webpage "https://example.com/login," you can use the following command:

```
python3 enum_forms.py https://example.com/login
```

The script will fetch the content of the URL, extract form data, and display it in a tabular format.

## Note

- The script relies on the 'zetanize' library to parse and extract form information. Ensure that the 'zetanize' library is up-to-date and compatible with the HTML structure of the web page you are analyzing.

- This script is intended for ethical and educational purposes, such as analyzing your own websites or those for which you have explicit permission to test.

- If you encounter any issues or have suggestions for improvement, feel free to submit them to the script's GitHub repository.
