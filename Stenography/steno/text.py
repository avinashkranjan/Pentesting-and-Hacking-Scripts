# these modules come with standard python installation
import os
import subprocess
from steno import database as db

__author__ = "Sohel Ahmed"
"""
Module text.py for performing text stenography using SNOW
link - http://darkside.com.au/snow/   -- here you will get to 
know about SNOW and also download it. This mainly hides your
 data inside spaces and tabs & also encrypts it.
"""


def size(file: str):
    """Used to know how much data can be hidden in the file returns it in bytes"""
    cmd = subprocess.Popen(
        ["snow", "-S", file], stdout=subprocess.PIPE, stderr=subprocess.STDOUT
    )
    stdout, stderr = cmd.communicate()
    return str(stdout, "utf-8").split()[-2]


def encode(
    passwd: str, infile: str, outfile: str, file: str = None, message: str = None
):
    """This is used to encode data in the file with password. Returns nothing"""
    if message is not None:
        """If the data is a message it encodes it inside the contents of infile and saves it in outfile"""
        command = 'snow -C -Q -p "{}" -m "{}" {} {}'.format(
            passwd, message, infile, outfile
        )
        os.system("cmd /c" + command)
        db.format_txt(outfile, passwd)
    elif file is not None:
        """If the data is a file it encodes it in infile and saves it as outfile"""
        command = 'snow -C -Q -p "{}" -f {} {} {}'.format(passwd, file, infile, outfile)
        os.system("cmd /c" + command)
        db.format_txt(outfile, passwd)


def decode(passwd: str, file: str):
    """Decodes the data hidden in the file. Returns the data in readable
    form if password is correct else in encrypted form."""
    cmd = subprocess.Popen(
        ["snow", "-C", "-p", passwd, file],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )
    stdout, stderr = cmd.communicate()
    return str(stdout, "utf-8")
