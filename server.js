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

var file = new stream.PassThrough();

app.get('/', function(req, res) {
  const head = {
    'Content-Type': 'image/jpeg'
  }
  res.writeHead(200, head);
  file.pipe(res);
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

server.listen(8888, "192.168.1.198");


