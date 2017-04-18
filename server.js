var http = require('http');
var socketio = require('socket.io');

var bodyParser = require('body-parser');
var express = require('express');

var server = http.createServer(app);
var io = socketio(server);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req,res) {
	res.send('Hello Bro')
});

app.post('/', function(req,res) {
	console.log('post / =' + JSON.stringify(req.body));
	res.status(200).send('got it');
});

app.post('/echo', function(req,res) {
	console.log('post /echo = ' + JSON.stringify(req.body));
	io.socketd.emit('echo', req.body);
	res.status(201).send(req.body);
}

server.listen(3000,function () {
	console.log('example app listening on port 3000!')
});