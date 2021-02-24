#!/usr/bin/python3

# Nightcall - Automated Enumeration Scanner
# Lance Pendergrass <lance.pendergrass@walmart.com>

# Copyright (c) 2017-present, Walmart Inc.
#  This source code is licensed under the Apache 2.0 license found
#  in the LICENSE.md file in the root directory of this source tree.

# Designed for use on Kali Linux. Additional Prereqs:
#  apt-get install python3-pip masscan nfs-common xvfb -yqq
#  pip3 install tqdm; or if offline: pip3 install tqdm-{version}.whl -f ./ --no-index

# todo: better sanity checks, documentation

VERSION = "1.0.5"

import sys, signal, time, logging, logging.handlers, subprocess, argparse, re, ipaddress
import xml.etree.ElementTree as etree
from os import path
from random import shuffle
from collections import OrderedDict
from multiprocessing.dummy import Pool
# from tqdm import tqdm # exception handler in stub, could be improved

# [ CONSTANTS ]
CONC_TASKS = 4 # consider multiprocessing.cpu_count()
TASK_TIMEOUT = 3600
DISCOVERY_WAIT = 60 # If hosts aren't discovered over slow link, try increasing this

# Jobs queued by host, randomizing could distribute load
RANDOMIZE_JOBS = False

# WORDLISTS - Chosen for size and simplicity. Recommended to replace with tailored list
USER_DICT = "/usr/share/ncrack/minimal.usr"
PASS_DICT = "/usr/share/metasploit-framework/data/wordlists/unix_passwords.txt"
SNMP_DICT = "/usr/share/metasploit-framework/data/wordlists/snmp_default_pass.txt"
HTTP_FUZZ_LIST_REG = "/usr/share/dirb/wordlists/common.txt"
HTTP_FUZZ_LIST_LRG = "/usr/share/dirb/wordlists/big.txt"

# Host counts exceeding this value will receive top 1k tcp scans. full port if less
NMAP_LARGE_HOST_COUNT = 100

# LOGGING CONTROLS
LOG_LEVEL = logging.DEBUG # logging.INFO
LOG_DATEFMT = "%Y-%b-%d_%H:%M:%S"
LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s\n"
LOG_FILENAME = "Nightcall_{}.log".format(time.strftime(LOG_DATEFMT).replace(":","-"))


# [ COMMAND STRINGS ]

# Determine if Masscan is available on the system (todo: remove once available out-of-the-box)
MASSCAN_AVAILABLE = False if subprocess.getstatusoutput("which masscan")[0] else True

# Masscan Strings
MASSCAN_RATE = "2000"
MASSCAN_RETRIES = "2"
MASSCAN_PORTS = "21,22,23,25,26,53,80,81,110-111,113,135,139,143,179,199,443,445,465," \
	"514-515,548,554,587,646,993,995,1025,1026,1027,1033,1035,1443,1720,1723,1884,1885," \
	"1886,1981,1982,1983,1987,1988,1989,1996,2000,2001,2002,2065,2067,2115,3306,3389,4000," \
	"4001,4002,5060,5061,5666,5900,6000,6001,6002,7767,7768,8000,8008,8080,8443,8888,9000," \
	"9001,9002,10000,21002,21010,32768,49152,49154,49338,51003,51004,54138,U:53,U:69,U:111," \
   "U:123,U:135,U:137,U:161,U:500,U:514,U:520,U:623,U:1033,U:1434,U:2049,U:4500,U:5353"

MASSCAN = "masscan {targets} -p" + MASSCAN_PORTS  + " --ping --rate " + MASSCAN_RATE + " --retries " \
   + MASSCAN_RETRIES + " --wait 10 {iface}--open-only --banners -oB masscan.bin"

MASSCAN_CONVERT = "masscan --readscan masscan.bin {type} masscan.{ext}"
MASSCAN_NEW_CONVERT = "masscan --readscan masscan.bin -oL masscan.txt && " \
   "awk \'{print $4}\' masscan.txt | sort -Vu | sed \'/^$/d\' > live_hosts.txt"

# NSEs were selected for speed, safety, and usefullness. Nmap config can be adjusted below for defaults.
NSE_SCRIPTS_TCP = "ajp-headers,amqp-info,banner,cassandra-info,dns-zone-transfer," \
   "ftp-anon,ftp-syst,http-apache-server-status,http-backup-finder,http-config-backup," \
   "http-devframework,http-method-tamper,http-methods,http-open-proxy,http-passwd," \
   "http-robots.txt,http-shellshock,http-sitemap-generator,http-title,http-vuln-cve2017-5638," \
   "http-vuln-cve2017-5689,http-webdav-scan,imap-capabilities,iscsi-info,jdwp-info," \
   "ldap-rootdse,ldap-search, mongodb-databases,mongodb-info,mqtt-subscribe,ms-sql-info," \
   "mysql-empty-password,mysql-info,nfs-showmount,pop3-capabilities,redis-info," \
   "rmi-vuln-classloader,rsync-list-modules,sip-methods,smb-enum-domains,smb-enum-shares," \
   "smb-enum-users,smb-os-discovery,smb-vuln-ms17-010,smtp-commands,ssl-heartbleed," \
   "ssl-known-key,supermicro-ipmi-conf,tls-ticketbleed,unusual-port,x11-access"

