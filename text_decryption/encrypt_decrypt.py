import string

# Caesar cipher encryption and decryption
def caesar_cipher_encrypt(text, shift):
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            alphabet = string.ascii_uppercase if char.isupper() else string.ascii_lowercase
            encrypted_char = alphabet[(alphabet.index(char) + shift) % len(alphabet)]
            encrypted_text += encrypted_char
        else:
            encrypted_text += char
    return encrypted_text

def caesar_cipher_decrypt(text, shift):
    decrypted_text = ""
    for char in text:
        if char.isalpha():
            alphabet = string.ascii_uppercase if char.isupper() else string.ascii_lowercase
            decrypted_char = alphabet[(alphabet.index(char) - shift) % len(alphabet)]
            decrypted_text += decrypted_char
        else:
            decrypted_text += char
    return decrypted_text

# Affine cipher encryption and decryption
def affine_cipher_encrypt(text, a, b):
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            alphabet = string.ascii_uppercase if char.isupper() else string.ascii_lowercase
            encrypted_char = alphabet[(a * alphabet.index(char) + b) % len(alphabet)]
            encrypted_text += encrypted_char
        else:
            encrypted_text += char
    return encrypted_text

def mod_inverse(a, m):
    for x in range(1, m):
        if (a * x) % m == 1:
            return x
    return None

def affine_cipher_decrypt(text, a, b):
    decrypted_text = ""
    mod_inv = mod_inverse(a, 26)
    if mod_inv is None:
        raise ValueError("The value of 'a' does not have a modular inverse.")
    for char in text:
        if char.isalpha():
            alphabet = string.ascii_uppercase if char.isupper() else string.ascii_lowercase
            decrypted_char = alphabet[(mod_inv * (alphabet.index(char) - b)) % len(alphabet)]
            decrypted_text += decrypted_char
        else:
            decrypted_text += char
    return decrypted_text

# Substitution cipher encryption and decryption
def substitution_cipher_encrypt(text, key):
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            alphabet = string.ascii_uppercase if char.isupper() else string.ascii_lowercase
            substitution_alphabet = str.maketrans(alphabet, key.upper()) if char.isupper() else str.maketrans(alphabet, key.lower())
            encrypted_char = char.translate(substitution_alphabet)
            encrypted_text += encrypted_char
        else:
            encrypted_text += char
    return encrypted_text

def substitution_cipher_decrypt(text, key):
    decrypted_text = ""
    for char in text:
        if char.isalpha():
            alphabet = string.ascii_uppercase if char.isupper() else string.ascii_lowercase
            reverse_key = str.maketrans(key.upper(), alphabet) if char.isupper() else str.maketrans(key.lower(), alphabet)
            decrypted_char = char.translate(reverse_key)
            decrypted_text += decrypted_char
        else:
            decrypted_text += char
    return decrypted_text



# Transposition cipher encryption and decryption
def transposition_cipher_encrypt(text, key):
    ciphertext = [""] * int(key)
    for column in range(int(key)):
        currentIndex = column
        while currentIndex < len(text):
            ciphertext[column] += text[currentIndex]
            currentIndex += int(key)

    return "".join(ciphertext)

def transposition_cipher_decrypt(ciphertext, key):
    # Determine the number of columns based on the key
    num_columns = int(key)
    # Determine the number of rows based on the ciphertext length and key size
    num_rows = -(-len(ciphertext) // num_columns)

    # Create an empty grid (list of lists) for the transposition
    grid = [[''] * num_columns for _ in range(num_rows)]

    # Fill in the grid with the characters from the ciphertext
    index = 0
    for col in range(num_columns):
        for row in range(num_rows):
            if index < len(ciphertext):
                grid[row][col] = ciphertext[index]
                index += 1

    # Extract the decrypted text from the grid
    decrypted_text = ''
    for row in range(num_rows):
        for col in range(num_columns):
            decrypted_text += grid[row][col]

    return decrypted_text


def main():
    print("Choose an option:")
    print("1. Encrypt using Caesar cipher")
    print("2. Decrypt using Caesar cipher")
    print("3. Encrypt using Affine cipher")
    print("4. Decrypt using Affine cipher")
    print("5. Encrypt using Substitution cipher")
    print("6. Decrypt using Substitution cipher")
    print("7. Encrypt using Transposition cipher")
    print("8. Decrypt using Transposition cipher")

    choice = input("Enter your choice (1-8): ")
    text = input("Enter the text: ")

    if choice == '1':
        try:
            shift = int(input("Enter the shift value for Caesar cipher: "))
            encrypted_text = caesar_cipher_encrypt(text, shift)
            print("Caesar cipher (encryption):", encrypted_text)
        except ValueError:
            print("Invalid Input")

    elif choice == '2':
        try:
            shift = int(input("Enter the shift value for Caesar cipher: "))
            decrypted_text = caesar_cipher_decrypt(text, shift)
            print("Caesar cipher (decryption):", decrypted_text)
        except ValueError:
            print("Invalid Input")

    elif choice == '3':
        try:
            a = int(input("Enter the value for 'a' in Affine cipher: "))
            b = int(input("Enter the value for 'b' in Affine cipher: "))
            encrypted_text = affine_cipher_encrypt(text, a, b)
            print("Affine cipher (encryption):", encrypted_text)
        except ValueError:
            print("Invalid Input")

    elif choice == '4':
        try:
            a = int(input("Enter the value for 'a' in Affine cipher: "))
            b = int(input("Enter the value for 'b' in Affine cipher: "))
            decrypted_text = affine_cipher_decrypt(text, a, b)
            print("Affine cipher (decryption):", decrypted_text)
        except ValueError:
            print("Invalid Input")

    elif choice == '5':
        key = input("Enter the substitution key: ")
        if len(key) == 26:
            encrypted_text = substitution_cipher_encrypt(text, key)
            print("Substitution cipher (encryption):", encrypted_text)
        else:
            print("Key must have the same length as the number of characters in the alphabet (26).")

    elif choice == '6':
        key = input("Enter the substitution key: ")
        if len(key) == 26:
            decrypted_text = substitution_cipher_decrypt(text, key)
            print("Substitution cipher (decryption):", decrypted_text)
        else:
            print("Key must have the same length as the number of characters in the alphabet (26).")

    elif choice == '7':
        try:
            transpose_key = input(
                "Enter the transposition key (make sure its less than length of stirng): "
            )
            if int(transpose_key) > len(text):
                print("Key must be less than length of string")
            else:
                encrypted_text = transposition_cipher_encrypt(text, transpose_key)
                print("Transposition cipher (encryption):", encrypted_text)

        except ValueError:
            print("Invalid Input")

    elif choice == '8':
        try:
            transpose_key = input(
                "Enter the transposition key (make sure its less than length of stirng): "
            )
            if int(transpose_key) > len(text):
                print("Key must be less than length of string")
            else:
                decrypted_text = transposition_cipher_decrypt(text, transpose_key)
                print("Transposition cipher (decryption):", decrypted_text)

        except ValueError:
            print("Invalid Input")

    else:
        print("Invalid choice. Please choose a number between 1 and 8.")

if __name__ == "__main__":
    main()