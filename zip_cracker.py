from zipfile import ZipFile
import os


def cracking_zip(zip_file_name, passwords_list):
    """[how to crack ZIP file]

    Args:
        zip_file_name ([string]): [ to take the ZIP file name you want to crack ]
        passwords_list ([list]): [ to get the list of passwords from the file to do the test with them ]
    """

    for password in passwords_list:
        password = password.rstrip("\n")
        with ZipFile(zip_file_name) as zfile:
            try:
                zfile.extractall(pwd = password.encode("utf-8"))
                print(f"\n[+] Password Match @ {password}\n")
                break
            except:
                print("[-] Password doesn't Match @ " + password)

def read_file(password_list):
    """[what is function job]

    Args:
        password_list ([string]) :[password list name to read]

    Returns:
        content [list]           :[list of all passwords that are read from password list]
    """

    # handling cwd.
    os.chdir(os.path.dirname(__file__))
    with open(password_list,"r") as obj:
      content =  obj.readlines()
      return content 

def main():

    # reading zfile name
    zfile_name = input("[+] Enter zip file name: ")

    # read wordlist_name
    # update: ask the user for wordlist/passwordlist name
    p_name=input("[+] Enter file name")
    passwords = read_file(p_name)

    cracking_zip(zfile_name, passwords)

# calling main function
main()
