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

import subprocess
import logging
import logging.handlers
import sys
from multiprocessing import Pool

# Configuration settings
LOG_TO_STDOUT = True  # Log messages to standard output
LOG_TO_FILE = True  # Log messages to file
LOG_FILE = "./Nightcall.log"  # Log file location and name
LOG_LEVEL = logging.INFO
# LOG_LEVEL = logging.DEBUG

# Command settings
CMD_PATH = "/usr/bin/"
WAFW00F_BIN = CMD_PATH + "wafw00f"
NIKTO_BIN = CMD_PATH + "nikto"
NMAP_BIN = CMD_PATH + "nmap"
MASSCAN_BIN = CMD_PATH + "masscan"
DOMAIN = None
TCP_PORTS = "0-65535"
UDP_PORTS = "0-65535"

# Global variables
TASK_TIMEOUT = 300  # Timeout for each scanning task
CONC_TASKS = 10  # Number of concurrent scanning tasks

# Create logger
logger = logging.getLogger("Nightcall")
logger.setLevel(LOG_LEVEL)
log_formatter = logging.Formatter("%(asctime)s [%(levelname)s] %(module)s: %(message)s")

# Create console handler
if LOG_TO_STDOUT:
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.WARNING)
    console_handler.setFormatter(log_formatter)
    logger.addHandler(console_handler)

# Create file handler
if LOG_TO_FILE:
    file_handler = logging.handlers.RotatingFileHandler(
        LOG_FILE, maxBytes=10 * 1024 * 1024, backupCount=5
    )
    file_handler.setLevel(LOG_LEVEL)
    file_handler.setFormatter(log_formatter)
    logger.addHandler(file_handler)


def get_ip_addr(domain):
    """Get IP address for a given domain."""
    try:
        ip_addr = subprocess.run(
            ["host", domain],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=True,
            text=True,
        ).stdout.strip()
        ip_addr = ip_addr.split()[-1]
        return ip_addr
    except subprocess.CalledProcessError:
        return None


def scan_tcp_ports(args):
    """Scan TCP ports using Masscan."""
    ip, port_range = args
    try:
        cmd = [
            MASSCAN_BIN,
            "--rate",
            "1000",
            "--wait",
            "10",
            "--banners",
            "-p",
            port_range,
            ip,
        ]
        result = subprocess.run(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=True,
            text=True,
            timeout=TASK_TIMEOUT,
        )
        return result.stdout.strip()
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as e:
        logger.error(f"Error scanning TCP ports for {ip}: {e}")
        return ""


def scan_udp_ports(args):
    """Scan UDP ports using Masscan."""
    ip, port_range = args
    try:
        cmd = [
            MASSCAN_BIN,
            "--rate",
            "1000",
            "--wait",
            "10",
            "-pU:",
            port_range,
            ip,
        ]
        result = subprocess.run(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=True,
            text=True,
            timeout=TASK_TIMEOUT,
        )
        return result.stdout.strip()
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as e:
        logger.error(f"Error scanning UDP ports for {ip}: {e}")
        return ""


def scan_host(host):
    """Perform full scan on a host."""
    ip = get_ip_addr(host)
    if not ip:
        logger.error(f"Failed to resolve IP address for {host}")
        return

    logger.info(f"Scanning host: {host} ({ip})")

    try:
        # Perform TCP port scan
        tcp_ports = [(ip, TCP_PORTS)]
        with Pool(CONC_TASKS) as pool:
            tcp_results = pool.map(scan_tcp_ports, tcp_ports)

        tcp_output = "\n".join(tcp_results)

        # Perform UDP port scan
        udp_ports = [(ip, UDP_PORTS)]
        with Pool(CONC_TASKS) as pool:
            udp_results = pool.map(scan_udp_ports, udp_ports)

        udp_output = "\n".join(udp_results)

        # Save scan results to files
        with open(f"{host}-tcp.txt", "w") as f:
            f.write(tcp_output)
        with open(f"{host}-udp.txt", "w") as f:
            f.write(udp_output)

        logger.info(f"Scan completed for host: {host} ({ip})")
    except Exception as e:
        logger.error(f"Error scanning host {host}: {e}")


def perform_waf_detection(host):
    """Perform WAF detection using wafw00f."""
    try:
        cmd = [WAFW00F_BIN, "-a", host]
        result = subprocess.run(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=True,
            text=True,
            timeout=TASK_TIMEOUT,
        )
        return result.stdout.strip()
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as e:
        logger.error(f"Error performing WAF detection for {host}: {e}")
        return ""


def perform_vulnerability_scan(host):
    """Perform vulnerability scan using Nikto."""
    try:
        cmd = [NIKTO_BIN, "-host", host]
        result = subprocess.run(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=True,
            text=True,
            timeout=TASK_TIMEOUT,
        )
        return result.stdout.strip()
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as e:
        logger.error(f"Error performing vulnerability scan for {host}: {e}")
        return ""


def main():
    """Main function."""
    if not DOMAIN:
        logger.error("Please specify a domain to scan")
        sys.exit(1)

    logger.info(f"Starting Nightcall for domain: {DOMAIN}")

    # Perform host discovery
    logger.info("Performing host discovery")
    ip = get_ip_addr(DOMAIN)
    if not ip:
        logger.error("Failed to resolve IP address for the domain")
        sys.exit(1)

    logger.info(f"Discovered IP address: {ip}")

    # Perform scan on the domain and IP
    scan_host(DOMAIN)
    if DOMAIN != ip:
        scan_host(ip)

    # Perform additional features
    logger.info("Performing additional features")

    # Perform WAF detection
    logger.info("Performing WAF detection")
    waf_output = perform_waf_detection(DOMAIN)
    if waf_output:
        with open(f"{DOMAIN}-waf.txt", "w") as f:
            f.write(waf_output)
        logger.info(f"WAF detection completed for domain: {DOMAIN}")

    # Perform vulnerability scan
    logger.info("Performing vulnerability scan")
    vulnerability_output = perform_vulnerability_scan(DOMAIN)
    if vulnerability_output:
        with open(f"{DOMAIN}-vuln.txt", "w") as f:
            f.write(vulnerability_output)
        logger.info(f"Vulnerability scan completed for domain: {DOMAIN}")

    logger.info("Nightcall completed!")


if __name__ == "__main__":
    main()
