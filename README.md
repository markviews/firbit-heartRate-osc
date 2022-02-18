# VRChat Fitbit Heartrate OSC
Send your heartrate to a vrchat parameter from a fitbit using OSC

### Setup
1. Download the project and edit the parameter you want to edit on line 8 of `osc_server.js`
2. Install app on your fitbit (Ionic, Versa, Versa 2, Versa Lite version here) (Sense, Versa 3 version here)
3. Set IP address in app settings to your computer's local IP, port `8000`
4. Install [Node.js](https://nodejs.org/en/download/) and required packages `npm i http node-osc`
5. Run `osc_server_start.bat`
6. Open app on watch

### Notes / Credits
* App format copied from [heart-of-frogg](https://github.com/bfroggio/heart-of-frogg/)
* While using the app you must connect your watch to your phone via bluetooth, and your phone to the same wifi as your computer
