import os
import requests
from PIL import Image

# Import necessary libraries

website_url = "https://example.com/images/"
# Define the URL of the website containing the images you want to download


def download_images(url, download_folder):
    response = requests.get(url)
    image_names = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
    ]  # Replace with actual image names or fetch them dynamically
    for name in image_names:
        image_url = url + name
        image_path = os.path.join(download_folder, name)
        with open(image_path, "wb") as f:
            f.write(response.content)


# Create a function to download images from the website


def resize_images(input_folder, output_folder, target_size):
    for filename in os.listdir(input_folder):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)
        img = Image.open(input_path)
        img_resized = img.resize(target_size)
        img_resized.save(output_path)


# Create a function to resize images
def resize_images(input_folder, output_folder, target_size):
    for filename in os.listdir(input_folder):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)
        img = Image.open(input_path)
        img_resized = img.resize(target_size)
        img_resized.save(output_path)


# Define the target size for the resized images
target_size = (300, 200)  # Width x Height in pixels


def organize_images_by_dimensions(input_folder):
    for filename in os.listdir(input_folder):
        input_path = os.path.join(input_folder, filename)
        img = Image.open(input_path)
        width, height = img.size
        folder_name = f"{width}x{height}"
        folder_path = os.path.join(input_folder, folder_name)
        if not os.path.exists(folder_path):
            os.mkdir(folder_path)
        output_path = os.path.join(folder_path, filename)
        shutil.move(input_path, output_path)


# Create a function to organize images into folders based on their dimensions

# Main function to execute the automation script
if __name__ == "__main__":
    download_folder = "downloads"
    os.makedirs(download_folder, exist_ok=True)
    download_images(website_url, download_folder)

    resize_folder = "resized"
    os.makedirs(resize_folder, exist_ok=True)
    resize_images(download_folder, resize_folder, target_size)

    organize_images_by_dimensions(resize_folder)
