const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

// Hardcoded user credentials for simplicity
const users = [
  {
    username: 'user1',
    password: 'password1'
  },
  {
    username: 'user2',
    password: 'password2'
  }
];

// Authentication endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Check if user credentials are valid
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }

  // Authentication successful
  res.send('Authentication successful');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
