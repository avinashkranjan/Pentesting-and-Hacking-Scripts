#!/bin/bash

if [ "$USER" = 'root' ]
    then       
        echo "User is good when root 0.0"
    else
        echo "User is not root -.-"
        echo "Run as root!"
        exit 1
fi


# Installing Testdisk
testdisk /version >> /dev/null
if [ "$?" = 0 ]
then
    echo "Testdisk already installed"
else

    read -p "Do you wish to install Testdisk? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1
    echo "Installing Testdisk..."
    
    if [[ ! -z $(which apt-get) ]]; then
    #Debian
        sudo apt-get update 
        sudo apt-get upgrade    
        sudo apt-get --force-yes -y install testdisk
    elif [[ ! -z $(which yum) ]]; then
    #RHEL/CentOS 8
        sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
        sudo yum update
        sudo yum install testdisk -y
    elif [[ ! -z $(which dnf) ]]; then
    #Fedora
        sudo dnf install testdisk -y
    elif [[ ! -z $(which pkg) ]]; then
    #Arch
        sudo pacman -S testdisk
    else
        echo "Failed to get a package manager! Get it manually." 
        echo "https://www.cgsecurity.org/wiki/TestDisk"
        exit 1
    fi

    echo "Testdisk installed successfully"
                  
 fi


echo "Starting recovery"

sudo bash recover.sh
