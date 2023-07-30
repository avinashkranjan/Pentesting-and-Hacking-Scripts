#!/usr/bin/python


from os import listdir
from os.path import isfile, join

try:
    from googlesearch import search  # external package
except ImportError:
    print("No module named 'google' found")
import urllib
import config_params
from common_utils import menu_utils

VERSION = "1.0"

""" This module uses a Google hacking databases to facilitate dorks """


def load_google_hacks_list():
    """loading the list of google hacks"""
    google_hacks = [
        f
        for f in listdir(config_params.GOOGLE_HACKS_FOLDER)
        if isfile(join(config_params.GOOGLE_HACKS_FOLDER, f))
    ]
    return google_hacks


def get_strings(src_file):
    """getting strings from file"""
    res = []
    try:
        res = open(src_file, "r").readlines()
        res = [x.strip() for x in res]
    except:
        res = []
    return res


def append_sitename(strs, site):
    """adding site name to strings, and testing if the query returns some response"""
    google_hacks = []
    for x in strs:
        google_hack = x + " site:" + site
        nres = results_in_google(google_hack)
        print("[+] %s results in: %s" % (nres, google_hack))
        if nres > 0:
            google_hacks.append(google_hack)
    return google_hacks


def save_output(strs):
    """printing results"""
    res = "\n".join(strs)
    print(res)


def from_site(site_name, google_hack):
    """This creates and saves a list of Google dorks for a given site"""

    source_file = join(config_params.GOOGLE_HACKS_FOLDER, google_hack)
    menu_utils.header(source_file)

    if not isfile(source_file):
        menu_utils.error("Could not find source file!")
    strs = [line.rstrip("\n") for line in open(source_file)]
    if not strs:
        menu_utils.error("Can't get data from source file!")
        exit()

    if site_name:
        strs = append_sitename(strs, site_name)

    save_output(strs)


def results_in_google(query):
    """This will return the number of results found in google using the given query"""

    counter = 0
    try:
        for j in search(query, tld="com", num=1, stop=1, pause=2):
            counter += 1
    except urllib.error.HTTPError as e:
        menu_utils.error(e)

    return counter
