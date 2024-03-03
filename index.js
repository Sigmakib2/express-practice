const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world at: '+ port)
})

app.listen(port, () => {
  console.log(`Hey bro! your server is running on ${port} port!`)
})