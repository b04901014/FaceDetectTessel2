const io = require('socket.io-client');
var ss = require('socket.io-stream');
var socket = io.connect("http://192.168.1.198:8888");
var led = require('tessel-led');
const av = require('tessel-av');
const camera = new av.Camera({
  width: 640,
  height: 480,
  fps: 10,
});
const stream = camera.stream();
s2 = ss.createStream();
stream.pipe(s2);
ss(socket).emit('putstream', s2);

socket.on("blink", () => {    
  led.red.blink(500, function(){
    console.log('green LED was on for 500ms but is now off.')
  });
});
