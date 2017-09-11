var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Hello, everybody!\n');
});

app.get('/code/challenge', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send('Welcome to the challenge!\n');
})