NSE_ARGS = "http-put.url=\"/\",http-put.file=\"{put_file}\",cmd=\"{cmd}\"," \
   "httpspider.maxpagecount={spid}".format(put_file="/etc/timezone",cmd="whoami",spid=100)

NMAP_TCP = "nmap -v0 -n -Pn -O -sSV {ports} --script \'" + NSE_SCRIPTS_TCP + "\'" \
   " --script-args \'" + NSE_ARGS + "\' --version-intensity 5 --max-retries 2" \
   " --max-rtt-timeout 300ms --max-scan-delay 300ms --host-timeout " + \
   str(int(TASK_TIMEOUT/60)) + "m --open -oA {host}.tcp {iface}{host}"

NMAP_UDP_PORTS = "53,67-69,80,88,111,123,135,137-139,161,389,445,500,514,520,623,1033,1433," \
   "1434,1900,2049,4500,5060,5353,49152"

NSE_SCRIPTS_UDP = "banner,dns-nsid,dns-recursion,dns-service-discovery,ipmi-cipher-zero," \
   "ipmi-version,ms-sql-info,nbstat,nfs-showmount,ntp-info,sip-methods,smb-enum-domains," \
   "smb-enum-shares,smb-enum-users,smb-os-discovery,snmp-sysdescr,snmp-win32-shares," \
   "snmp-win32-software,snmp-win32-users,unusual-port,upnp-info" # snmp-netstat

NMAP_UDP = "nmap -v0 -n -Pn -O -sUV -p " + NMAP_UDP_PORTS + " --script \'" + NSE_SCRIPTS_UDP + \
   "\' --version-intensity 5 --max-retries 2 --max-rtt-timeout 300ms --max-scan-delay 300ms " \
   "--host-timeout " + str(int(TASK_TIMEOUT/60)) + "m --open -oA {host}.udp {iface}{host}"

# HTTP Tools
WAF_SCAN = "wafw00f -v {scheme}://{host}:{port} > {host}-{port}.{scheme}.waf 2>&1"

NIKTO_SCAN = "nikto -nolookup -nointeractive -timeout 5 -evasion 1 {ssl}-h " \
   "{host}:{port} > {host}-{port}.{scheme}.nikto 2>&1"

WFUZZ_SCAN = "wfuzz -c -w {fuzzlist} -L -R 2 --hc 302,400,401,403,404 -f " \
   "{host}-{port}.{scheme}.wfuzz {scheme}://{host}:{port}/FUZZ 1>/dev/null 2>&1"

# DIRB_WORDLISTS = "/usr/share/wordlists/dirb/common.txt,/usr/share/seclists/Discovery/Web_Content/quickhits.txt"
# DIRB_SCAN = "dirb {scheme}://{host}:{port} " + DIRB_WORDLISTS + " -S -f -w -N 302 2>&1 " \
#	"| grep -v -e \'CODE:302\' -e \'CODE:400\' -e \'CODE:403\' > {host}-{port}.{scheme}.dirb"

WW_SCAN = "whatweb -vv {scheme}://{host}:{port} > {host}-{port}.{scheme}.whatweb 2>&1"

WP_SCAN = "wpscan -u {scheme}://{host}:{port} --follow-redirection --batch --no-color > " \
	"{host}-{port}.{scheme}.wpscan 2>&1"

JOOM_SCAN = "joomscan -u {scheme}://{host}:{port} > {host}-{port}.{scheme}.joomscan 2>&1"

HTTP_IMG = "xvfb-run --server-args=\"-screen 0, 1280x1200x24\" cutycapt --insecure " \
   "--url={scheme}://{host}:{port} --out={host}-{port}.png 2>/dev/null"

# MISC Tools
HOSTNAME_FILE = "hostnames.txt"
HOSTNAME_ENUM = "host {host}"

ENUM4LINUX_AVAILABLE = False if subprocess.getstatusoutput("enum4linux")[0] else True
ENUM_SCAN = "enum4linux -a -l -d -M {host} > smb-{host}.misc.enum 2>&1"

