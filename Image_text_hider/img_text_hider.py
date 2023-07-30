import argparse
from stegano import lsb
import os
from cryptography.fernet import Fernet

# Encryption key for encrypting and decrypting the hidden text
ENCRYPTION_KEY = b"your-32-byte-secret-key"


# WE can implement our encryption and decryption algorithm here
def encrypt_text(text):
    cipher_suite = Fernet(ENCRYPTION_KEY)
    encrypted_text = cipher_suite.encrypt(text.encode())
    return encrypted_text.decode()


def decrypt_text(text):
    cipher_suite = Fernet(ENCRYPTION_KEY)
    decrypted_text = cipher_suite.decrypt(text.encode())
    return decrypted_text.decode()


def hide_text_in_image(image_path, text, output_path, password=None):
    try:
        if password:
            text = encrypt_text(text)  # Encrypt the text if a password is provided
        secret_image = lsb.hide(image_path, text)
        secret_image.save(output_path)
        print(
            "Text hidden in the image successfully. Output image saved at", output_path
        )
    except Exception as e:
        print("An error occurred while hiding text:", str(e))


def reveal_text_from_image(image_path, password=None):
    try:
        secret_text = lsb.reveal(image_path)
        if password:
            secret_text = decrypt_text(
                secret_text
            )  # Decrypt the text if a password is provided
        return secret_text
    except UnicodeDecodeError:
        print("Unable to reveal text. Decoding error occurred.")
    except IndexError:
        print(
            "Failed to find the message in this file format. Try using a different file format like PNG."
        )
    except Exception as e:
        print("An error occurred while revealing text:", str(e))


def main():
    print(
        "\n[Welcome to Image Text Hider. This script can hide text inside an image]\n"
    )
    print("To hide text inside an image:")
    print(
        "USAGE: python img_text_hider.py hide img_name_with_path.jpg 'This is my secret message' output_file_name.jpg\n"
    )
    print("To reveal the hidden text inside an image:")
    print("USAGE: python img_text_hider.py reveal hidden_img_name.jpg\n")

    parser = argparse.ArgumentParser(description="Image Text Hider")
    subparsers = parser.add_subparsers(dest="command", help="Available commands")

    # Hide command
    hide_parser = subparsers.add_parser("hide", help="Hide text behind an image")
    hide_parser.add_argument("image", help="Path to the image file")
    hide_parser.add_argument("text", help="Text to hide")
    hide_parser.add_argument(
        "output", help="Output path for the image with hidden text"
    )
    hide_parser.add_argument("--password", help="Password for encryption")

    # Reveal command
    reveal_parser = subparsers.add_parser("reveal", help="Reveal text from an image")
    reveal_parser.add_argument("image", help="Path to the image file")
    reveal_parser.add_argument("--password", help="Password for decryption")

    args = parser.parse_args()

    if args.command == "hide":
        if os.path.exists(args.image):
            hide_text_in_image(args.image, args.text, args.output, args.password)
        else:
            print(
                "The specified image path does not exist. Please check the image path and file name with extension."
            )
    elif args.command == "reveal":
        if os.path.exists(args.image):
            revealed_text = reveal_text_from_image(args.image, args.password)
            if revealed_text:
                print(f"Revealed text: [{revealed_text}]")
        else:
            print(
                "The specified image path does not exist. Please check the image path and file name with extension."
            )


if __name__ == "__main__":
    main()
