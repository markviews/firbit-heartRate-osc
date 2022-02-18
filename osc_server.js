import http from 'http';
import { Client } from 'node-osc';
const client = new Client('127.0.0.1', 9000);

var server = http.createServer(function(request,response) {
  var hr = request.url.substring(request.url.lastIndexOf("/") + 1);
  console.log(hr);
  client.send('/avatar/parameters/hr', parseInt(hr), () => {});
  response.end();
});

server.listen(8000);
console.log("Server running");