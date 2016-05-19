var os = require('os');


var platform = os.platform();
console.log('the platform is ',platform);
console.log('the platform is %s forever !', platform);
console.log();

var ostype = os.type();
console.log(ostype);
console.log();

var cpu = os.cpus();
console.log('the cpu is %j', cpu);
console.log();

console.log(cpu);
console.log();

var interfaces = os.networkInterfaces();

console.log(interfaces);

console.log('now one by one.....');
console.log(interfaces[0]);
console.log(interfaces[1][1]);
console.log(interfaces[2]);
console.log(interfaces[3]);

console.log('\n');

var addresses = [];

for (var k in interfaces)     {
  for (var k2 in interfaces[k])   {

    var address = interfaces[k][k2];
    
    if (address.family ==='IPv4' && !address.internal) {
      addresses.push(address.address);
    }
  }
}

console.log(addresses);

