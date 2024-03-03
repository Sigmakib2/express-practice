const express = require('express');
//add cors
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

// Route to sum two numbers
app.get('/sum/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
