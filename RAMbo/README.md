# kali-rambo

**Shh! RAMbo is Pandora**

ParrotSec's stealth, ported to work with Kali Linux.

## How to use this repo

This repo contains the sources of pandora packages from ParrotSec.

This repo can be compiled into a deb package to correctly install it on a Kali system.

The easiest way to get this working is to just run the installer. See the installation section for further info.

NOTE: This may work with any debian/ubuntu system, but this has only been tested to work on a kali-rolling amd64 system

## Usage

### Pandora

Pandora automatically overwrites the RAM when the system is shutting down. Pandora can also be ran manually:

```bash
pandora bomb
```

NOTE: This will clear the entire system cache, including active SSH tunnels or sessions.

## Installation

This package comes with an installer that makes things extremely easy:

```bash
./installer.sh
```

Once the installer is complete, you will be able to use both the anonsurf and pandora modules.

## Forked from

https://github.com/Und3rf10w/kali-anonsurf
