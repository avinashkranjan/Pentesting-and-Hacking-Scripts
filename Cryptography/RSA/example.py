import rsa

# Generate public and private keys
public_key, private_key = rsa.generate_keys()

# Encrypt a message using the public key
message = "Hello, RSA!"
encrypted_message = rsa.encrypt(message, public_key)
print("Encrypted message:", encrypted_message)

# Decrypt the encrypted message using the private key
decrypted_message = rsa.decrypt(encrypted_message, private_key)
print("Decrypted message:", decrypted_message)
