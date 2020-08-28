const dns = require('dns');
dns.lookup('www.javapoint.com',(err,addresses,family) =>{
    console.log('addresses:', addresses);
    console.log('family:',family);
});