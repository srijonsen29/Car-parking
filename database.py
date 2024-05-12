import pymongo

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")

# Choose database
db = client["mydatabase"]

# Choose collection
collection = db["customers"]

# Insert data into the collection
data = { "name": "John", "address": "Highway 37" }
collection.insert_one(data)

# Close the connection
client.close()