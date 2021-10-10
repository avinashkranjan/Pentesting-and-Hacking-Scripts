#!/bin/bash

##recovery starts here

recovery() {

mkdir -p /root/result/lostfiles
photorec /d /root/result/lostfiles

user=`ps aux | grep gnome-session | grep -v grep | head -1 | cut -d " " -f1`
mkdir "/home/$user/recovered_output"
mkdir "/home/$user/recovered_output/Debians"
mkdir "/home/$user/recovered_output/rpms"
mkdir "/home/$user/recovered_output/conf_files"
mkdir "/home/$user/recovered_output/exe"
mkdir "/home/$user/recovered_output/binaries"
mkdir "/home/$user/recovered_output/Docs"
mkdir "/home/$user/recovered_output/Pdfs"
mkdir "/home/$user/recovered_output/Mbox"
mkdir "/home/$user/recovered_output/Images"
mkdir "/home/$user/recovered_output/Videos"
mkdir "/home/$user/recovered_output/Sound"
mkdir "/home/$user/recovered_output/ISO"
mkdir "/home/$user/recovered_output/Excel"
mkdir "/home/$user/recovered_output/Presentation"
mkdir "/home/$user/recovered_output/Web_Files"
mkdir "/home/$user/recovered_output/Archives"
mkdir "/home/$user/recovered_output/Others"

#Recovered data
find /root/result/ -name "*.doc"    -type f  -exec mv {} "/home/$user/recovered_output/Docs/" \;
find /root/result/ -name "*.docx"   -type f  -exec mv {} "/home/$user/recovered_output/Docs/" \;
find /root/result/ -name "*.odt"    -type f  -exec mv {} "/home/$user/recovered_output/Docs/" \;
find /root/result/ -name "*.pdf"    -type f  -exec mv {} "/home/$user/recovered_output/Pdfs/" \;
find /root/result/ -name "*.mbox"   -type f  -exec mv {} "/home/$user/recovered_output/Mbox/"  \;
find /root/result/ -name "*.png"    -type f  -exec mv {} "/home/$user/recovered_output/Images/" \;
find /root/result/ -name "*.jpg"    -type f  -exec mv {} "/home/$user/recovered_output/Images/" \;
find /root/result/ -name "*.jpeg"   -type f  -exec mv {} "/home/$user/recovered_output/Images/" \;
find /root/result/ -name "*.gif"    -type f  -exec mv {} "/home/$user/recovered_output/Images/" \;
find /root/result/ -name "*.avi"    -type f  -exec mv {} "/home/$user/recovered_output/Videos/" \;
find /root/result/ -name "*.mpeg"   -type f  -exec mv {} "/home/$user/recovered_output/Videos/" \;
find /root/result/ -name "*.mp4"    -type f  -exec mv {} "/home/$user/recovered_output/Videos/" \;
find /root/result/ -name "*.mkv"    -type f  -exec mv {} "/home/$user/recovered_output/Videos/" \;
find /root/result/ -name "*.webm"   -type f  -exec mv {} "/home/$user/recovered_output/Videos/" \;
find /root/result/ -name "*.wmv"    -type f  -exec mv {} "/home/$user/recovered_output/Videos/" \;
find /root/result/ -name "*.flv"    -type f  -exec mv {} "/home/$user/recovered_output/Videos/" \;
find /root/result/ -name "*.mp3"    -type f  -exec mv {} "/home/$user/recovered_output/Sound/" \;
find /root/result/ -name "*.wav"    -type f  -exec mv {} "/home/$user/recovered_output/Sound/" \;
find /root/result/ -name "*.deb"    -type f  -exec mv {} "/home/$user/recovered_output/Debians/" \;
find /root/result/ -name "*.bin"    -type f  -exec mv {} "/home/$user/recovered_output/binaries/" \;
find /root/result/ -name "*.exe"    -type f  -exec mv {} "/home/$user/recovered_output/exe/" \;
find /root/result/ -name "*.rpm"    -type f  -exec mv {} "/home/$user/recovered_output/rpms/" \;
find /root/result/ -name "*.conf"    -type f  -exec mv {} "/home/$user/recovered_output/conf_files" \;
find /root/result/ -name "*.iso"    -type f  -exec mv {} "/home/$user/recovered_output/ISO/" \;
find /root/result/ -name "*.xls"    -type f  -exec mv {} "/home/$user/recovered_output/Excel/" \;
find /root/result/ -name "*.xlsx"   -type f  -exec mv {} "/home/$user/recovered_output/Excel/" \;
find /root/result/ -name "*.csv"    -type f  -exec mv {} "/home/$user/recovered_output/Excel/" \;
find /root/result/ -name "*.ods"    -type f  -exec mv {} "/home/$user/recovered_output/Excel/" \;
find /root/result/ -name "*.ppt"    -type f  -exec mv {} "/home/$user/recovered_output/Presentation/" \;
find /root/result/ -name "*.pptx"   -type f  -exec mv {} "/home/$user/recovered_output/Presentation/" \;
find /root/result/ -name "*.odp"    -type f  -exec mv {} "/home/$user/recovered_output/Presentation/" \;
find /root/result/ -name "*.html"   -type f  -exec mv {} "/home/$user/recovered_output/Web_Files/" \;
find /root/result/ -name "*.htm"    -type f  -exec mv {} "/home/$user/recovered_output/Web_Files/" \;
find /root/result/ -name "*.jsp"    -type f  -exec mv {} "/home/$user/recovered_output/Web_Files/" \;
find /root/result/ -name "*.xml"    -type f  -exec mv {} "/home/$user/recovered_output/Web_Files/" \;
find /root/result/ -name "*.css"    -type f  -exec mv {} "/home/$user/recovered_output/Web_Files/" \;
find /root/result/ -name "*.js"     -type f  -exec mv {} "/home/$user/recovered_output/Web_Files/" \;
find /root/result/ -name "*.zip"    -type f  -exec mv {} "/home/$user/recovered_output/Archives/" \;
find /root/result/ -name "*.tar"    -type f  -exec mv {} "/home/$user/recovered_output/Archives/" \;
find /root/result/ -name "*.rar"    -type f  -exec mv {} "/home/$user/recovered_output/Archives/" \;
find /root/result/ -name "*.gzip"   -type f  -exec mv {} "/home/$user/recovered_output/Archives/" \;
find /root/result/ -name "*.tar.gz" -type f  -exec mv {} "/home/$user/recovered_output/Archives/" \;
find /root/result/ -name "*.7z"     -type f  -exec mv {} "/home/$user/recovered_output/Archives/" \;
find /root/result/ -name "*.bz"     -type f  -exec mv {} "/home/$user/recovered_output/Archives/" \;
find /root/result/ -name "*.bz2"    -type f  -exec mv {} "/home/$user/recovered_output/Archives" \;
find /root/result/ -name "*.*"      -type f  -exec mv {} "/home/$user/recovered_output/Others/" \;
chown -R $user "/home/$user/recovered_output"

echo "Data has been recovered successfully in recovered_output folder in your home directory."
exit 0
}


##loading animation so that you dont get bored

reco_loading() {
  mypid=$!
  loadingText=$1

  echo -ne "$loadingText\r"

  while kill -0 $mypid 2>/dev/null; do
    echo -ne "$loadingTextr e \r"
    sleep 0.5
    echo -ne "$loadingText e c \r"
    sleep 0.5
    echo -ne "$loadingText e c o \r"
    sleep 0.5
    echo -ne "$loadingText e c o v \r"
    sleep 0.5
    echo -ne "$loadingText e c o v e \r"
    sleep 0.5
    echo -ne "$loadingText e c o v e r \r"
    sleep 0.5
    echo -ne "$loadingText e c o v e r y \r"
    sleep 0.5
    echo -ne "\r\033[K"
    echo -ne "$loadingText\r"
    sleep 0.5
  done

  echo "$loadingText...done"
}


##main

recovery & reco_loading "r"