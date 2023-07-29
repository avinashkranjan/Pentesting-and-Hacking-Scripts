import sys
from os import chdir, listdir, getcwd
from os.path import abspath

from scripts import SCRIPTS


def print_menu():
    # Convert all the available choices to a list
    keys = [*SCRIPTS]

    # Add option to exit from the menu
    keys.append("Exit")

    # Print all the available choices
    count = 1
    for key in keys:
        print("{}. {}".format(count, key))
        count += 1

    choice = int(input("\nEnter your choice: "))

    # Check for invalid input
    while choice < 0 or choice > len(keys):
        print("\nError: Invalid Choice")
        return print_menu()

    return keys[choice - 1]


def main():
    choice = print_menu()
    print()
    if choice == "Exit":
        exit(0)

    script_object = SCRIPTS[choice]
    if "cli_args_required" in script_object:
        if script_object["cli_args_required"]:
            if "arguments" not in script_object:
                print("Error: Name of command line arguments not passed in setup file")
                exit(0)
            else:
                print("Enter the value for argument(s).")
                args = script_object["arguments"]
                for arg_key in args.keys():
                    arg_obj = args[arg_key]
                    if arg_obj["optional"]:
                        val = input(
                            f'* {arg_obj["description"]} (Press Enter to skip)- '
                        )
                        if "store_only" in arg_obj:
                            if len(val) > 0:
                                sys.argv.append(arg_key)
                        else:
                            if len(val) > 0:
                                if "positional" not in arg_obj:
                                    sys.argv.append(arg_key)
                                sys.argv.append(val)
                    else:
                        val = input(f'* {arg_obj["description"]} - ')
                        if "store_only" in arg_obj:
                            sys.argv.append(arg_key)
                        elif "positional" not in arg_obj:
                            sys.argv.append(arg_key)
                        sys.argv.append(val)

    sys.path.append(abspath(script_object["path_to_directory"]))
    chdir(script_object["path_to_directory"])

    with open(script_object["program_name"], "r") as file:
        exec(file.read(), globals(), globals())


if __name__ == "__main__":
    # try:
    #     main()
    # except Exception as e:
    #     print("An exception occurred: ")
    #     print(str(e))
    main()
