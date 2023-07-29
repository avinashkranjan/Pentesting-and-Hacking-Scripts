import os
import warnings
from typing import Any, Optional, Union

import click
from appdirs import AppDirs
import logging
from rich.logging import RichHandler
from rich.console import Console

from ciphey import iface

warnings.filterwarnings("ignore")

console = Console()


def decrypt(config: iface.Config, ctext: Any) -> Union[str, bytes]:
    """A simple alias for searching a ctext and makes the answer pretty"""
    res: Optional[iface.SearchResult] = config.objs["searcher"].search(ctext)
    if res is None:
        return "Failed to crack"
    if config.verbosity < 0:
        return res.path[-1].result.value
    else:
        return iface.pretty_search_results(res)


def print_help(ctx):
    # prints help menu
    # if no arguments are passed
    click.echo(ctx.get_help())
    ctx.exit()


@click.command()
@click.option(
    "-t",
    "--text",
    help="The ciphertext you want to decrypt.",
    type=str,
)
@click.option(
    "-q", "--quiet", help="Decrease verbosity", type=int, count=True, default=None
)
@click.option(
    "-g",
    "--greppable",
    help="Only print the answer (useful for grep)",
    is_flag=True,
    default=None,
)
@click.option("-v", "--verbose", count=True, type=int)
@click.option("-C", "--checker", help="Use the given checker", default=None)
@click.option(
    "-c",
    "--config",
    help="Uses the given config file. Defaults to appdirs.user_config_dir('ciphey', 'ciphey')/'config.yml'",
)
@click.option("-w", "--wordlist", help="Uses the given wordlist")
@click.option(
    "-p",
    "--param",
    help="Passes a parameter to the language checker",
    multiple=True,
)
@click.option(
    "-l",
    "--list-params",
    help="List the parameters of the selected module",
    is_flag=True,
)
@click.option(
    "--searcher",
    help="Select the searching algorithm to use",
)
@click.option(
    "-b",
    "--bytes",
    help="Forces Ciphey to use binary mode for the input",
    is_flag=True,
    default=None,
)
@click.option(
    "--default-dist",
    help="Sets the default character/byte distribution",
    type=str,
    default=None,
)
@click.option(
    "-m",
    "--module",
    help="Adds a module from the given path",
    type=click.Path(),
    multiple=True,
)
@click.option(
    "-A",
    "--appdirs",
    help="Print the location of where Ciphey wants the settings file to be",
    is_flag=True,
)
@click.option("-f", "--file", type=click.File("rb"), required=False)
@click.argument("text_stdin", callback=iface.get_input_from_stdin, required=False)
def main(**kwargs):
    # Initialize the console and logging
    console = Console()
    logging.basicConfig(
        level=logging.INFO,
        format="%(message)s",
        datefmt="[%X]",
        handlers=[RichHandler(console=console, rich_tracebacks=True)],
    )

    # Create the configuration object
    config = iface.Config()

    # Load the settings file into the config
    config.load_settings_file(kwargs["config"])

    # Set verbosity level
    verbosity = (
        kwargs["verbose"] - kwargs["quiet"] if kwargs["verbose"] is not None else None
    )
    config.set_verbosity(verbosity)

    # Load additional options into the config
    config.set_option("checker", kwargs["checker"])
    config.set_option("searcher", kwargs["searcher"])
    config.set_option("default_dist", kwargs["default_dist"])
    config.set_option("wordlist", kwargs["wordlist"])

    # Load additional modules
    config.load_modules(kwargs["module"])

    # Update parameters
    config.update_parameters(kwargs["param"])

    # Complete the configuration setup
    config.complete_config()

    # Process the input text
    input_text = kwargs["text"] or kwargs["text_stdin"]
    if isinstance(input_text, bytes) and not kwargs["bytes"]:
        input_text = input_text.decode("utf-8")
    elif isinstance(input_text, str) and kwargs["bytes"]:
        input_text = input_text.encode("utf-8")

    # Perform decryption
    result = None
    with console.status("[bold green]Thinking...", spinner="moon") as status:
        config.set_spinner(status)
        result = decrypt(config, input_text)

    # Print the result
    console.print(result)


if __name__ == "__main__":
    main()
