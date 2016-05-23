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

var interfaces = os.networkInterfaces();   // puts info into array interfaces

console.log(interfaces);

var addresses = [];       // will ultimately hold the public IP address

for (var k in interfaces)     {

  for (var k2 in interfaces[k])   {

    console.log(interfaces[k]);
    console.log(interfaces[k][k2]);

    var address = interfaces[k][k2];
    console.log(address);
    
    if (address.family ==='IPv4' && !address.internal) {
      addresses.push(address.address);            // .push is insert as last item.
    }
  }
}

console.log(addresses);

console.log('going to new stuff....');
console.log();

interfaces = os.networkInterfaces();

naddresses = [];

for (var n in interfaces)  {
  for (var n2 in interfaces[n])  {
    var naddress = interfaces[n][n2];
    if (naddress.family ==='IPv4' &&  !naddress.internal)  {
      naddresses.push(naddress.address);
    }
  }
}
console.log(naddresses);


