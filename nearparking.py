# Import necessary libraries
import pandas as pd
from sklearn.neighbors import NearestNeighbors
import numpy as np

# Sample dataset (in a real scenario, you would load this from a CSV file)
data = pd.DataFrame({
    'name': ['Simpark Infrastructure Pvt Ltd',
             'Garage Parking on Rental',
             'MANTU PARKING POINT',
             'RCGC Parking Lot',
             'Dream house',
             'Hazra Cycle Garage',
             'Suman Car Park',
             'GITA PARKING CENTRE',
             'Sona Parking',
             'BARI PARKING',
             'Garage Vara',
             'Rajib Bhadra Car Parking',
             'Soha Garage',
             'Mondal Car Parking',
             'Jay Maa Garage',
             'Chatterjee Garage',
             'Ss Car Garage',
             'Dk Car Parking Centre',
             'Alochaya Garage',
             'Chandan Saha & Suman Saha Garage',
             'HSBC Parking Lot',
             'Parking Zone',
             'Paul Mansion Garage',
             'Rajat Car Parking Centre',
             'A.B. PARKING CENTRE',
             'Prerana Parking',
             'Mukherjee Cycle Garage',
             'Cycle Garage',
             'Paul Parking Point And Travels',
             'Maa Bhavatarini Car Parking'],
    'latitude': [22.5446875, 22.5008974, 22.8106862, 22.4942298, 22.8911172,
                 22.528411, 22.6661822, 22.6706738, 22.7149883, 22.7538575,
                 22.7266074, 22.4909357, 22.3647519, 22.5092162, 22.3611645,
                 22.5832118, 22.8129347, 22.6208368, 22.3637454, 22.4640067,
                 22.5876316, 22.6545128, 22.6378402, 22.658186, 22.8523292,
                 22.5639375, 22.9869789, 22.9034995, 22.915865, 22.7641094],
    'longitude': [88.3584865, 88.3018247, 88.3765119, 88.3493176, 88.4706642,
                  88.1866788, 88.3769222, 88.3135, 88.4985085, 88.4889444,
                  88.4669345, 88.3857343, 88.4285729, 88.2855801, 88.4346605,
                  88.3259159, 88.3714244, 88.4284755, 88.4327618, 88.3729044,
                  88.4224556, 88.3872885, 88.4076476, 88.4163638, 88.5279056,
                  88.2084375, 88.3773462, 88.3676393, 88.4485855, 88.4101838]
})

# Display the first few rows of the dataset
print(data.head())

# Extract coordinates
coordinates = data[['latitude', 'longitude']].values

# Initialize the Nearest Neighbors model
nbrs = NearestNeighbors(n_neighbors=1, algorithm='ball_tree').fit(coordinates)

# Define a function to find the nearest parking area
def find_nearest_parking(latitude, longitude):
    location = np.array([[latitude, longitude]])
    distances, indices = nbrs.kneighbors(location)
    nearest_parking_index = indices[0][0]
    nearest_parking = data.iloc[nearest_parking_index]
    return nearest_parking

# Example: Find the nearest parking area to a given location
  # Example latitude in Kolkata
  # Example longitude in Kolkata

latitude = float(input("Enter the latitude:"))
longitude = float(input("Enter the longitude:"))

nearest_parking = find_nearest_parking(latitude, longitude)

print(f"Nearest Parking: {nearest_parking['name']}")
print(f"Location: ({nearest_parking['latitude']}, {nearest_parking['longitude']})")
