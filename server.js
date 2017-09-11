var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, everybody!\n');
});

app.get('/code/challenge', function(req, res) {
	res.send('Welcome to the challenge!\n');
})

app.listen(8080);
console.log('Listening on port 8080...');