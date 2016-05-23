
// include system modules

var os = require('os');
var http = require('http');

// routine to find IP address of VM

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces)   {
  for (var k2 in interfaces[k])   {
    var address = interfaces[k][k2];
    if (address.family === 'IPv4' && !address.internal)   {
      addresses.push(address.address);
    }
  }
}




//  the hello world server

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(" It's alive !! ");
  response.write('\n');
  response.end();

}).listen(8080);

console.log()
console.log('server running on %s:8080', addresses);
console.log('use port 8080');




