###################################################### Wayback Machine ######################################################
################################################ Developed By Avdhesh Varshney ##############################################
############################################ (https://github.com/Avdhesh-Varshney) ##########################################

"""Install Python Packages as listed below using these commands in the terminal

Sr. No.         Package Name             Commands
1.              requests                 pip install requests
2.              os                       pip install os

After install all these packages then import all of them in this file."""

# Importing libraries
import requests
import os


# Initialising wayback class to fetch urls of the websites
class Wayback:
    def __init__(self):
        self.url = ""
        self.limit = 0

    # Taking input from the user
    def get_user_input(self):
        self.url = input("Enter the website URL: ")
        self.limit = int(input("Enter the limit number: "))

    # Fetching data from the wayback machine
    def get(self):
        url = f"https://web.archive.org/cdx/search?url={self.url}&matchType=prefix&collapse=urlkey&output=text&fl=original&filter=&limit={self.limit}"
        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/68.0"
        }
        r = requests.get(url, headers=headers)
        results = r.text
        return results


# Main function
def main():
    wayback = Wayback()
    wayback.get_user_input()
    res = wayback.get()

    # Clear the console
    os.system("cls" if os.name == "nt" else "clear")

    print("############ All websites from the WayBack Machine ###########\n")

    j = 1
    for i in res.split():
        print(f"{j} : {i}\n")
        j += 1

    print("\n############## Thanks for using this program ! ###############\n")


# Driver function
if __name__ == "__main__":
    main()
