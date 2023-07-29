import hashlib


def SHA224(bytes):
    hashed_message = hashlib.sha224()
    hashed_message.update(byte_stream)
    return hashed_message.hexdigest()


def SHA256(bytes):
    hashed_message = hashlib.sha256()
    hashed_message.update(byte_stream)
    return hashed_message.hexdigest()


def SHA512(bytes):
    hashed_message = hashlib.sha512()
    hashed_message.update(byte_stream)
    return hashed_message.hexdigest()


def SHA1(bytes):
    hashed_message = hashlib.sha1()
    hashed_message.update(byte_stream)
    return hashed_message.hexdigest()


def MD5(bytes):
    byte_stream = bytes
    hashed_message = hashlib.md5()
    hashed_message.update(byte_stream)
    return hashed_message.hexdigest()


def BLAKE2B(bytes):
    hashed_message = hashlib.blake2b()
    hashed_message.update(byte_stream)
    return hashed_message.hexdigest()


def BLAKE2S(bytes):
    hashed_message = hashlib.blake2s()
    hashed_message.update(byte_stream)
    return hashed_message.hexdigest()


file_path = input("enter file path:")
with open(file_path, "r") as f:
    message = f.read()
    byte_stream = message.encode()


hash_functions = ["md5", "sha224", "sha256", "sha512", "sha1", "blake2b", "blake2s"]
print(f"Available hash functions are {hash_functions}")

func = input("enter the desired function:")

if func not in hash_functions:
    print("select a valid function")

elif func == "md5":
    cipher = MD5(byte_stream)
    print(cipher)

elif func == "sha224":
    cipher = SHA224(byte_stream)
    print(cipher)

elif func == "sha256":
    cipher = SHA256(byte_stream)
    print(cipher)

elif func == "sha512":
    cipher = SHA512(byte_stream)
    print(cipher)

elif func == "sha1":
    cipher = SHA1(byte_stream)
    print(cipher)

elif func == "blake2b":
    cipher = BLAKE2B(byte_stream)
    print(cipher)

else:
    cipher = BLAKE2S(byte_stream)
    print(cipher)


with open("hashed.txt", "w") as f:
    f.write(cipher)

print("hashed.txt created in present working directory")