SSL_SCAN = "sslscan --no-failed --no-colour {host}:{port} > {host}-{port}.misc.ssl 2>&1"

DNS_SCAN = "dnsrecon {dnstcp}-a -n {host} -d $(host {hosttcp}{host} {host} | grep \"domain.*pointer\" " \
   "| tail -n1 | rev | cut -d. -f2,3 | rev) > {host}.misc.dns 2>/dev/null"

DNS_TCP = "--tcp "
HOST_TCP = "-T "

RDNS_SCAN = "dnsrecon {dnstcp}-n {host} -r {host}/24 > {host}.misc.rdns 2>&1"

NFS_ENUM = "showmount -e {host} > {host}.misc.nfs 2>&1"

IKE_SCAN = "ike-scan -A -M -P -n esttest {host} > {host}.misc.ike 2>&1"
IKE2_SCAN = "ike-scan -2 -M {host} >> {host}.misc.ike 2>&1"
NAT_IKE_SCAN = "ike-scan -A -M -P -n esttest --nat-t {host} > {host}.misc.nat-ike 2>&1"
NAT_IKE2_SCAN = "ike-scan -2 -M --nat-t {host} >> {host}.misc.nat-ike 2>&1"

# Brute
AUTH_BRUTE = "medusa -h {host} -U " + USER_DICT + " -P " + PASS_DICT + " -M {prot} -f" \
   "{ssl} -e ns -t " + str(CONC_TASKS*2) + " -n {port} > {host}.{prot}.brute 2>&1"

# Metasploit Strings
MSF_STANDALONE = "msfconsole -q -x \"use {module}; set THREADS 6; set RHOSTS {host}; " \
	"set RPORT {port}; set SSL {ssl}; run; exit\" -o {host}-{port}.msf.{ext}"

MSF_HTTP_CRAWLER = "auxiliary/scanner/http/crawler"
MSF_HTTP_LIST = "auxiliary/scanner/http/dir_listing"
MSF_HTTP_PUT = "auxiliary/scanner/http/http_put"
MSF_HTTP_HOST = "auxiliary/scanner/http/host_header_injection"
MSF_JAVA_RMI = "auxiliary/scanner/misc/java_rmi_server"
MSF_JBOSS = "auxiliary/scanner/http/jboss_vulnscan"
MSF_TOMCAT = "auxiliary/scanner/http/tomcat_mgr_login"
MSF_CCS = "auxiliary/scanner/ssl/openssl_ccs"
MSF_IPMI_VER = "auxiliary/scanner/ipmi/ipmi_version"
MSF_IPMI_HASH = "auxiliary/scanner/ipmi/ipmi_dumphashes"
MSF_IPMI_CIPH = "auxiliary/scanner/ipmi/ipmi_cipher_zero"
MSF_IPMI_SMT = "auxiliary/scanner/http/smt_ipmi_49152_exposure"
MSF_TFTP_BRUTE = "auxiliary/scanner/tftp/tftpbrute"

MSF_SSH_ENUM = "msfconsole -q -x \"use auxiliary/scanner/ssh/ssh_enumusers; set RHOSTS " \
	"{host}; set RPORT {port}; set USER_FILE " + USER_DICT + "; set THREADS 6; run; exit\"" \
	" -o {host}-{port}.msf.ssh_enum"
MSF_SMTP_ENUM = "msfconsole -q -x \"use auxiliary/scanner/smtp/smtp_enum; set RHOSTS " \
	"{host}; set RPORT {port}; set USER_FILE " + USER_DICT + "; set THREADS 6; " \
	"run; exit\" -o {host}-{port}.msf.smtp_enum"
MSF_SNMP_LOGIN = "msfconsole -q -x \"use auxiliary/scanner/snmp/snmp_login; set RHOSTS " \
	"{host}; set RPORT {port}; set VERSION all; set VERBOSE false; set PASS_FILE " + \
	SNMP_DICT + "; set THREADS 6; run; exit\" -o {host}-{port}.msf.snmp_login"

# DEPRECATED
#MSF_HTTP_TRAV = "auxiliary/scanner/http/http_traversal" # handled by nse http-passwd
#MSF_WEBDAV = "auxiliary/scanner/http/webdav_scanner" # handled by nse http-webdav-scan
#MSF_SHELLSHOCK = "auxiliary/scanner/http/apache_mod_cgi_bash_env" # nse http-shellshock
#MSF_HEARTBLEED = "auxiliary/scanner/ssl/openssl_heartbleed" # handled by nse ssl-heartbleed
#NS_SCAN = "nslookup {host} > {host}.ns 2>&1" # handled by HOSTNAME_ENUM
#SMTP_SCAN = "smtp-user-enum -M RCPT -U " + USER_DICT + " -t {host} -p {port} > " \
#	"{host}-{port}.misc.smtp 2>&1" # handled by MSF_SMTP_ENUM
#SNMP_SCAN = "onesixtyone -c {} {host} > {host}.snmp 2>&1" # handled by MSF_SNMP_LOGIN

