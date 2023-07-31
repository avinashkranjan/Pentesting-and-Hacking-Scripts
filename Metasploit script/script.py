from metasploit.msfrpc import MsfRpcClient

# Establish connection to the Metasploit RPC service
client = MsfRpcClient(password="your_password")

# Get a list of available modules
modules = client.modules.exploits

# Print the names of the available exploits
for module in modules:
    print(module)

# Select an exploit module
exploit = client.modules.use("exploit", "exploit_name")

# Configure the necessary options for the exploit
exploit["RHOST"] = "target_ip"
exploit["RPORT"] = "target_port"

# Execute the exploit
exploit.execute(payload="payload_name")

# Check if the exploit was successful
if exploit.success:
    print("Exploit successful!")
else:
    print("Exploit failed.")

# Once finished, stop the Metasploit RPC client
client.stop()
