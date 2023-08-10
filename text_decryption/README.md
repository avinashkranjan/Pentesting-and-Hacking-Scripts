## Encryption and Decryption Toolkit

This repository contains a Python script (encrypt_decrypt.py) that provides a collection of functions for performing encryption and decryption using various ciphers: Caesar cipher, Affine cipher, Substitution cipher, and Transposition cipher. Users can choose the type of cipher and input their desired text and key values for encryption or decryption.

## How to Use

1. Save the provided Python script into a file, e.g., encrypt_decrypt.py.

2. Make sure you have Python installed on your system.

3. Open a terminal or command prompt and navigate to the directory where the script is located.

4. Run the script using the command:
   python encrypt_decrypt.py

5. Follow the on-screen instructions to select the cipher and input the required text and key values for encryption or decryption.

## Available Ciphers

1. Caesar Cipher

   - Encrypt and decrypt text using a simple shift of characters.
   - The user must provide a shift value (integer) to perform the encryption or decryption.

2. Affine Cipher

   - Encrypt and decrypt text using a mathematical function (ax + b).
   - The user must provide two integer values (a and b) to perform the encryption or decryption. The value of 'a' must have a modular inverse.

3. Substitution Cipher

   - Encrypt and decrypt text by replacing each letter with another letter from a substitution key.
   - The user must provide a substitution key (string) with 26 unique letters of the alphabet for encryption or decryption.

4. Transposition Cipher
   - Encrypt and decrypt text by rearranging the characters based on a given key.
   - The user must provide a transposition key (integer) to perform the encryption or decryption. The key must be less than the length of the input text.

### Note:

- For the Affine Cipher, ensure that the value of 'a' has a modular inverse. Otherwise, the decryption will not be possible.
- For the Substitution Cipher, the substitution key should have 26 unique letters of the alphabet for the encryption and decryption to work correctly.

Feel free to use and modify this toolkit to suit your encryption and decryption needs. Enjoy experimenting with different ciphers to secure your messages!
