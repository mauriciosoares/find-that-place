'use strict';

var express = require('express');
var app = new express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.sendfile('app/index.html');
});

app.listen(8888);
console.log('Listening to localhost:8888');