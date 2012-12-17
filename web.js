var express = require('express');
var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var response;

var app = express.createServer(express.logger());

app.get('/', function(req, res) {
	getPageContents("home", res);
});

app.get('/:page', function(req, res) {
	getPageContents(req.params.page, res);
});

app.get('*', function(req, res) {
	getPageContents("404", res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function getPageContents(name, res) {
	response = res;
	if (path.existsSync("pages/"+name+".html")) {
		fs.readFile("pages/"+name+".html", "binary", function(e, content) {
			if (e) throw e;
			response.send(content);;
		});
		
		//return "Page: /pages/" + name + ".html";
	}
	else
	{
		fs.readFile("pages/404.html", "binary", function(e, content) {
			if (e) throw e;
			response.send(content);
		});
	}
}