# Steno :loop:

[![GitHub Super-Linter](https://github.com/aloner-pro/Steno/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Ultimate Steganography software:superhero:

The do all steganography application.:grin:<br>
**Formats Supported-**

- Images
- Audio
- Text
- ~~Video~~ _To be supported in future version_

> This is an important application especially in today's world.<br>
> We need to hide the messages rather than only encrypting them.

## Features

- Hide your private messages in images, audio & text files.
- Forgot password in case you forget. <br>
  (Click on the _3 dots_ in main window to know more)
- Access info about any button just by hovering on it.

![homescreen](https://github.com/aloner-pro/Steno/blob/master/images/img.png?raw=true)

Using those those _3 dots_ present in topright of the above window, user can create an account in case they forget the password for their repective hidden messages in files.

## Other Notes

All modules are standard modules of **batteries included** python. Then use the `main.py`.
**Having `Cascadia Code` font makes the GUI look best.**
Rest the GUI is quite explanatory so hope you don't have any problem using this.
In audio steganography only `.wav` files are supported presently. In images are formats are supported.

## Roadmap

- Enabling encryption of data

- Adding video support

## Installation Instruction

```
# Your global Python installation needs to have pipenv
pip install pipenv

# Clone the repo
git clone https://github.com/aloner-pro/Steno

# Change directories into the project
cd Steno

# [developer only] If you are developer you need to install dependencies for dev
pipenv install --dev

# If you're not a developer just install required dependencies like this
pipenv install

# Activate the Pipenv shell (aka tell your terminal/whatever to use dependencies from the env in this project)
pipenv shell

# Start the program
python -m main.py
```

## Steganography is not Cryptography ! :confused:

If you are getting confused between _Steganography_ & _Cryptography_. Then see this -

#### Cryptography

**If** `you = wms` **then** `Qcaapgrw gq gknmprylr` **= ?**<br>
_Can you guess the answer?_<br>
Here we have `key = -2` i.e. if we go 2 alphabets behind `y` you get
`w` and similarly if you go 2 alphabets behind `o` we get `m` and similarly 2 alphabets behind `u` gives us `s`. Therefore `you = wms`. <br>
So now you may have got the answer which is `Security is important`.

> Note: The cryptography algorithms are much advanced now.

#### Steganography

So now that you know what is cryptography so lets know what is _Steganography_.<br>
**If** `____=____` **then** `______=______` **?**<br>
_Confused ?_<br>
Here you won't be able to even sense the presence of data. Leave alone knowing what
is the data. That's why it is called hiding data in plain sight. There are some applications which
may detect the presence of hidden data. CIA obviously has it <emoji><br>
Generally at professional level the data hidden is encrypted first. So _steganography_ and _cryptography_ are not
mutually exclusive to each other.

> Knowledge fact: Jeff Bezos's mobile was hacked by hiding malicious code in a media
> file which on getting downloaded sent the host device's control to the hacker.

## License

[MIT](https://choosealicense.com/licenses/mit/)
