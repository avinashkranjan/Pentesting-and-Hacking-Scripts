#!/usr/bin/env python3

import re
import os
import requests
import argparse
import concurrent.futures
from hashlib import algorithms_available

parser = argparse.ArgumentParser()
parser.add_argument('-s', help='hash', dest='hash')
parser.add_argument('-f', help='file containing hashes', dest='file')
parser.add_argument('-d', help='directory containing hashes', dest='dir')
parser.add_argument('-t', help='number of threads', dest='threads', type=int, default=4)
parser.add_argument('--wordlist', help='dictionary file for dictionary-based attacks', dest='wordlist')
args = parser.parse_args()

# Colors and other text formatting codes (you can customize them as you like)
END = '\033[0m'
RED = '\033[91m'
GREEN = '\033[92m'
WHITE = '\033[97m'
DGREEN = '\033[32m'
YELLOW = '\033[93m'
BACK = '\033[7;91m'
RUN = '\033[97m[~]\033[0m'
QUE = '\033[94m[?]\033[0m'
BAD = '\033[91m[-]\033[0m'
INFO = '\033[93m[!]\033[0m'
GOOD = '\033[92m[+]\033[0m'

cwd = os.getcwd()
directory = args.dir
file = args.file
thread_count = args.threads

# Check for valid hashing algorithms available on the system
valid_algorithms = set(algorithms_available)
hash_algorithms = ['md5', 'sha1', 'sha256', 'sha384', 'sha512']
hash_algorithms = [alg for alg in hash_algorithms if alg in valid_algorithms]

# The list of APIs to be used for cracking each hash type (you can add more APIs)
hash_cracking_apis = {
    'md5': [
        'https://hashtoolkit.com/reverse-hash/?hash=',
        'https://www.nitrxgen.net/md5db/',
    ],
    'sha1': [
        'https://hashtoolkit.com/reverse-sha1-hash/?hash=',
    ],
    'sha256': [
        'https://hashtoolkit.com/reverse-sha256-hash/?hash=',
    ],
    'sha384': [
        'https://hashtoolkit.com/reverse-sha384-hash/?hash=',
    ],
    'sha512': [
        'https://hashtoolkit.com/reverse-sha512-hash/?hash=',
    ],
}

# Dictionary to store previously cracked hashes
hash_cache = {}

# Function to perform hash cracking using online APIs
def crack_hash_online(hash_value, algorithm):
    if hash_value in hash_cache:
        return hash_cache[hash_value]
    
    if algorithm not in hash_cracking_apis:
        return False
    
    for api_url in hash_cracking_apis[algorithm]:
        try:
            response = requests.get(api_url + hash_value).text
            if response and 'error' not in response.lower():
                result = re.findall(r'<em>(.*?)</em>', response)
                if result:
                    cracked_hash = result[0]
                    hash_cache[hash_value] = cracked_hash
                    return cracked_hash
        except requests.RequestException:
            continue

    return False

# Function to perform dictionary-based hash cracking (optional)
def crack_hash_dictionary(hash_value, algorithm, wordlist):
    if not wordlist:
        return False

    # Implement dictionary-based hash cracking here (use the wordlist)
    # Return the cracked hash if successful, or False if not cracked
    return False

# Function to crack a single hash
def crack_single_hash(hash_value):
    for algorithm in hash_algorithms:
        if len(hash_value) == len(algorithm) * 4:
            if algorithm in hash_cracking_apis:
                result = crack_hash_online(hash_value, algorithm)
                if result:
                    return algorithm, result

            # Uncomment the line below to enable dictionary-based cracking (optional)
            # result = crack_hash_dictionary(hash_value, algorithm, args.wordlist)
            # if result:
            #     return algorithm, result

    return None, None

# Function to display progress during hash cracking
def display_progress(total_hashes, cracked_hashes):
    progress = cracked_hashes / total_hashes * 100
    print(f"{INFO} Progress: {cracked_hashes}/{total_hashes} hashes cracked ({progress:.2f}%)", end='\r')

# Main function for hash cracking from file
def crack_from_file(file_path):
    with open(file_path, 'r') as f:
        hashes = re.findall(r'[a-f0-9]{32,}', f.read())

    total_hashes = len(hashes)
    cracked_hashes = 0

    with concurrent.futures.ThreadPoolExecutor(max_workers=thread_count) as executor:
        futures = {executor.submit(crack_single_hash, hash_value): hash_value for hash_value in hashes}

        for future in concurrent.futures.as_completed(futures):
            hash_value = futures[future]
            algorithm, result = future.result()

            if result:
                print(f"{hash_value} : {algorithm.upper()} - {result}")
                cracked_hashes += 1
                display_progress(total_hashes, cracked_hashes)

    print(f"{INFO} Finished! Cracked {cracked_hashes} out of {total_hashes} hashes.")

# Main function for hash cracking from directory
def crack_from_directory(directory_path):
    # Implement searching and cracking hashes from files in the directory
    # You can use regular expressions or other methods to find hash patterns in files
    pass

# Main function to crack a single hash
def crack_single_hash_command(hash_value):
    algorithm, result = crack_single_hash(hash_value)
    if result:
        print(f"{hash_value} : {algorithm.upper()} - {result}")
    else:
        print(f"{BAD} Hash was not found in any database.")

# Main program flow
if __name__ == "__main__":
    if directory:
        crack_from_directory(directory)
    elif file:
        crack_from_file(file)
    elif args.hash:
        crack_single_hash_command(args.hash)
    else:
        print(f"{BAD} Please provide either a hash, a file containing hashes, or a directory containing hashes.")
        parser.print_help()
