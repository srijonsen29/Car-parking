// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

// Define a user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// Define a User model
const User = mongoose.model('User', userSchema);

// Parse JSON bodies for POST requests
app.use(express.json());

// Endpoint to save user details
app.post('/users', async (req, res) => {
  try {
    // Create a new user instance based on request body
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password // Note: In production, hash the password before saving
    });
    
    // Save the user to the database
    await newUser.save();
    
    res.status(201).json(newUser); // Return the saved user details
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
