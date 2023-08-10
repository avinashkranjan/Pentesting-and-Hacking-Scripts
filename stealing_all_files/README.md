<p align="center">
  <img src="img/logo.png" alt="Steal all files">
  <h6>Created by   BindusreeKalivarapu</h6>
</p>

Steal all files is a cybersecurity tool that has been designed with the purpose of stealing all the information and the files of a computer using an USB device.

> Can you imagine stealing all the information from someone by simply pluging an USB device
> In his computer? I can, in fact I have just developed the tool for doing it!

### Setting up the tool

This tool has been created for running it from an usb device. The idea is that you simply plug the usb device and pum! You have just stolen all the files and all the information from that computer...

But for doing that, you'll have to **setup the usb device**. Once you set up an usb device, you could start this tool.

#### Formating the usb

The first thing we have to do is to format the USB device, for doing so you can connect it and then `right click > format` in windows and most Unix systems. If you use Unix and you want to format it from the terminal, you can use:

```shell
# Locate the usb device that has to be formatted
df
# The route of the usb may be something as: /dev/sdb1
# Umount that usb device using sudo
sudo umount <route to the device>
# Format it
sudo mkfs.vfat <route to the device>
# Verify if the usb device has been formatted
sudo fsck <route to the device>
# This should display something like:
# /route-to-the-usb 0 files, 1/n clusters
```

#### Clonning the repository to the USB device

Once you have formatted the usb device, you should move inside it and then clone this repository

```shell
# INSIDE THE USB
# Using git (you can use other scm system)
git clone https://github.com/Kalivarapubindusree/Pentesting-and-Hacking-Scripts.git
```

Now you should move all the files from the repo to the root of the USB. In Unix systems you can use:

```
# Move all the files from the repo to the root of the usb
cd steal-all-files/
# Remove the git folder
rm -rf .git
# Move the files to the root
mv * ../
```

#### Generating the executables

Now we have to generate the executables of the script. If you want to use the tool in unix systems I've developed a small script that may help you, you can run

```shell
# FROM THE ROOT OF THE USB
sh .scripts/makeunix.sh
```

And this will setup all the executables needed using pyinstaller.

If you are using windows, I haven't tested the executables yet, but this line should work:

```shell
pyinstaller script.py --onefile --noconsole
```

And then you should remove the `build/` folder and move the `.exe` file from the `dist` folder to the root of the usb device. Then you can remove the `dist/` folder.

**After doing all this steps, you already can use your usb device, simply plug it to a computer and in a couple of minutes you'll have a ** `.zip` ** folder in the usb device called** `name-of-the-computer.zip` **where you'll find all the files of that computer.**

### Use with the interpreter

If you want to run the script **without using an USB device** (using the Python interpreter), you can type the following commands:

```shell
# Clone the repository to your computer
git clone https://github.com/Kalivarapubindusree/Pentesting-and-Hacking-Scripts.git
# Move inside the repository
cd steal-all-files
# Install the requirements (use pip3 if wanted)
pip install -r requirements.txt
# Execute the script
python script.py [options]
```

And you can use the following options:

```
-h: Displays help about the app
-l: Displays the license of the app
-p "path": The path to steal the files from (by default the root path of the system)
-o "output": The name of the output file, by default it's the name of the path
-rw: Removes writting permissions
```

### Testing

This project uses a single unit testing file, for executing it you can use:

```shell
python test_script.py
```

###### Note: If you have more than one version of Python, use Python3

### Credits and License

This program has been created by **Bindusreekalivarapu**

The project has been created **just for eductational purposes**, you can read the whole license of the project in [this file](LICENSE) or by using the `-l` flag when running the application.

```shell
python script.py -l # Displays the License of the application
```
