import geocoder
import folium
import os

CSS_CODE = """
<style>
    /* CSS code */
</style>
"""

HTML_TABLE_CODE = """
<section>
    <!-- HTML table code -->
</section>
"""


def ip_lookup(ip_address):
    """A function that retrieves IP address information."""
    g = geocoder.ip(ip_address)
    return g.json


def generate_map_report(ip_address, response):
    """A function that generates an HTML map report."""
    HTML_TABLE_CODE = """
    <section>
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>[+] All About <span style="color:red;">{0}</span></th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr>
                        <td>Country</td>
                        <td>{1}</td>
                    </tr>
                    <tr>
                        <td>Continent</td>
                        <td>{2}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{3}</td>
                    </tr>
                    <tr>
                        <td>Latitude</td>
                        <td>{4}</td>
                    </tr>
                    <tr>
                        <td>Longitude</td>
                        <td>{5}</td>
                    </tr>
                    <tr>
                        <td>Accuracy Radius</td>
                        <td>{6}</td>
                    </tr>
                    <tr>
                        <td>Time Zone</td>
                        <td>{7}</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>{8}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    """

    REPORT_TITLE = f"{ip_address}-Report.html"
    os.chdir(os.path.dirname(__file__))

    country = response["country"]
    continent = response["continent"]
    city = response["city"]
    latitude = response["lat"]
    accuracy_radius = response["accuracy"]
    longitude = response["lng"]
    time_zone = response["timezone"]
    state = response["state"]

    HTML_TABLE_CODE = HTML_TABLE_CODE.format(
        ip_address,
        country,
        continent,
        city,
        latitude,
        longitude,
        accuracy_radius,
        time_zone,
        state,
    )
    geolocation = geocoder.ip(ip_address)
    ip_geolocation = geolocation.latlng

    my_map = folium.Map(location=ip_geolocation, zoom_start=15)
    folium.CircleMarker(location=ip_geolocation, radius=55).add_to(my_map)
    folium.Marker(ip_geolocation, popup=city).add_to(my_map)
    my_map.get_root().html.add_child(folium.Element(CSS_CODE))
    my_map.get_root().html.add_child(folium.Element(HTML_TABLE_CODE))
    my_map.save(REPORT_TITLE)


def print_result(ip_address, response):
    """A function that prints IP address information in a table format."""
    print("=" * 36)
    print(f"[+] Geolocation for [{ip_address}]")
    print("=" * 36)

    print("Attribute\tValue")
    print("----------------------")
    print(f"IP Address\t{ip_address}")
    print(f"Country\t\t{response['country']}")
    print(f"Continent\t{response['continent']}")
    print(f"City\t\t{response['city']}")
    print(f"Latitude\t{response['lat']}")
    print(f"Longitude\t{response['lng']}")
    print(f"Accuracy Radius\t{response['accuracy']}")
    print(f"Time Zone\t{response['timezone']}")
    print(f"State\t\t{response['state']}")
    print()


def main():
    ip_address = input("[+] Enter IP address: ")
    try:
        response = ip_lookup(ip_address)
        print(f"[+] Geolocation for {ip_address}")
        user_choice = int(input("[?] Generate 'report.html' file @ Desktop (1/0)? "))

        if user_choice == 1:
            generate_map_report(ip_address, response)
        elif user_choice == 0:
            print_result(ip_address, response)
        else:
            print("[-] Invalid choice.")
    except Exception as error:
        print("[-] An error occurred:")
        print(error)


if __name__ == "__main__":
    main()
