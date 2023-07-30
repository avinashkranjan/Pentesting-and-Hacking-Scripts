# made using python
import argparse, os, sys

parser = argparse.ArgumentParser(description="Clickjacking Script", version="1.0.0")
parser.add_argument("url", help="Web application URL to test for clickjacking.")
parser.add_argument("--webapp", metavar="string", help="Web application name.")
parser.add_argument("--html", metavar="file", help="Print results in HTML file.")

if len(sys.argv) == 1:
    parser.print_help()
    sys.exit(1)

args = parser.parse_args()

if not args.webapp:
    args.webapp = args.url

html_code = """\
<html>
	<head>
		<title>Clickjacking Script</title>
	</head>
	<body>
		<h4>Clickjacking Demo</h4>
		<p>The {webapp} web application is vulnerable to clickjacking and is included in the iframe below.</p>
		<iframe src="{url}" width="80%" height="80%" style="border: 2px solid #e1e1e1;"></iframe>
		<p>Clickjacking is a method used by attackers mostly in attemps to deceive web application users into performing an unintended action(s). It is recommended to implement frame busting on the client side and/or x-frame header options on the server to prevent the clickjacking on {webapp}. For more information on clickjacking and remediation steps refer to <a href="https://www.owasp.org/index.php/Clickjacking">OWASP's clickjacking webpage</a>.</p>
	</body>
</html>""".format(
    webapp=args.webapp, url=args.url
)

if args.html:
    print("\nClickjacking POC {}\n".format(parser.version))
    with open(os.path.abspath(args.html), "w") as f:
        f.write(html_code)
    print("PoC saved to '{}'.\n".format(os.path.abspath(args.html)))
else:
    print(html_code)
