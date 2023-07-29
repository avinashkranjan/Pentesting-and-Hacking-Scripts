SCRIPTS = {
    "403 Bypass": {
        "path_to_directory": "./403Bypass",
        "program_name": "403bypasser.py",
        "cli_args_required": True,
        "arguments": {
            "Domain": {"description": "Domain", "optional": False, "positional": True},
            "Path": {"description": "Path", "optional": False, "positional": True},
        },
    },
    "Checking Website": {
        "path_to_directory": "./Checking_website",
        "program_name": "script.py",
        "cli_args_required": False,
    },
    "Directory Busting": {
        "path_to_directory": "./DirectoryBusting",
        "program_name": "directoryBuster.py",
        "cli_args_required": True,
        "arguments": {
            "-url": {
                "description": "URL to Bust",
                "optional": False,
            },
            "-dict": {
                "description": "Dictionary to use",
                "optional": False,
            },
            "-r": {
                "description": "Be recursive",
                "store_only": True,
                "optional": True,
            },
            "-v": {
                "description": "Show all attempts",
                "store_only": True,
                "optional": True,
            },
        },
    },
    "Discovering Subdomains": {
        "path_to_directory": "./Discovering-Subdomains",
        "program_name": "program.py",
        "cli_args_required": False,
    },
    "Domino Effect": {
        "path_to_directory": "./Domino-Effect",
        "program_name": "dominoeffect.py",
        "cli_args_required": True,
        "arguments": {
            "system": {
                "description": "IP address or hostname to harvest hashes from",
                "optional": False,
                "positional": True,
            },
            "--version": {
                "description": "Show program's version number and exit (Press Enter)",
                "optional": False,
                "store_only": True,
            },
            "-u": {
                "description": "Path to the names.nsf file",
                "optional": True,
            },
            "--hashcat": {
                "description": "Print results for use with hashcat",
                "store_only": True,
                "optional": True,
            },
            "--john": {
                "description": "Print results for use with John the Ripper",
                "store_only": True,
                "optional": True,
            },
        },
    },
    "DOS Attack": {
        "path_to_directory": "./dos-attack",
        "program_name": "dos.py",
        "cli_args_required": False,
    },
    "Easy Scope": {
        "path_to_directory": "./easyscope",
        "program_name": "easyscope.py",
        "cli_args_required": True,
        "arguments": {
            "--file": {
                "description": "Newline delimited file containing subnets or IP ranges",
                "optional": True,
            },
            "--expand": {
                "description": "Expand IP addresses to single IP address",
                "optional": True,
            },
            "--combine": {
                "description": "Combine IP addresses to supernets",
                "optional": True,
            },
        },
    },
    "Geo Location": {
        "path_to_directory": "./Geolocation",
        "program_name": "geolocation.py",
        "cli_args_required": False,
    },
    "GraphQL Map": {
        "path_to_directory": "./GraphQLmap",
        "program_name": "graphqlmap.py",
        "cli_args_required": True,
        "arguments": {
            "-u": {
                "description": "URL to query",
                "optional": True,
            },
            "-v": {
                "description": "Enable verbosity",
                "optional": True,
                "store_only": True,
            },
            "--method": {
                "description": "HTTP Method to use interact with /graphql endpoint",
                "optional": True,
            },
            "--headers": {
                "description": "HTTP Headers sent to /graphql endpoint",
                "optional": True,
            },
            "--json": {
                "description": "Use JSON encoding, implies POST",
                "optional": True,
            },
        },
    },
    "Hash-Cracker: Cracker": {
        "path_to_directory": "./Hash-Cracker",
        "program_name": "hashcrack.py",
        "cli_args_required": False,
    },
    "Hash-Cracker: Checker": {
        "path_to_directory": "./Hash-Cracker",
        "program_name": "hash-checker.py",
        "cli_args_required": False,
    },
    "HTTP Reversed Shell": {
        "path_to_directory": "./HTTP-Reversed-Shell",
        "program_name": "server.py",
        "cli_args_required": False,
    },
    "Information Gathering": {
        "path_to_directory": "./Information-Gathering",
        "program_name": "inforecon.py",
        "cli_args_required": True,
        "arguments": {
            "url": {
                "description": "URL of the Website you want to lookup the information",
                "optional": False,
                "positional": True,
            }
        },
    },
    "Key Logger": {
        "path_to_directory": "./Keylogger",
        "program_name": "keylogger.py",
        "cli_args_required": False,
    },
    "MAC Spoof": {
        "path_to_directory": "./MAC-Spoof",
        "program_name": "spoof.py",
        "cli_args_required": True,
        "arguments": {
            "-i": {"description": "Interface Name", "optional": False},
            "-m": {"description": "New MAC Address", "optional": False},
        },
    },
    "Nightcall": {
        "path_to_directory": "./NightCall",
        "program_name": "nightcall.py",
        "cli_args_required": True,
        "arguments": {
            "single_address": {
                "description": "Single host or network",
                "optional": False,
                "positional": True,
            },
            "-i": {
                "description": "Interface to use for masscan and nmap",
                "optional": True,
            },
            "-f": {
                "description": "Target file containing line separated ip addresses",
                "optional": True,
            },
            "-sP": {
                "description": "Skip portscans, directly import xml",
                "optional": True,
                "store_only": True,
            },
            "-b": {
                "description": "Enable bruteforcing",
                "optional": True,
                "store_only": True,
            },
            "-w": {
                "description": "Enable additional web related scans",
                "optional": True,
                "store_only": True,
            },
            "--disable-resolve": {
                "description": "Disable separate hostname resolution (outside nmap)",
                "optional": True,
                "store_only": True,
            },
        },
    },
    "Phone Number Tracker": {
        "path_to_directory": "./Phone-Number-Tracker",
        "program_name": "Tracker.py",
        "cli_args_required": False,
    },
    "Port Scanner": {
        "path_to_directory": "./Port-Scanner",
        "program_name": "Port_Scanner.py",
        "cli_args_required": False,
    },
    "Python N-Map": {
        "path_to_directory": "./Python-Nmap",
        "program_name": "scanner.py",
        "cli_args_required": False,
    },
    "Stock Market Data Scraper": {
        "path_to_directory": "./Stock-Market-Data-Scraper",
        "program_name": "stock_market.py",
        "cli_args_required": False,
    },
    "Who-Is": {
        "path_to_directory": "./Who-Is",
        "program_name": "whois.py",
        "cli_args_required": True,
    },
    "WiFi Passwords": {
        "path_to_directory": "./Wifi_passwords",
        "program_name": "wifi-passwords.py",
        "cli_args_required": True,
    },
    "Encrypt String": {
        "path_to_directory": "./encrypt_string",
        "program_name": "string_hashing.py",
        "cli_args_required": False,
    },
}
