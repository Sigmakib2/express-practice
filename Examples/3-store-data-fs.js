const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

// Specify allowed origin
const allowedOrigins = ['http://127.0.0.1:5500'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

//Enable CORS with specific origin
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post('/storeUserData', (req, res) => {
  const userData = req.body;

  // Read existing data from JSON file, if any
  let existingData = [];
  try {
    existingData = JSON.parse(fs.readFileSync('userdata.json', 'utf8'));
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }

  // Add new user data to existing data
  existingData.push(userData);

  // Write updated data back to JSON file
  fs.writeFileSync('userdata.json', JSON.stringify(existingData));

  res.json({ message: 'Data stored successfully', userData: userData });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
