var express = require('express')
var app = express()
var users = require('./user.js')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(jsonParser)

app.get('/user' , function (req, res) {
  res.send(users)
})

app.post('/user/:id', function (req, res) {
  users.push(req.body)
  res.send(req.body)
})
app.put('/user/:id', function (req, res) {
  console.log(req.params.id)
  var index = users.findIndex(user => user.id === parseInt(req.params.id))
  user[index] = req.body
  res.send(user[index])
})

app.post('/user/:id', function (req, res) {
  res.send('This is a post')
})
app.get('/user/:id', function (req, res) {
  console.log(req.params.id)
  var user = users.find(item => item.id === parseInt(req.params.id))
  /*res.send(morkaroo[req.params.id - 1])*/
  res.send(user)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
