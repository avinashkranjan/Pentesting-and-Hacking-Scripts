# This is the file that runs the unit tests for the script.py
#
# This script has been created by Pablo Corbalán De Concepión | tw: @pablocorbcon
#
# You can read the License for this script in the "LICENSE" file of this folder.
#
# For more information, visit: github.com/pblcc/steal-all-files (if you have access to it)
import unittest
import script
from rich.console import Console

console = Console()


def log_error(err):
    """
    Logs a test error

    Parameters
    ----------
    err: str
        The message of the error
    """
    console.print(f"Test error {err}", style="red bold")


class TestScript(unittest.TestCase):
    """
    This class handles all the tests for the script.py file.

    Inherits from unittest.TestCase
    """

    def test_readfile(self):
        files_to_check = ["README.md", "LICENSE.md", "help.txt"]
        for file in files_to_check:
            with open(file, "r") as f:
                self.assertEquals(script.readfile(file), f.read())


if __name__ == "__main__":
    unittest.main()
