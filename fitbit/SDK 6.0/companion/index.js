import * as messaging from "messaging";
import { settingsStorage } from "settings";

var url = `http://${JSON.parse(settingsStorage.getItem("ipAddress")).name}:${JSON.parse(settingsStorage.getItem("port")).name}/heart/`;

messaging.peerSocket.addEventListener("message", (evt) => {
  fetch(url + evt.data, {method: 'POST'});
});