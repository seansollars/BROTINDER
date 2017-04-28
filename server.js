var http = require('http');
var socketio = require('socket.io');
var Mongo = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var express = require('express');

const MONGO_URL = 'mongodb://localhost:27017/iot';

Mongo.connect(MONGO_URL, function(err,db) {
	if(err) {
		// TODO: handle error
	}

	Mongo.ops = {};
	
	
	Mongo.ops.find = function(collection,json,callback) {
	db.collection(collection).find(json).toArray(function(err,docs) {
		if(callback) callback(err,docs);
	});
};
	
	Mongo.ops.insert = function(collection,json, callback) {
		db.collection(collection).insert(json,function(err,docs) {
			if(callback) callback(err,result);
		});
	};
});

var server = http.createServer(app);
var io = socketio(server);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(__dirname + '/WebClient'));



app.post('/', function(req,res) {
	console.log('post / =' + JSON.stringify(req.body));
	res.status(200).send('got it');
});

app.post('/echo', function(req,res) {
	console.log('post /echo = ' + JSON.stringify(req.body));
	io.sockets.emit('echo', req.body);
	Mongo.ops.insert('echo', req.body,function(err,result) {
		if(err)
			res.status(500).send(error);
	else 
		res.status(201).send(req.body);
   });
});

app.post('/bro', function(req, res) {
	var bro = req.body;
	console.log('post /bro = ' + JSON.stringify(bro));
	res.send('ok bro');
});

server.listen(3000,function () {
	console.log('example app listening on port 3000!')
});