var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, everybody!\n');
});

app.get('/code/challenge', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send('Welcome to the challenge!\n');
})

app.listen(process.env.PORT || 5000)