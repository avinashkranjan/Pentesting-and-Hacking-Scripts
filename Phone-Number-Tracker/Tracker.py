from phonenumbers import geocoder
from phonenumbers import carrier
import phonenumbers

numbers = input("Enter phone number : ")
ch_num = phonenumbers.parse(numbers, 'CH')
print(geocoder.description_for_number(ch_num, "en"))

service_num = phonenumbers.parse(numbers, "RO")
print(carrier.name_for_number(service_num, "en"))
