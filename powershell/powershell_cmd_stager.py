import base64
import subprocess
import sys


def generate_command_stager(ps1_script):
    # Read the contents of the PowerShell script
    with open(ps1_script, "r") as file:
        script_contents = file.read()

    # Encode the script contents using base64
    encoded_script = base64.b64encode(script_contents.encode("utf-8")).decode("utf-8")

    # Generate the command stager
    command_stager = f"powershell -WindowStyle Hidden -ExecutionPolicy Bypass -EncodedCommand {encoded_script}"

    return command_stager


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python powershell_cmd_stager.py <ps1_script>")
        sys.exit(1)

    ps1_script = sys.argv[1]
    command_stager = generate_command_stager(ps1_script)
    print(f"Command Stager: {command_stager}")
