var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('publicFiles'));
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.listen(80, function () {
	console.log('app launched on port: 80')
})