# Eyewitness substituted for cutycapt
#EYEWITNESS_AVAILABLE = False if subprocess.getstatusoutput("which eyewitness")[0] else True
#EYEWITNESS_TARGETS = "eyewitness.urls"
#EYEWITNESS_ADD_URL = "echo \'{scheme}://{host}:{port}\' >> " + EYEWITNESS_TARGETS
#EYEWITNESS_SCAN = "echo y | eyewitness --web --no-prompt -f $(pwd)/" + EYEWITNESS_TARGETS + \
#        " -d $(pwd)/images 1>> eyewitness.log 2>&1"

# Summary
SUMMARY_NMAP = "grep -rH -e \'/tcp\' -e \'/udp\' -e \'|.*OS:\' -e \'Running:\' " \
      "-e \'OS details:\' . --include=\"*.nmap\" | grep -v -e filtered -e tcpwrapped " \
      "> nmap.summary.txt 2>/dev/null"
SUMMARY_MSF = "grep -H \'[+]\' msf/*.msf.* > msf.summary.txt 2>/dev/null"
SUMMARY_HTTP = "for i in $(grep -L ERROR http/*.whatweb); do grep -H Summary $i; done" \
   " > http.summary.txt 2>/dev/null"
SUMMARY_BRUTE = "grep -H SUCCESS brute/*.brute > brute.summary.txt 2>/dev/null"
SUMMARY_CLEANUP = "find . -maxdepth 2 -type f -name \"*summary*\" -size 0 -delete"

# [ MAIN ENTRY ]

