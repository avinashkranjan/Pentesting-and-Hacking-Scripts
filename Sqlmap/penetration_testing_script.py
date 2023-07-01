import sqlmap

target_url = "http://example.com/vulnerable_page.php?id=1"

# Create a new SQLMap instance
s = sqlmap.SQLMap()

# Set the target URL
s.set_target(target_url)

# Run the SQL injection test
s.scan()

# Print the scan results
print(s.get_scan_results())
