import * as document from "document";
import { HeartRateSensor } from "heart-rate";
import * as messaging from "messaging";
import { me } from "appbit";

// Disable timeout, so app stays open when screen turns off
me.appTimeoutEnabled = false;

const hrmData = document.getElementById("heartRate");
const hrm = new HeartRateSensor({ frequency: 1 });

hrm.addEventListener("reading", () => {
  hrmData.text = hrm.heartRate;
  sendMessage(hrm.heartRate);
});

hrm.start();

function sendMessage(text) {
   try {
     messaging.peerSocket.send(text)
   } catch (error) {}
}