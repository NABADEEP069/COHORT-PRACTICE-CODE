// create a todo app that lets users store todos on the server.
//try to create a http server from scratch in c
// try to create a http server in golang using the gorilla framework
// const express = require('express')
// const bodyParser = require("body-parser");

// const app = express()
// const port = 3000
// // study middlewares
// app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   console.log(req.body);
//   res.post('hellow world')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

// study middlewares
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log("Received a GET request");
  res.send('hello world')
})
  
app.post('/', function(req, res) {
  console.log(req.body);
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
          