def main(args):
   
   hosts = importHosts(args.target_file, args.single_address)
   
   # Host discovery and port enumeration
   if not args.skip_portscans:

      iface_cfg = interfaceConfig(args.iface)
      hosts = discoverHosts(iface_cfg, hosts)
      if len(hosts):
         
         if not args.disable_resolve:
            resolveHostnames(hosts.keys())

         # Top 1k tcp ports if large test, else full port
         port_selection = "" if len(hosts) > NMAP_LARGE_HOST_COUNT else "-p-"
 
         jobs = []
         for target in hosts:
            jobs.append(NMAP_TCP.format(ports=port_selection, iface=iface_cfg, host=target))
            jobs.append(NMAP_UDP.format(iface=iface_cfg, host=target))
         
         printAndLog("Initiating host enumeration (this may take a while)...")
         processJobs(jobs, CONC_TASKS, True)
      else:
         sys.exit(0)
   else:
      expandCidrs(hosts)
      printAndLog("Skipping host enumeration...\n")
      
   # Import Nmap data
   xml_files = subprocess.getoutput("ls xml/ -I masscan.xml 2>/dev/null").splitlines()
   
   print("\t[ Importing port data from {} file(s) ]\n".format(len(xml_files)))
   logging.info("Importing xml data from...\n{}".format(str(xml_files)))
   
   for file in xml_files:
      importXML("xml/" + file, hosts)

   # Remove empty host entries
   hosts = OrderedDict([(k,v) for k,v in hosts.items() if bool(v)])
   
   logging.debug("Host data imported...\n{}".format(hosts))
   
   large_test = len(hosts) > NMAP_LARGE_HOST_COUNT
   http_fuzz_list = HTTP_FUZZ_LIST_REG if large_test else HTTP_FUZZ_LIST_LRG

   # determine follow up scans based on imported data
   jobs = []
   for scanHost, scanPorts in hosts.items():
      for scanPort in scanPorts.values() if scanPorts else []:

         # SSL
         if scanPort["ssl"]:
            jobs.append(SSL_SCAN.format(host=scanHost, port=scanPort["portid"]))

         # HTTP
         if (scanPort["portid"] in ["80","443","8080","8443"] or \
            any("http" in p for p in [scanPort["name"], scanPort["product"]])) and not \
            any(exclude in scanPort["product"] for exclude in ["httpapi", "rpc"]):
            
            ssl_port = scanPort["ssl"] or scanPort["portid"] in ["443","8443"]
            web_scheme = "https" if ssl_port else "http"
            
            jobs.append(buildMSF(MSF_HTTP_LIST, scanHost, scanPort["portid"], ssl_port))
            jobs.append(buildMSF(MSF_HTTP_PUT, scanHost, scanPort["portid"], ssl_port))
            jobs.append(buildMSF(MSF_HTTP_HOST, scanHost, scanPort["portid"], ssl_port))
            jobs.append(buildMSF(MSF_CCS, scanHost, scanPort["portid"], ssl_port))
            jobs.append(WW_SCAN.format(scheme=web_scheme, host=scanHost, port=scanPort["portid"]))
            jobs.append(HTTP_IMG.format(scheme=web_scheme, host=scanHost, port=scanPort["portid"]))
            jobs.append(WAF_SCAN.format(scheme=web_scheme, host=scanHost, port=scanPort["portid"]))
               
            # Additional Web Checks
            if args.web:
               jobs.append(buildMSF(MSF_HTTP_CRAWLER, scanHost, scanPort["portid"], ssl_port))
               jobs.append(WFUZZ_SCAN.format(fuzzlist=http_fuzz_list, scheme=web_scheme, host=scanHost, port=scanPort["portid"]))
               jobs.append(NIKTO_SCAN.format(ssl=("-ssl " if ssl_port else ""), 
                  scheme=web_scheme, host=scanHost, port=scanPort["portid"]))
            	
               # CMSs and App Servers - todo: test and extend suport for cms parsing
               if "Wordpress" in scanPort["cms"]:
                  jobs.append(WP_SCAN.format(scheme=web_scheme, host=scanHost, port=scanPort["portid"]))
               elif "Joomla" in scanPort["cms"]:
                  jobs.append(JOOM_SCAN.format(scheme=web_scheme, host=scanHost, port=scanPort["portid"]))
               elif any(x in scanPort["product"] for x in ("Tomcat", "JBoss")):
                  jobs.append(buildMSF(MSF_TOMCAT, scanHost, scanPort["portid"], ssl_port))
                  jobs.append(buildMSF(MSF_JBOSS, scanHost, scanPort["portid"], ssl_port))

         # DNS
         elif scanPort["portid"]=="53":
            tcp = scanPort["prot"] == "tcp"
            jobs.append(RDNS_SCAN.format(dnstcp=DNS_TCP if tcp else "", host=scanHost))
            jobs.append(DNS_SCAN.format(dnstcp=DNS_TCP if tcp else "", hosttcp=HOST_TCP if tcp else "", host=scanHost))

         # SSH
         elif scanPort["portid"]=="22" or scanPort["name"]=="ssh":
            jobs.append(MSF_SSH_ENUM.format(host=scanHost, port=scanPort["portid"]))
         
         # SMB
         elif ENUM4LINUX_AVAILABLE and (scanPort["portid"]=="139" or scanPort["portid"]=="445"):
            jobs.append(ENUM_SCAN.format(host=scanHost))
         
         # SMTP
         elif scanPort["portid"] in ["25","465"] or scanPort["name"]=="smtp":
            jobs.append(MSF_SMTP_ENUM.format(host=scanHost, port=scanPort["portid"]))

         # SNMP
         elif scanPort["portid"]=="161" or scanPort["name"]=="snmp":
            jobs.append(MSF_SNMP_LOGIN.format(host=scanHost, port=scanPort["portid"]))

         # NFS
         elif scanPort["portid"]=="2049" or scanPort["name"]=="nfs":
            jobs.append(NFS_ENUM.format(host=scanHost))

         # JAVA RMI
         elif "rmi" in scanPort["name"]:
            jobs.append(buildMSF(MSF_JAVA_RMI, scanHost, scanPort["portid"]))

         # IKE
         elif scanPort["name"]=="isakmp":
            jobs.append(IKE_SCAN.format(host=scanHost))
            jobs.append(IKE2_SCAN.format(host=scanHost))

         # NAT IKE
         elif scanPort["name"]=="nat-t-ike":
            jobs.append(NAT_IKE_SCAN.format(host=scanHost))
            jobs.append(NAT_IKE2_SCAN.format(host=scanHost))

         # IPMI
         elif scanPort["portid"] == "623" or "rmcp" in scanPort["name"]:
            jobs.append(buildMSF(MSF_IPMI_VER, scanHost, scanPort["portid"]))
            jobs.append(buildMSF(MSF_IPMI_HASH, scanHost, scanPort["portid"]))
            jobs.append(buildMSF(MSF_IPMI_CIPH, scanHost, scanPort["portid"]))

         # IPMI SMT
         elif scanPort["portid"]=="49152":
            jobs.append(buildMSF(MSF_IPMI_SMT, scanHost, scanPort["portid"]))

   printAndLog("Initiating follow up scans...")
   processJobs(jobs, CONC_TASKS, True)

   # Bruting
   if args.brute:
      printAndLog("\t[ Bruteforcing selected ]")
      print("\nThis can take a significant amount of time depending on host count and " \
         "wordlist size. Consider lockouts...")
      jobs = []
      for scanHost, scanPorts in hosts.items():
         for scanPort in scanPorts.values() if scanPorts else []:
            
            # Auth Brute
            if scanPort["name"] in ["ftp", "mssql", "mysql", "rexec", "rlogin", "rsh", 
               "smtp", "ssh", "telnet", "vnc"]:
               jobs.append(AUTH_BRUTE.format(host=scanHost, prot=scanPort["name"], 
                  port=scanPort["portid"], ssl=(" -s" if scanPort["ssl"] else "")))
               
            # TFTP
            elif scanPort["portid"] == "69" or "tftp" in scanPort["name"]:
               jobs.append(buildMSF(MSF_TFTP_BRUTE, scanHost, scanPort["portid"]))
            
      processJobs(jobs, CONC_TASKS, True)

   summarize()
   printAndLog("\t~~ Fin ~~\n")
   sys.exit(0)


