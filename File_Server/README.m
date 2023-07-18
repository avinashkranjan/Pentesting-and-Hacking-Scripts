# File Server Exposing Python Script

This script is a Python-based file server that exposes the contents of a specified directory over HTTP. It utilizes the Bottle framework to handle HTTP requests and serve static files.

## Prerequisites
- Python 3.7 or higher
- `argparse` library
- `bottle` library

## Usage
```
python file_server.py DIR [-d DEBUG] [-p PORT] [-bp BASEPATH]
```

- `DIR`: The directory to host and serve files from.
- `-d DEBUG` (optional): Enables debug mode and prints debug messages.
- `-p PORT` (optional): Specifies the port to run the server on. Default is 8080 if not provided.
- `-bp BASEPATH` (optional): Sets the base path of the server's files in the HTTP URL. Default is the value of `DIR`.

## How it Works
1. The script accepts command-line arguments using `argparse`.
2. It sets up the necessary routes and handlers using the Bottle framework.
3. The `serve` function handles requests for specific files and serves them using the `static_file` function from Bottle.
4. The server runs on `0.0.0.0` to listen on all available network interfaces.
5. If a base path is provided, it is used to prefix the URLs for accessing the files.
6. The server starts running and listens for incoming HTTP requests.

## Example
```
python file_server.py /path/to/files -p 8088 -bp files
```
This example will host the files located in `/path/to/files` directory and serve them on port 8088. The files will be accessible via URLs like `http://<ip>:8088/files/<filename>`.

## Disclaimer
This file server exposes files over HTTP, which may have security implications. Ensure that you use it responsibly and restrict access to the server and its contents as needed.