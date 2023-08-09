# Running the menu driven program

    python3 main.py

## Adding new scripts to the Menu Driven Program

1.  Open the _scripts.py_ file.

2.  Create a new object inside the **SCRIPTS** object with the following attributes

        "Name of the Script": {
        "path_to_directory": "./relative_path_to_the_scripts_folder",
        "program_name": "name_of_the_script_file.py",
        "cli_args_required": True|False,
        # If 'cli_args_required' is set to True, create the "arguments" key.

        "arguments": {
            "argument_name": {
                "description" : "Descrition of the argument",
                "optional": True|False,
                "store_only": True|False
                # if no value is to be passed with the argument name
                "positional": True|False
                # Set to True if name of the argument is not to be included in the program's name.
                },
            }
        }

### Scripts which were not included in the menu driven program

1. SniffAir: The **setup.sh** file is not included in the code directory.

2. SQL Injection: The script has no interface built-in in order to interact with it using command line.

3. Target-Lib: The script has no interface built-in in order to interact with it using command line.
