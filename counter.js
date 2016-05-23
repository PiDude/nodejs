//include system modules

var os = require('os');
var http = require('http');

// routine to find IP address of machine

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === 'IPv4' && !address.internal)  {
      addresses.push(address.address);
    }
  }
}




var userCount = 0;

http.createServer(function (request, response) {
  console.log('New connection');
  userCount++;

  response.writeHead(200, {'Content-Type': 'test/plain'});
  response.write('Hello\n');
  response.write('there are '+userCount+' visits.\n');
  response.end();
}).listen(8080);

console.log('server started on %s:8080', addresses);



