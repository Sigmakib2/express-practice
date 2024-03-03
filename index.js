const express = require('express');
const app = express();
const port = 3000;

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
