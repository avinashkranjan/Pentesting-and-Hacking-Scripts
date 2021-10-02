#!/bin/bash

# Ensure we are being ran as root
if [ $(id -u) -ne 0 ]; then
	echo "This script must be ran as root"
	exit 1
fi

# Update repos
apt-get update 

if [[ -n $(cat /etc/os-release |grep kali) ]]
then
	apt-get install libservlet3.0-java 
	wget http://ftp.us.debian.org/debian/pool/main/j/jetty8/libjetty8-java_8.1.16-4_all.deb
	dpkg -i libjetty8-java_8.1.16-4_all.deb
	#installs i2p and other dependencies
	apt-get install libecj-java libgetopt-java libservlet3.0-java glassfish-javaee ttf-dejavu 
	# resolves anything else in a broken state
	apt-get -f install 
fi

# install dependencies, just in case
apt-get install -y secure-delete

# Configure and install the .deb
# Build the deb package
dpkg-deb -b kali-rambo-deb-src/ kali-rambo.deb 
# this will automatically install the required packages
dpkg -i kali-rambo.deb || (apt-get -f install && dpkg -i kali-rambo.deb) 

exit 0
