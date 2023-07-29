#!/usr/bin/env python
# -*- coding: utf-8 -*-

from common_utils import menu_utils
import pprintpp  # external package

# For images
from PIL.ExifTags import TAGS  # external package
from PIL import Image  # external package

# For PDFs
from PyPDF2 import PdfFileReader  # external package
from PyPDF2 import utils  # external package

""" This module uses PILLOW and PyPDF2 in order to retrieve metadata from images and PDFs """


def from_image(image_file):
    """This prints the EXIF info from a given image file"""

    try:
        image = Image.open(image_file)
        exif_image = image._getexif()

        menu_utils.header("EXIF info: %s" % image_file)
        pprintpp.pprint(exif_image)

        if exif_image:
            metadata_exif = {}
            for tag, value in exif_image.items():
                decoded = TAGS.get(tag, tag)
                metadata_exif[decoded] = value

            menu_utils.header("EXIF info detailed %s" % image_file)

            for tag in metadata_exif.keys():
                menu_utils.mixed_info("[+] %s: " % tag, metadata_exif[tag])

    except (FileNotFoundError, OSError) as e:
        menu_utils.error(e)


def from_pdf(pdf_file):
    """This prints the metadata from a given PDF"""

    try:
        pdf = PdfFileReader(pdf_file, "rb")

        # Extracting info from PDF
        info_pdf = pdf.getDocumentInfo()

        menu_utils.header("Metadata info")

        for metadata in info_pdf:
            menu_utils.mixed_info("[+] " + metadata + ":", info_pdf[metadata])

    except (FileNotFoundError, utils.PdfReadError) as e:
        menu_utils.error(e)
