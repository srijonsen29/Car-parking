import googlemaps
from datetime import datetime

# Enter your API key here
API_KEY = 'YOUR_API_KEY'

# Initialize the Google Maps client with your API key
gmaps = googlemaps.Client(key=API_KEY)

# Geocoding an address
geocode_result = gmaps.geocode('1600 Amphitheatre Parkway, Mountain View, CA')
print(geocode_result)

# Reverse geocoding (latitude and longitude to address)
reverse_geocode_result = gmaps.reverse_geocode((37.4219999,-122.0840575))
print(reverse_geocode_result)

# Get directions
directions = gmaps.directions("New York City", "Washington, DC", departure_time=datetime.now())
print(directions)