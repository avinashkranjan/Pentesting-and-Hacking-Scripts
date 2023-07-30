#!/usr/bin/env python
# -*- coding: utf-8 -*-
PATH = "default"
OUTPUT = "default"
MODE = "w"
# This is the main script of the steal-all-files github repository.
#
# This script has been created by Pablo Corbalán De Concepión | tw: @pablocorbcon
#
# You can read the License for this script in the "LICENSE" file of this folder.
#
# For more information, visit: github.com/pblcc/steal-all-files (if you have access to it)
from rich.markdown import Markdown
from rich.console import Console

import sys
import os
import zipfile
import platform

console = Console()


def exitapp(**kwargs):
    """
    This function is used to exit the app using the sys.exit function

    Parameters
    ----------
    kwargs: **
        Some keywords for closing the app
        {
            code: int
                The exit code
            msg: str
                The message if there is a message
        }
    """
    # check if the user has actually used keywords
    keys = kwargs.keys()
    if "msg" in keys:
        k = kwargs["msg"]
        print(k)
    code = 0 if "code" not in keys else kwargs["code"]
    sys.exit(0)


def readfile(file_route):
    """
    Reads a file, handles it's exceptions and then returns the content of
    that file.

    Parameters
    ----------
    file_route: str
        The file route for reading all

    Returns
    -------
    The content of file_route
    """
    try:
        with open(file_route) as f:
            return f.read()
    except FileNotFoundError as e:
        print("We can't find a file! :500:")
        exitapp(-1, e)
    except Exception as e:
        exitapp(-1, e)


def displayhelp():
    """
    This function is used for displaying help and the commands about the application

    For running this function use: -h
    """
    f = readfile("help.txt")
    print(f)


def displaylicense():
    """
    This function is used for displaying the License of this app.

    For running this function use: -l
    """
    f = readfile("LICENSE.md")
    console.print(Markdown(f))


def systemis(system_to_check):
    """
    Get's the system (os) and returns True if the system is
    :param system_to_check:

    Parameters
    ----------
    system_to_check: str
        The system that has to be checked

    Returns true if the system to be checked is the actual os
    """
    system = platform.system().lower()
    return True if system == system_to_check else False


def setuppath():
    """
    Set's up the path depending on the operative system the user is using.
    """
    global PATH
    if PATH == "default":
        PATH = "C://" if systemis("windows") else "/home"


def setupoutput():
    """
    Set's up the output depending on the path
    """
    global OUTPUT, PATH
    if OUTPUT == "default":
        npath = PATH.replace("/", "_")[1:]
        OUTPUT = f"{npath}.zip"


def zipdir(path, ziph):
    """
    This is the function that actually walks the directory and extracts the files
    inside a ZipFile using the zipfile library.

    Parameters
    ----------
    path: str
        The relative or absolute path for the directory
    ziph: zipfile.ZipFile
        The zipfile handler
    """
    for root, dirs, files in os.walk(path):
        for file in files:
            f = os.path.join(root, file)
            ziph.write(f, os.path.relpath(f, os.path.join(path, "..")))


def isarg(arg, value=False):
    """
    Returns True if the argument :arg: is an actual argument

    Parameters
    ----------
    arg: str
        The argument to be checked
    value: bool
        True if :arg: should have a value
    """
    is_arg = False
    arg_value = None
    args = sys.argv
    if not value:
        if arg in args:
            is_arg = True
    else:
        # We also have to check if the argument has a value to then return it
        for i, argument in enumerate(args):
            if argument == arg:
                if i + 1 < len(args):
                    arg_value = args[i + 1]
                    is_arg = True
    # Return a tupple with all this information
    return (is_arg, arg_value)


def readargs():
    """
    This function reads the arguments of the application using the system library to
    display them and set up the global configuration variables using :func isarg:

    This function does'nt take any parameters nor returns any value
    """
    global PATH, OUTPUT
    # Check out the flags
    if isarg("-h")[0]:
        # The user simply wants to display some help and information about the program
        displayhelp()
        exitapp()
    if isarg("-l")[0]:
        displaylicense()
        exitapp()
    if isarg("-p", True)[0]:
        PATH = isarg("-p", True)[1]
    if isarg("-o", True)[0]:
        o = isarg("-o", True)[1]
        OUTPUT = f"{o}.zip"
    if isarg("-rw")[0]:
        MODE = ""


if __name__ == "__main__":
    setuppath()
    setupoutput()
    readargs()
    console.print(
        f"Extracting {PATH} at {OUTPUT} - Press CTRL + C to stop the process."
    )
    z = zipfile.ZipFile(OUTPUT, MODE, zipfile.ZIP_DEFLATED)
    zipdir(PATH, z)
    z.close()
