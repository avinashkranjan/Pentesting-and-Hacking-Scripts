# DumpsterFire Toolset

The DumpsterFire Toolset is a Python script that allows users to create, save, load, and ignite custom DumpsterFires, which are collections of "Fires" executed sequentially with optional delays. A "Fire" is a module that performs a specific task, and users can create their own custom Fire modules or use existing ones.

## Getting Started

- Clone the repository to your local machine:
- cd DumpsterFire
- pip install -r requirements.txt
- python Fire.py

## Features

- Create, save, and load DumpsterFires: Users can create a new DumpsterFire, specify its name, description, and a list of Fires with optional delays between them. The DumpsterFire configurations can be saved to disk and loaded later for reuse.

- Ignite DumpsterFire: Users can ignite a saved DumpsterFire, and the Fires will be executed sequentially, either with or without optional delays, depending on the configuration.

- Dynamic Fire Modules: The toolset supports dynamic imports of Fire modules, allowing users to create their own custom Fire modules and use them within the DumpsterFire configuration.

## Usage

Browse Fires: The toolset allows users to browse through the available Fire categories and their corresponding Fire modules.

Create and Save a DumpsterFire: Users can create a new DumpsterFire and specify its name, description, and Fires along with optional delays.

Load a DumpsterFire Configuration: Users can load a previously saved DumpsterFire configuration from a JSON file.

Ignite a DumpsterFire: Once a DumpsterFire is created or loaded, users can ignite it, and the Fires will be executed sequentially with optional delays between them.

## Disclaimer

The DumpsterFire Toolset is a demonstration script and should be used responsibly. The authors are not responsible for any misuse or damage caused by this toolset. Use it at your own risk.
