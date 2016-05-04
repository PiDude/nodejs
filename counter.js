var http = require('http');

var userCount = 0;

http.createServer(function (request, response) {
  console.log('New connection');
  userCount++;

  response.writeHead(200, {'Content-Type': 'test/plain'});
  response.write('Hello\n');
  response.write('there are '+userCount+' visits.\n');
  response.end();
}).listen(8080);

console.log('server started on 96.118.164.158:8080');

