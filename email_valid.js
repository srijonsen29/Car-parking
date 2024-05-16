const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Signup route with validation
app.post('/signup', [
    check('email').isEmail().normalizeEmail(),
    check('phoneNumber').matches(/^\d{10}$/) // Simple pattern matching for 10-digit phone number
], (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // If validation passes, proceed with signup logic
    const { email, phoneNumber, password } = req.body;
    // Add your signup logic here

    // Send success response
    res.status(200).json({ message: 'User signed up successfully' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
