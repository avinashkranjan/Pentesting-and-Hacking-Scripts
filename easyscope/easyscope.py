import argparse, sys, re
from netaddr import *


def expand(addr):
    if "-" in addr:
        if (
            "." not in addr.split("-")[1] and addr.split("-")[1]
        ):  # check for short notation
            return list(
                iter_iprange(
                    addr.split("-")[0],
                    "{}.{}".format(
                        ".".join(addr.split("-")[0].split(".")[:3]), addr.split("-")[1]
                    ),
                )
            )
        else:
            return list(iter_iprange(addr.split("-")[0], addr.split("-")[1]))
    elif "/" in addr:
        return list(IPNetwork(addr))
    else:
        return [IPAddress(addr)]


def combine(addr):
    results = cidr_merge(addr)
    if results:
        for index, addr in enumerate(results):
            if str(addr).split("/", 1)[1] == "32":
                results[index] = str(addr).split("/", 1)[0]
    return results


def main():
    parser = argparse.ArgumentParser(
        description="EasyScope - A script to combine or expand IP Addresses by Jonathan Broche (@g0jhonny)"
    )
    parser.add_argument(
        "-v",
        "--version",
        help="show program's version number and exit",
        action="version",
        version="%(prog)s 1.0.1",
    )
    parser.add_argument(
        "-f",
        "--file",
        help="A new line delimieted file containing subnets (e.g., 192.168.1.1/24) or IP ranges (e.g. 192.168.1.1-192.168.1.254).",
    )
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument(
        "-e",
        "--expand",
        nargs="?",
        default="",
        help="Expand IP adddresses/ranges into single IP addresses.",
    )
    action.add_argument(
        "-c",
        "--combine",
        nargs="?",
        default="",
        help="Combine IPs addresses/ranges into supernets.",
    )

    if len(sys.argv) == 1:
        parser.print_help()
        sys.exit(1)

    args = parser.parse_args()

    if not args.file and not args.expand and not args.combine:
        print("You didn't provide any work for me to do.")
        sys.exit(1)

    results, tmp_combine = [], []

    if args.file:
        with open(args.file) as f:
            for line in f.readlines():
                if args.expand or args.expand == None:
                    results.append(expand(line.strip()))
                elif args.combine or args.combine == None:
                    if "/" in line:
                        tmp_combine.append(IPNetwork(line.strip()))
                    elif "-" in line:
                        for ip in expand(line.strip()):
                            tmp_combine.append(ip)
                    else:
                        tmp_combine.append("{}/32".format(line.strip()))
            if tmp_combine:
                results.append(combine(tmp_combine))

    if args.expand:
        results.append(expand(args.expand))
    if args.combine:
        results.append(combine(expand(args.combine)))
    if results:
        for addrs in results:
            for ip in addrs:
                print(ip)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(0)
    except AddrFormatError as e:
        print("[!] {}\n".format(str(e).capitalize()))
