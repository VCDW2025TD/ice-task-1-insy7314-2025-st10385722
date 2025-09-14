// Import Mongoose to connect to MongoDB (used later for database operations)
const https = require('https');
const fs = require('fs');
const app = require('./app'); // Your Express app
require('dotenv').config();
const mongoose = require('mongoose');

// Import the Express app defined in app.js

// Load environment variables (again, in case they're needed here too)

// Define the server port, using the environment variable if available, or default to 5000
const PORT = process.env.PORT || 5000;

const options = {
  key: fs.readFileSync('ssl/privatekey.pem'),
  cert: fs.readFileSync('ssl/certificate.pem'),
};

// Start the Express server and listen on the defined port
https.createServer(options, app).listen(PORT, () => {
  console.log(`Secure API running at https://localhost:${PORT}`);
});
