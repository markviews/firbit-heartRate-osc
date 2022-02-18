import http from 'http';
import { Client } from 'node-osc';
const client = new Client('127.0.0.1', 9000);

//not ready. i still gotta change some stuff to accept input from a fitbit app that already exists and scale HR (user sets some values)

var server = http.createServer(function(request,response) {
  var hr = request.url.substring(request.url.indexOf("?") + 1);
  console.log(hr);
  client.send('/avatar/parameters/hr', parseInt(hr), () => {});
  response.end();
});

server.listen(8000);
console.log("Server running on port 8000");