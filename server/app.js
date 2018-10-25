var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/studivision', { useCreateIndex: true, useNewUrlParser: true });
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');

// Init App
var app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/users', users);

// Set Port
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
