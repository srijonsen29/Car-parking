// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const app = express();


function email(){
    let email = document.getElementById('email').value;
    console.log(email)
}

function password(){
    let password = document.getElementById('password').value;
    console.log(password)
}


// Get reference to the button element
const myButton = document.getElementById('myButton');

// Add event listener to the button for the 'click' event
myButton.addEventListener('click', function() {
    // Define the functionality to execute when the button is clicked
    alert('Button clicked!');
    email()
    password()
    // You can add any other functionality here, such as making an AJAX request, toggling a class, etc.
    

// Initialize Express app


// Middleware to parse JSON bodies
// app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect('mongodb+srv://srijonsen29:g4HdWFsAio28c9hB@carparking.wjq6b5v.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//   console.log("Connected to MongoDB");
// });

// Define a user schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String
// });

// Define a User model
// const User = mongoose.model('User', userSchema);

// Endpoint to validate user credentials
// Endpoint to validate user credentials and redirect to home page
// app.post('/login-homepage', async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       // Find the user by username or email
//       const user = await User.findOne({ $or: [{ username: username }, { email: username }] });
  
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       // Compare the provided password with the hashed password stored in the database
//       const isPasswordValid = await bcrypt.compare(password, user.password);
  
//       if (!isPasswordValid) {
//         return res.status(401).json({ message: 'Invalid password' });
//       }
  
//       // Password is valid, user is authenticated
//       // Redirect the user to the home page
//       res.redirect('/login-homepage');
  
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  

// Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

});
