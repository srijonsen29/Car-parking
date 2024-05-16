const { MongoClient } = require('mongodb');
const readline = require('readline');

// Connection URI
const uri = 'mongodb+srv://srijonsen29:g4HdWFsAio28c9hB@carparking.wjq6b5v.mongodb.net/';
const client = new MongoClient(uri);

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to collect user input
function getUserInput(prompt) {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

// Main function to connect to MongoDB and insert user data
async function main() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Select database and collection
    const db = client.db('User-credentials');
    const collection = db.collection('User');

    // Collect user input
    const name = await getUserInput('Enter name:');
    const email = await getUserInput('Enter email: ');
    const password = await getUserInput('Enter password: ');

    // Create a document to insert into the database
    const user = {
      name: name,
      email: email,
      password: password
    };

    // Insert the document into the collection
    const result = await collection.insertOne(user);
    console.log('Inserted document ID:', result.insertedId);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the MongoDB connection and readline interface
    await client.close();
    rl.close();
  }
}

// Call the main function to start the program
main();
