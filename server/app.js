var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/studivision', { useNewUrlParser: true });
var app = express();

app.get('/', function (req, res) {
  console.log('Inside GET / callback function')
  res.send('Hello World!');
});

// create the login get and post routes
app.get('/login', (req, res) => {
  console.log('Inside GET /login callback function')
  res.send(`You got the login page!\n`)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
