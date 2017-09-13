var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.redirect('/code/challenge')
});

app.get('/code/challenge', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Content-Type", "application/json; charset=utf-8")
	res.status(201)
	
	res.json({
		"email": "oweismo.applicant@gmail.com",
		"website": "https://github.com/Protometheus/zesty-node",
		"github_repo_link": "https://github.com/Protometheus/zesty-node",
		"name": {
			"first": "Mohammad",
			"last": "Oweis"
		}
	});
})

app.listen(process.env.PORT || 5000)