# [ UTILITY FUNCTIONS ]

def printAndLog(msg):
   print(msg)
   logging.info(msg)

def buildMSF(scanModule, scanHost, scanPort, scanSSL=False):
   return MSF_STANDALONE.format(module=scanModule, host=scanHost, port=scanPort,
       ssl=scanSSL, ext=scanModule.split("/")[-1])
   
def processJobs(jobs, concurrentTasks, sortOutput=False):
   job_count = len(jobs)
   logging.info("Processing {} job(s) with a concurrency of {}".format(job_count, concurrentTasks))
   
   if RANDOMIZE_JOBS: shuffle(jobs)
   
   pool = Pool(concurrentTasks)
   try:
      job_progress = 0
      for x in tqdm(pool.imap_unordered(worker, jobs), total=len(jobs)):
         job_progress += 1
         logging.info("{} out of {} staged jobs remaining".format(job_count-job_progress, job_count))
      pool.close()
      pool.join()
   except KeyboardInterrupt:
      printAndLog("\nReceived keyboard interrupt. Cleaning up and exiting...")
      pool.terminate()
      cleanup()
      sys.exit(1)
   except SystemExit:
      pool.terminate()
      sys.exit(1)
   if sortOutput: cleanup()
   print("\n")

def worker(cmd):
   logging.info("Executing: {}".format(cmd))
   try:
      proc = subprocess.Popen(cmd, shell=True, universal_newlines=True, stderr=subprocess.PIPE)
      errs = proc.communicate(timeout=TASK_TIMEOUT)[1]
      if proc.returncode != 0 and errs.strip():
         logging.debug("StdErr: {}".format(errs))
   except subprocess.TimeoutExpired as e:
      logging.warning(e)
      subprocess.run(["kill", "-KILL", "-" + str(proc.pid)], stderr=subprocess.DEVNULL)
   logging.debug("Completed: {}".format(cmd))
   return

def summarize():
   printAndLog("Summarizing results...")
   summaries = [SUMMARY_NMAP, SUMMARY_MSF, SUMMARY_HTTP, SUMMARY_BRUTE, SUMMARY_CLEANUP]
   for i in summaries:
      subprocess.run(i, shell=True)
   
def cleanup():
   logging.info("Sorting output...")
   jobs = []
   jobs.append("mkdir -p xml && mv *.xml xml/")
   jobs.append("mkdir -p nmap && mv *.nmap nmap/")
   jobs.append("mkdir -p nmap/gnmap && mv *.gnmap nmap/gnmap/")
   jobs.append("mkdir -p msf && mv *.msf.* msf/")
   jobs.append("mkdir -p misc && mv *.misc.* misc/")
   jobs.append("mkdir -p misc/ssl && mv *.ssl misc/*.ssl -t misc/ssl/")
   jobs.append("mkdir -p http && mv *.http*.* http/")
   jobs.append("mkdir -p images && mv *.png images/ && mv images/ http/")
   jobs.append("mkdir -p brute && mv *.brute http/*.brute -t brute/")
   jobs.append("find . -type d -maxdepth 2 -empty -delete")
   for job in jobs:
      subprocess.run(job, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, shell=True)

def resolveHostnames(hosts):
   printAndLog("Resolving hostnames...\n")
   hostname_file = open(HOSTNAME_FILE, "w")
   for target in hosts:
      result = subprocess.getoutput(HOSTNAME_ENUM.format(host=target))
      if "pointer" in result:
         hostname_file.write(target + "\t" + result.split("pointer",1)[1].strip() + "\n")        
   hostname_file.close()

