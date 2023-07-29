import PyPDF2


def unlock_pdf(input_path, output_path, password):
    # Open the encrypted PDF file
    with open(input_path, "rb") as input_file:
        reader = PyPDF2.PdfReader(input_file)

        # Check if the PDF file is encrypted
        if reader.is_encrypted:
            # Try to decrypt the PDF file with the provided password
            if reader.decrypt(password):
                # Create a new PDF writer
                writer = PyPDF2.PdfWriter()

                # Add all the decrypted pages to the new PDF writer
                for page_num in range(len(reader.pages)):
                    page = reader.pages[page_num]
                    writer.add_page(page)

                # Save the unlocked PDF file
                with open(output_path, "wb") as output_file:
                    writer.write(output_file)
                print("PDF file unlocked successfully.")
            else:
                print("Incorrect password. Unable to unlock the PDF file.")
        else:
            print("The PDF file is not encrypted.")


# Usage example
input_path = "encrypted.pdf"
output_path = "unlocked.pdf"
password = "123456789"

unlock_pdf(input_path, output_path, password)
