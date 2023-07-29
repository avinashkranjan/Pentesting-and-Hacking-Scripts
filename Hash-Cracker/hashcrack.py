# importing required modules
import hashlib
import os

# Set colours for better visuals
red = "\033[91m"
green = "\033[92m"
white = "\033[97m"
yellow = "\033[93m"


# Create a dictionary of supported hash
SUPPORTED_HASHES = {
    "sha1": 40,
    "sha224": 56,
    "sha256": 64,
    "sha384": 96,
    "sha512": 128,
    "md5": 32,
}


def get_hash_of(plain_text, algo):
    """Getting hash value of plain text with a specific hashing algo.

    Args:
        plain_text ([string]) : [word that was readed from the word list]
        algo ([string])       : [hashing algorithm]

    Returns:
        hashed([string])      : [the hashed value of plain text with passed hashing algo.]
    """

    hashed = hashlib.new(algo)  # passing the hashing algo.
    hashed.update(plain_text.encode())  # get the hash value with given hash algo.
    return hashed.hexdigest()  # return the hash value.


def reading_wordlist():
    """Reading wordlist if it's in the same path or not.

    Returns:
        words([list of strings]) : [wordlist content]"""

    choice = input(
        "[?] Does the wordlist in the same path with script (y/n)~# "
    ).lower()
    if choice == "y":
        cwd = os.chdir(os.path.dirname(__file__))
        for file in os.listdir(cwd):
            print(f"{green}{file}", end="\t\t")
        wordlist_name = input(f"{white}[+] Wordlist-Name~# ")
        try:
            with open(wordlist_name, "r") as wordlist_obj:
                words = wordlist_obj.readlines()
            return words
        except Exception as error:
            print(f"[-] Error:\n{str(error)}")

    else:
        wordlist_path = input("[+] Enter the wordlist path~# ")
        try:
            os.chdir(wordlist_path)
            with open(wordlist_path, "r") as wordlist_obj:
                words = wordlist_obj.readlines()
            return words
        except Exception as error:
            print(f"[-] Error:\n{str(error)}")


def check_inputs_validation(hash_value, hashing_algo):
    """Checking the validation of hash value and hash algo.

    Args:
        hash_value ([string])   : [readed hash value from the user]
        hashing_algo ([string]) : [readed hashing algorithm from the user]"""

    hash_length = len(hash_value)
    # chack the general length
    if hash_length < 32:
        print(f"{red}[-] Invalid Hash Length !", white)
        quit()

    # check if the hash algo was supported
    if hashing_algo not in SUPPORTED_HASHES.keys():
        print(f"{red}[-] Unsupported hashing algo", white)
        quit()

    if hash_length != SUPPORTED_HASHES[hashing_algo]:
        print(f"{red}[-] Invalid hash length", white)
        print(
            f"{red}[-] {hashing_algo} hash length you entered: {len(hashing_algo)} || {hashing_algo} standard hashing length {SUPPORTED_HASHES[hashing_algo]}",
            white,
        )
        quit()
    print("[+] All inputs is valid <3")
    print("[+] Cracking will start now.")


def main():
    hash_value = input("[+] Enter Hash Value~# ")
    hash_algo = input("[+] Enter Hashing Algo~# ")
    print("[?] Checking Inputs Validation")
    check_inputs_validation(hash_value, hash_algo)
    words = reading_wordlist()
    # cracking the hash
    for word in words:
        word = word.rstrip("\n")
        hashed_word = get_hash_of(word, hash_algo)
        if hash_value == hashed_word:
            print(f"{green}\n[+] Cracking Successed @ {yellow}{word}{white}\n")
            quit()
        else:
            print(f"{red}[-] Cracked Failed @ {yellow}{word}{white}")


# calling main function
main()
