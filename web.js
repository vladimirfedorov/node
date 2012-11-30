var express = require('express');
var _ = require('underscore');

var app = express.createServer(express.logger());

app.get('/', function(req, res) {
	res.send('Hello! Testing node.js.\n');
});

app.get('/blog', function(req, res) {
	res.send('Blog');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});