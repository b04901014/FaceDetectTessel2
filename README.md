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
* [create-react-app](https://github.com/facebook/create-react-app)

## How to run

1. Install dependencies
    ```
    git clone https://github.com/b04901014/FaceDetectTessel2.git
    
    cd FaceDetectTessel2
    
    npm install

    t2 init
    
    cd client
    
    npm install
    ```

2. Connect the Tessel2 to your computer and USB camera to Tessel2.

3. Connect to the Tessel2 using Wifi

    ```
    t2 wifi -n <SSID> -p <PWD> -s <PWD encryption>
    ```

4. Get access to the access point of the Tessel2 
    ```
    t2 ap -n ${tessel name} 
    
    t2 provision
    ```
    Then check the ip address by ifconfig (inet addr of wlp2s0). It should be something like 192.168.1.xxx.

5. Change the ip address to the corresponding one for the server.js and camera.js, also you can choose a port of your favor.
    ```
    cd ../
    
    node server.js

    t2 run camera.js
    ```
6. Run react
    ```
    cd client
    
    npm start
    ```
    
7. Go to http://localhost:${ReactPort}.

**Note the green LED will blink as the camera detects faces.**
