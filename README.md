# Project Description

Project Name: FaceDetectTessel2 for NTUEE ESLab HW2

Author: Li-Wei Chen, Ya-Liang Chang

Using Tessel2, USB camera, opencv, and socket.io to implement realtime face detection.

Please see the report for implementation details.

## Build Packages

* [tessel-av](https://github.com/tessel/tessel-av)
* [node-opencv](https://github.com/peterbraden/node-opencv)
* [socket.io](https://github.com/socketio/socket.io)
* [socket.io-client](https://github.com/socketio/socket.io-client)
* [socket.io-stream](https://github.com/nkzawa/socket.io-stream)

## How to run

1. Install dependencies
    ```
    git clone https://github.com/b04901014/FaceDetectTessel2.git
    
    npm install

    t2 init
    ```

2. Connect the Tessel2 to your computer and USB camera to Tessel2.

3. Connect to the Tessel2 using Wifi

    ```
    t2 wifi -n <SSID> -p <PWD> -s <PWD encryption>
    ```

3. Get access to the access point of the Tessel2 
    ```
    t2 ap -n ${tessel name} 
    ```
    Then check the ip address by ifconfig (inet addr of wlp2s0). It should be something like 192.168.1.xxx.

4. Change the ip address to the corresponding one for the server.js and camera.js, also you can choose a port of your favor.
    ```
    node server.js

    t2 run camera.js
    ```

5. Go to http://${YourIp}:${YourPort}.

    **Refresh the page to see newer image, since the web is not responsive.**

    **Note the green LED will blink as the camera detects faces.**
