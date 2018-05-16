# Project Description

Project Name : FaceDetectTessel2 for NTUEE ESLab HW2

Author : Li-Wei Chen

Using tessel2, USB camera, opencv, and socket.io to implement realtime face detection.

## Build Packages

* [tessel-av](https://github.com/tessel/tessel-av)
* [node-opencv](https://github.com/peterbraden/node-opencv)
* [socket.io](https://github.com/socketio/socket.io)
* [socket.io-client](https://github.com/socketio/socket.io-client)
* [socket.io-stream](https://github.com/nkzawa/socket.io-stream)

## How to run

```
git clone https://github.com/b04901014/FaceDetectTessel2.git

npm install

t2 init
```
Get your tessel2 and USB camera set.

Get access to the access point of tessel2 (t2 ap -n $(tessel name) to create access point), and then check the ip address by ifconfig.

Change the ip address to the corresponding one for the server and tessel2, also you can choose a port of your favor.
```
node server.js

t2 run camera.js
```
Go to http://${YourIp}:${YourPort}.

**Refresh the page to see newer image, since the web is not responsive.**

**Note the green LED will blink as the camera detects faces**
