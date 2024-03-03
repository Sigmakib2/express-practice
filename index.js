const express = require('express');
const fs = require('fs');
const app = express();

// Read the list of fruits from the JSON file
const fruits = JSON.parse(fs.readFileSync('fruits.json', 'utf-8'));

// Route to check if input is in the list of fruits
app.get('/check-fruit/:name', (req, res) => {
  const name = req.params.name.toLowerCase(); // Convert input to lowercase
  const isInList = fruits.includes(name);
  if (isInList) {
    res.json({ message: `${name} is a fruit!` });
  } else {
    res.json({ message: `${name} is not a fruit.` });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
