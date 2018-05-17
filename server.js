const os = require('os');
const port = 8888;
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const ss = require('socket.io-stream');
const pc = require('./cvdetect');
const stream = require('stream');
const path = require('path');
const cors = require('cors')

var file = new stream.PassThrough();
var chunk;

app.use(cors());

file.on('data', (ck) => {
  chunk = 'data:image/jpeg;base64,' + ck.toString('base64');
});

app.get('/', function(req, res) {
  res.jsonp({ result: chunk });
});


app.get('/hello', function(req, res) {
  res.jsonp({ result: "Hello World" });
});


io.on('connection', (socket) => {
  ss(socket).on('putstream', function(stream) {
    stream.on('data', (frame) => {
      console.log('camera data received');
      pc.procimg(frame, (x) => {
        file.push(x);
      },
      () => {
        io.sockets.emit('blink');
      });
    });
  });
});

server.listen(8888, "192.168.1.160");


