var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

//connect MongoDB
mongoose.connect('mongodb://localhost/studivision', { useCreateIndex: true, useNewUrlParser: true });

var User = require('./models/User.js')

var app = express();

//Middleware
app.use( bodyParser.json({ type: 'application/json' }) );

// root route
app.get('/', function (req, res) {
  console.log('Inside GET / callback function');
  res.send('Root');
});

// login route
app.get('/login', (req, res) => {
  console.log('Inside GET /login callback function');
  res.status(200).send("Please login");
})

app.post('/login', (req, res) => {
  console.log('Inside GET /login callback function');
  console.log(req.body.email);
  console.log(req.body.password);
  User.findById(req.body.email, function (err, user) {
    if (err) {
      res.status(400).send(err);
    }
    else {
      res.status(200).send(user);
    }
  })
})

// register route
app.get('/register', (req, res) => {
  console.log('Inside GET /register callback function');
  res.send(`Please register!\n`);
})

app.post('/register', (req, res) => {
  console.log('Inside GET /register callback function');
  console.log(req.body.user);
  console.log(req.body.email);
  console.log(req.body.password);
  User.create(req.body, function (err, post) {
    if (err) {
      res.status(400).send("Failed POST Request");
    }
    else {
      res.status(400).json(post);
    }
  })
})

// listen on port 5000
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
