
#importing libraries
from geolite2 import geolite2
from termcolor import colored
from prettytable import PrettyTable
import requests
import geocoder
import folium
import os

# MAP_SOURCE_CODE
CSS_CODE = """
<style>
    h1{
font-size: 25px;
color: #fff;
text-transform: uppercase;
font-weight: 200;
text-align: center;
margin-bottom: 10px;
}
table{
width:100%;
table-layout: fixed;
}
.tbl-header{
background-color: rgba(255,255,255,0.3);
}
.tbl-content{
height:170px;
overflow-x:auto;
margin-top: 0px;
border: 1px solid rgba(255,255,255,0.3);
}
th{
padding: 15px 10px;
text-align: left;
font-weight: 200;
font-size: 16px;
color: #fff;
text-transform: uppercase;
}
td{
padding: 10px;
text-align: left;
vertical-align:middle;
font-weight: 200;
font-size: 16px;
color: #fff;
border-bottom: solid 1px rgba(255,255,255,0.1);
}


/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body{
background: -webkit-linear-gradient(left, #0b1d16, #2d5558);
background: linear-gradient(to right, #0b1d16, #2d5558);
font-family: 'Roboto', sans-serif;
}
section{
margin: 50px;
}
</style>
"""

HTML_TABLE_CODE = """
<section>
    <!--for demo wrap-->
<div class="tbl-header">
<table cellpadding="0" cellspacing="0" border="0">
 <thead>
   <tr>
     <th>[+] All About <span style= "color:red;"> {0} </span></th>
   </tr>
 </thead>
</table>

</div>
<div class="tbl-content">
<table cellpadding="0" cellspacing="0" border="0">
 <tbody>

    <tr>
     <td>Country </td>
     <td>{1}</td>
   </tr>
  <tr>
     <td>Continent </td>
     <td>{2}</td>
   </tr>

   <tr>
     <td>City </td>
     <td>{3}</td>
   </tr>
   <tr>
     <td>Latitude </td>
     <td>{4}</td>
   </tr>
   <tr>
     <td>Longitude </td>
     <td>{5}</td>
   </tr>
      <tr>
     <td>Accuracy Radius </td>
     <td>{6}</td>
   </tr>
      <tr>
     <td>Time Zone </td>
     <td>{7}</td>
   </tr>
      <tr>
     <td>State </td>
     <td>{8}</td>
   </tr>
 </tbody>
</table>
</div>
</section>
"""

def ip_lookup(ip_address):
    """[a function that cracks ip address and gets IP address information]

    Args:
        ip_address ([string]): [taken from user that entered the IP]

    Returns:
        [dictionary]: [it has IP address information that the function cracked]
    """
    # taking reader object
    reader_obj = geolite2.reader()
    # reading ip address information
    response = reader_obj.get(ip_address)
    # country, continent, city, latitude, accuracy_radius, longitude, time_zone, state
    return response


def generate_map_report(ip_address, response):
    """[a function that gets IP address and IP address information to apply them in a map and a table with IP information]

    Args:
        ip_address ([string]): [variable that crack ip address in a map]
        response ([dictionary]): [used to apply IP information assigned in response in a table]
    """
    global HTML_TABLE_CODE
    REPORT_TITLE = f"{ip_address}-Report.html"
    os.chdir(os.path.dirname(__file__))
    country = response['country']['names']['en']
    continent = response['continent']['names']['en']
    city = response['city']['names']['en']
    latitude = response['location']['latitude']
    accuracy_radius = response['location']['accuracy_radius']
    longitude = response['location']['longitude']
    time_zone = response['location']['time_zone']
    state = response['subdivisions'][0]['names']['en']
    # ip_address, country, continent, city, latitude, longitude, accuracy_radius, time_zone, state
    HTML_TABLE_CODE = HTML_TABLE_CODE.format(ip_address, country, continent, city, latitude, longitude, accuracy_radius, time_zone, state)
    geolocation = geocoder.ip(ip_address)
    ip_geolocation = geolocation.latlng
    my_map = folium.Map(location = ip_geolocation, zoom_start = 15)
    # making circle
    folium.CircleMarker(location = ip_geolocation, radius = 55).add_to(my_map)
    folium.Marker(ip_geolocation, popup = city).add_to(my_map)
    my_map.get_root().html.add_child(folium.Element(CSS_CODE))
    my_map.get_root().html.add_child(folium.Element(HTML_TABLE_CODE))
    my_map.save(REPORT_TITLE)


def print_result(ip_address, response):
    """[a function that prints IP address information in a table without a map]

    Args:
        ip_address ([string]): [used to print the IP address with the other information]
        response ([dictionary]): [used to print IP address information in the table]
    """
    country = colored(response['country']['names']['en'], "yellow")
    continent = colored(response['continent']['names']['en'], "yellow")
    city = colored(response['city']['names']['en'], "yellow")
    latitude = colored(response['location']['latitude'], "yellow")
    accuracy_radius = colored(response['location']['accuracy_radius'], "yellow")
    longitude = colored(response['location']['longitude'], "yellow")
    time_zone = colored(response['location']['time_zone'], "yellow")
    state = colored(response['subdivisions'][0]['names']['en'], "yellow")

    print("")
    print(colored("=" * 36, "yellow"))
    print(colored(f"[+] Geolocation for [{ip_address}]", "green"))
    print(colored("=" * 36, "yellow"))
    # generate the table
    my_table = PrettyTable([colored("Attribute", "blue"), colored("Value","blue")])
    my_table.add_row(["IP Address", colored(ip_address,"yellow")])
    my_table.add_row(["Country", country])
    my_table.add_row(["Continent", continent])
    my_table.add_row(["City", city])
    my_table.add_row(["Latitude", latitude])
    my_table.add_row(["Longitude", longitude])
    my_table.add_row(["Accuracy Radius", accuracy_radius])
    my_table.add_row(["Time Zone", time_zone])
    my_table.add_row(["State Zone", state])
    print(my_table, "\n\n")

def main():
    # reading inputs from the user
    ip_address = input("[+] Enter ip address: ")
    try:
        response = ip_lookup(ip_address)
        print(colored(f"[+] We Get Geolocation for {ip_address}", "green"))
        user_choice = int(input(colored("[?] Generate 'report.html' file @ Desktop (1/0)? ", "yellow")))
        while True:
            if user_choice == 1:
                generate_map_report(ip_address, response)
                break
            elif user_choice == 0:
                print_result(ip_address, response)
                break
            else:
                print(colored("[-] Ican't Understant this command!", "red"))
                user_choice = int(input(colored("[?] Generate 'report.html' file @ Desktop (1/0)? ", "yellow")))
        
    except Exception as error:
        print(colored("[-] An Error was Occured:", "red"))
        print(colored(error, "yellow"))


# calling main function
if __name__ == "__main__":
    main()
