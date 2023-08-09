# HASH BUSTER

This Python script is designed for hash cracking, allowing users to crack hashed passwords or strings using various online APIs. The script offers an optimized and extensible approach to hash cracking and includes features such as concurrent processing, caching, and support for multiple hash algorithms.

## Features

- Crack single hashes, hashes from a file, or hashes from files in a directory.
- Support for common hash algorithms: MD5, SHA-1, SHA-256, SHA-384, SHA-512.
- Multi-threaded processing for faster cracking.
- Caching mechanism to store and retrieve previously cracked hashes.
- Display of progress using a percentage indicator.
- Placeholder for dictionary-based attacks (disabled by default).
- Customizable color-coded terminal output.

## Prerequisites

- Python 3.x
- Required Python libraries: `re`, `os`, `requests`, `argparse`, `concurrent.futures`

## Usage

1. Clone or download this repository to your local machine.

2. Open a terminal and navigate to the directory containing the script.

3. Run the script using the following command-line options:

   - `-s` followed by a single hash to crack that hash.
   - `-f` followed by a path to a file containing multiple hashes to crack.
   - `-d` followed by a path to a directory containing files with hashes to crack.
   - `-t` followed by the desired number of threads (default is 4).
