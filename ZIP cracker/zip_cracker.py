from zipfile import ZipFile
import itertools
import multiprocessing


def cracking_zip(zip_file_name, passwords_list):
    """Cracks a ZIP file using a list of passwords.

    Args:
        zip_file_name (str): The name of the ZIP file to crack.
        passwords_list (list): A list of passwords to test.

    Returns:
        str: The password if found, or None if no password is found.
    """
    with ZipFile(zip_file_name) as zfile:
        for password in passwords_list:
            password = password.strip()
            try:
                zfile.extractall(pwd=password.encode("utf-8"))
                return password
            except RuntimeError:
                pass
    return None


def read_passwords(password_list):
    """Reads passwords from a file.

    Args:
        password_list (str): The name of the password list file.

    Returns:
        list: A list of passwords.
    """
    with open(password_list, "r") as file:
        return [password.strip() for password in file]


def generate_passwords(base_password, variations):
    """Generates password variations based on a base password.

    Args:
        base_password (str): The base password to generate variations from.
        variations (list): A list of dictionaries containing variations.

    Returns:
        list: A list of generated passwords.
    """
    generated_passwords = []
    for variation in variations:
        generated_password = base_password
        for char, replacements in variation.items():
            for replacement in replacements:
                generated_password = generated_password.replace(char, replacement)
                generated_passwords.append(generated_password)
    return generated_passwords


def main():
    # Read the zip file name
    zip_file_name = input("[+] Enter ZIP file name: ")

    # Read the password list file name
    password_list_name = input("[+] Enter password list file name: ")
    passwords = read_passwords(password_list_name)

    # Attempt to crack the ZIP file using the provided password list
    cracked_password = cracking_zip(zip_file_name, passwords)

    if cracked_password:
        print(f"\n[+] Password Match: {cracked_password}\n")
    else:
        print("[-] No matching password found.")

    # Additional cracking strategies
    print("Additional Cracking Strategies:")
    base_password = input("[+] Enter a base password to generate variations: ")
    variations = [
        {"a": ["@", "4"]},  # Replace 'a' with '@' or '4'
        {"o": ["0", "*"]},  # Replace 'o' with '0' or '*'
        {"s": ["$", "5"]},  # Replace 's' with '$' or '5'
        {"e": ["3"]},  # Replace 'e' with '3'
        {"i": ["1"]},  # Replace 'i' with '1'
        {"l": ["1"]},  # Replace 'l' with '1'
        {"t": ["7"]},  # Replace 't' with '7'
    ]
    generated_passwords = generate_passwords(base_password, variations)

    # Combine the generated passwords with the original password list
    combined_passwords = passwords + generated_passwords

    # Use multiprocessing to parallelize the password cracking process
    with multiprocessing.Pool() as pool:
        results = pool.starmap(
            cracking_zip,
            [(zip_file_name, [password]) for password in combined_passwords],
        )
        if any(results):
            cracked_password = combined_passwords[results.index(True)]
            print(f"\n[+] Password Match: {cracked_password}\n")
        else:
            print("[-] No matching password found for the combined passwords.")


# Call the main function
if __name__ == "__main__":
    main()
