var express = require('express');
var router = express.Router();

// get homepage
router.get('/', function(req, res){
	res.status(200);
	res.send("This is the root route!");
});

module.exports = router;
