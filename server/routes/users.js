var express = require('express');
var router = express.Router();

var User = require('../models/user');

// register
router.get('/register', function (req, res) {
	res.status(200);
	res.send('register page');
});

// login
router.get('/login', function (req, res) {
	res.status(200);
	res.send('login page');
});

// register user
router.post('/register', function (req, res) {
	var email = req.body.email;
	var password = req.body.password;


	User.findOne({ email: email }, function (err, mail) {
		if (mail) {
			console.log("Already existing user: " + mail);
			res.status(400).send("Email adress already taken!");
		}
		else {
			var newUser = new User({
				email: email,
				password: password
			});
			User.createUser(newUser, function (err, user) {
				if (err) throw err;
				console.log("User created: " + user);
			});
			res.redirect(200, '/users/login');
		}
	});
});

router.post('/login', function (req, res) {
	var email = req.body.email;
	var password = req.body.password;


	User.findOne({ email: email }, function (err, user) {
		if (user) {
			console.log("User exists: " + user);
			console.log("Saved pw: " + user.password);
			console.log("Candidate pw: " + password);

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					console.log("logged in!");
					res.status(200).send("Successfully logged in!");
				}
				else {
					console.log("Wrong password!");
					res.status(400).send("Wrong password!");
				}
			})
		}
		else {
			var newUser = new User({
				email: email,
				password: password
			});
			User.createUser(newUser, function (err, user) {
				if (err) throw err;
				console.log("User created: " + user);
			});
			res.redirect(200, '/users/login');
		}
	});
});

/*router.get('/logout', function (req, res) {
	//req.logout();

	res.send('You are logged out');

	res.redirect('/users/login');
});*/

module.exports = router;
