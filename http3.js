var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World!! \n');
  response.write('\n');
  response.end();

}).listen(8080);
console.log('server running at http://96.118.164.158:8080/');