def importHosts(filename, single_address):
   # import ipaddress, collections.OrderedDict
   hosts = OrderedDict()
   
   if filename != None:
      logging.info("Importing targets from: {}".format(filename))
      with open(filename) as input_file:
         readhosts = input_file.read().splitlines()
   else:
      logging.info("Single address targeted: {}".format(single_address))
      readhosts = [single_address]
   
   for line in readhosts:
      try:
         if "/" in line:
            target = str(ipaddress.ip_network(line.strip()))
         else:
            target = str(ipaddress.ip_address(line.strip()))
         hosts[target] = {}
      except:
         logging.error("Invalid IP Detected: \'{}\'".format(line))

   if not hosts:
      printAndLog("No valid IP addresses targeted...\n")
      sys.exit(1)
   
   return hosts

def expandCidrs(hosts):
   # import ipaddress, collectionsOrderedDict
   cidrs = []
   for address in hosts.keys():
       if "/" in address:
            cidrs.append(address)
   for cidr in cidrs:
      del hosts[cidr]
      for host in [str(ip) for ip in ipaddress.ip_network(cidr)]:
         hosts[host] = dict() 

# interface configuration for masscan and nmap
def interfaceConfig(iface):
   return "-e {} ".format(iface) if iface != None else ""

def discoverHosts(iface_cfg, targets):
   # import collections.OrderedDict

   if len(targets):
      
      printAndLog("Initiating host discovery...")
      
      hostCount = get_host_count(targets)
      estScanTime = estimate_host_discovery_time()
      logging.debug(
         "Approximated per host discover at: {}".format(str(round(estScanTime, 4)) + 's')
      )
   
      try:
         mass_string = MASSCAN.format(targets=" ".join(targets), iface=iface_cfg)
 
         logging.info("Executing: {}".format(mass_string))
         
         # Spawn masscan subprocess
         p = subprocess.Popen(mass_string, shell=True, 
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
   
         # Fake progress bar based on scan estimation
         for _ in tqdm(range(hostCount)): time.sleep(estScanTime)
      
         # Wait for scan to complete, timeout after time has expired
         print("Waiting for results to return...\n")
         p.wait(DISCOVERY_WAIT + estScanTime * hostCount)
   
      except Exception as e: logging.error(e)
      
      subprocess.run(MASSCAN_NEW_CONVERT, shell=True, 
         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
   
   live_hosts = importHosts("live_hosts.txt", None)
   subprocess.run("rm live_hosts.txt", shell=True, stderr=subprocess.DEVNULL)
   
   print("\t[ Discovered {} host(s) ]\n".format(len(live_hosts)))
   logging.info("{} Hosts found...\n{}".format(len(live_hosts), list(live_hosts))) 
   
   return live_hosts

def importXML(filename, hosts):
   # import xml.etree.ElementTree as etree
   try:
      xml = etree.parse(filename).getroot()
      for host in xml.iter(tag="host"):
         addr = ""
         for address in host.iter(tag="address"):
            if address.attrib["addrtype"] == "ipv4":
               addr = address.attrib["addr"]
         if addr in hosts and type(hosts[addr]) is dict:
            for port in host.iter(tag="port"):
               state = port.find("state")
               if state != None and state.attrib["state"].lower() == "open":
                  portid=prot=name=prod=cms = ""
                  portid = port.attrib["portid"]
                  prot = port.attrib["protocol"]
                  ssl = portid in ["22","443","8443"] and prot == "tcp"
                  service = port.find("service")
                  if service != None:
                     name = service.attrib["name"].lower()
                     if "product" in service.attrib:
                        prod = service.attrib["product"].lower()
                     if "tunnel" in service.attrib:
                        ssl = True
                  for script in port.iter(tag="script"):
                     if "http-devframework" in script.attrib["id"]:
                        fwk = script.attrib["output"].split()[0]
                        if fwk in ["Wordpress", "Django", "Drupal", "Joomla"]:
                           cms = fwk
                  hosts[addr][portid+"/"+prot] = \
                     {"portid":portid,"prot":prot,"name":name,"product":prod,"ssl":ssl,"cms":cms}
                  
   except Exception as e:
      logging.error("Importing: {} Error: {}".format(filename, e))
      
# approximate per host discovery time
def estimate_host_discovery_time():
   rate = int(MASSCAN_RATE)
   num_ports = MASSCAN_PORTS.count(',') + 2 * MASSCAN_PORTS.count('-')
   max_attempts = 1 + int(MASSCAN_RETRIES)
   return num_ports * max_attempts / rate

def get_host_count(hosts):
   count = 0
   try:
      for host in hosts:
         if '/' in host:
            count += 2 ** (32 - int(host.split('/')[1]))
         else: count += 1
   except: pass
   return count

def importTQDM():
   global tqdm
   try: from tqdm import tqdm
   except ImportError:
      print("TQDM not installed, use --install-prereqs to attempt automatic installation.\n")
      sys.exit(1)

def cleanupReq():
   printAndLog("Cleanup requested\n")
   cleanup()
   sys.exit(0)

# todo: debugging message on failure
def installPrereqs():
  printAndLog("Attempting to automatically install prerequisite tooling...")
  null = subprocess.DEVNULL
  aptRes = subprocess.run("apt-get install python3-pip masscan nfs-common xvfb -yqq", shell=True, stdout=null, stderr=null).returncode
  pipRes = subprocess.run("pip3 install tqdm", shell=True, stdout=null, stderr=null).returncode
  if pipRes:
     pipRes = subprocess.run("pip3 install tqdm*.whl -f ./ --no-index", shell=True, stdout=null, stderr=null).returncode
  if aptRes or pipRes:
     printAndLog("Unable to install prereqs. See comments for manual procedure\n")
     sys.exit(1)
  printAndLog("Prereqs successfully installed. Relaunch script\n")
  sys.exit(0)
    
def initLogging():
   logging.basicConfig(filename=LOG_FILENAME, level=LOG_LEVEL, format=LOG_FORMAT, datefmt=LOG_DATEFMT)
   logging.info("Nightcall v{}".format(VERSION))
   logging.info("Log Level: {}".format(logging.getLevelName(LOG_LEVEL)))

def parseArgs(argv=None):
   # import argparse
   parser = argparse.ArgumentParser()
   parser.add_argument("-sP", "--skip-portscans", action="store_true", help="skip portscans, directly import xml")
   parser.add_argument("-i", "--iface", help="interface to use for masscan and nmap")
   group = parser.add_mutually_exclusive_group()
   group.add_argument("-f", "--target-file", help="target file containing line separated ip addresses (cidr supported)")
   group.add_argument("single_address", nargs="?", help="single host or network (excludes -f)")
   group.add_argument('--install-prereqs', action='store_true', help='attempt to install TQDM progress bar, python3-pip, masscan, nfs-common, xvfb')
   group.add_argument('--cleanup', action='store_true', help='sort directory if cleanup interrupted')
   parser.add_argument("-b", "--brute", action="store_true", help="enable bruteforcing (consider lockouts)")
   parser.add_argument("-w", "--web", action="store_true", help="enable additional web related scans")
   parser.add_argument('--disable-resolve', action='store_true', help='disable separate hostname resolution (outside nmap)')
   parser.add_argument("--version", action="version", version="", help=argparse.SUPPRESS)
   results = parser.parse_args(argv)

   if not (results.install_prereqs or results.cleanup) and results.target_file == results.single_address == None:
      print("\n\t[ No target specified ]\n")
      parser.print_help()
      print("\n")
      sys.exit(0)

   return results

def signal_term_handler(signal, frame):
   printAndLog("Received external SIGTERM. Cleaning up and exiting...")
   cleanup()
   sys.exit(1)

def rootCheck():
   if "root" != subprocess.getoutput("whoami"):
      print(" ~ Must be root to run privileged scans ~\n")
      sys.exit(1)

def banner():
   # ascii art credit to bug
   wolf = '''\
                                 __
                               .d$$b
                             .' TO$;\\
                            /  : TP._;
                           / _.;  :Tb|
                          /   /   ;j$j
                      _.-"       d$$$$
                    .' ..       d$$$$;
                   /  /P'      d$$$$P. |\\
                  /   "      .d$$$P' |\\^"l
                .'           `T$P^"""""  :
            ._.'      _.'                ;
         `-.-".-'-' ._.       _.-"    .-"
       `.-" _____  ._              .-"
      -(.g$$$$$$$b.              .'
        ""^^T$$$P^)            .(:
          _/  -"  /.'         /:/;
       ._.'-'`-'  ")/         /;/;
    `-.-"..--""   " /         /  ;
   .-" ..--""        -'          :
   ..--""--.-"         (\\      .-(\\
     ..--""              `-\\(\\/;`
       _.                      :
                               ;`-
                              :\\
                              ;
   '''
   print("\n\t\t.:[ Nightcall v{} ]:.".format(VERSION))
   print("\n\t\t~ Automated Enumeration ~\n\n{}".format(wolf))

# [ MAIN STUB ]
if __name__ == "__main__":
   banner()
   rootCheck()
   signal.signal(signal.SIGTERM, signal_term_handler)

   args = parseArgs(sys.argv[1:])

   initLogging()
   logging.debug("Arguments specified...\n{}".format(args))

   if args.install_prereqs: installPrereqs()
   if args.cleanup: cleanupReq()

   importTQDM()
   
   subprocess.run(["msfdb", "start"], stdout=subprocess.DEVNULL)
   
   main(args)
