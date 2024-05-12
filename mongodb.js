const { MongoClient } = require('mongodb');

// MongoDB connection URI with the desired database name
const uri = 'mongodb://localhost:27017/myapp';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // No need to create the database explicitly

    console.log('Database created or accessed successfully');
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Call the main function
main().catch(console.error);