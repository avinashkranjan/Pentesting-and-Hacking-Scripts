# VulnScanner

VulnScanner is a Ruby script designed to scan for vulnerabilities in third-party web applications.

During network security assessments (including internal, external, and red team engagements), we often encounter vulnerable third-party web applications or web front-ends that expose the potential to compromise remote servers through publicly known vulnerabilities. Some common examples include Apache Tomcat administrative interfaces, JBoss jmx-console, Hudson Jenkins, and more.

A search through Exploit-db reveals over 10,000 remotely exploitable vulnerabilities present in numerous web applications and front-ends. These vulnerabilities range from Remote Code Execution (RCE) and malicious file uploads to SQL injection and Remote/Local File Inclusion (RFI/LFI), among others.

VulnScanner offers rapid network scanning capabilities to identify such vulnerable applications, effectively serving up pwnable targets on a silver platter.

## Setup / Install

You would need to install the following gems:

- `bundle install --path vendor`
- `bundler exec ./script.rb -f [myfile]`

## Details

VulnScanner provides the following command-line options:

- `-r`: If you want VulnScanner to perform a port scan, use this switch to provide an IP address or IP range.

- `-l`: If you want VulnScanner to perform a port scan, use this switch to provide an input file with new-line separated IP addresses, similar to nmap's `-iL` option.

- `-s`: Provide a custom signature file. `[./script.rb -s mysignatures.yaml -f nmap.xml]` [Default - signatures.yaml]

- `-f`: If you do not want VulnScanner to perform a port scan and already have an nmap output in XML format, use this switch to feed the nmap output.

- `-u`: Takes a newline-separated file of URLs saved from a previous run of VulnScanner. See below for more details.

- `-n`: Tells VulnScanner not to ping the host while performing the port scan. Standard nmap option.

- `-p`: Use this switch to provide port number(s)/range.

- `-A`: Use this switch to scan all the 65535 ports. Standard nmap option.

- `-b`: If the discovered application implements authentication, use this switch to brute-force the authentication. "all" will brute-force both form and HTTP basic auth. "form" will only brute-force form-based auth. "basic" will only brute-force HTTP basic auth.

- `-t`: Specify the maximum number of threads.

- `-h`: Well, take a guess.

## What is this new switch: `--usesavedstate (-u)`

When VulnScanner runs, it performs several steps before starting to enumerate vulnerable applications. If you provide an IP address or range, it will perform a port scan against the provided targets. If you provide VulnScanner with an nmap XML output file, it will parse that file and enumerate hosts with open web ports. It then sends a request for a fake (non-existent) file and directory to each enumerated host:ip. To reduce false-positives, it discards all ip:port that respond back with HTTP 200 Ok for the fake file & directory requests. At the end of this whole process, we get a list of, let's say, "good urls". These good URLs are then used to enumerate vulnerable applications.

If, for some reason, you have to re-run VulnScanner against the same set of targets, the previous versions of VulnScanner will go through this whole process again. That's not efficient at all. I know, I am mostly dumb and a slow learner, but I am constantly evolving. Anyways, a good reason to re-run VulnScanner against the same targets could be to use a different (or custom) signatures file.

This latest version of VulnScanner will automatically save a file, `savedURLstateXXXXX.out`, in the same folder it runs from. This file will contain all the "good URLs". If you plan to re-run VulnScanner on the same targets, just feed this file to VulnScanner without the `-f` or `-r` options.

**Example:** `ruby script.rb -s my_custom_signatures.yaml -u savedURLstateXXXXX.out`

VulnScanner will parse this file and start enumerating vulnerable applications against the listed "good URLs". Ta-Da.
