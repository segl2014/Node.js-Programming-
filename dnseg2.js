const dns = require('dns');
dns.resolve4('www.javapoint.com',(err,address) => {
    if(err) throw err;
    console.log('address: ${JSON.stringify(address)}');
    address.forEach((a) => {
        dns.reverse(a,(err,hostnames) => {
            if(err){
                throw err;
            }
            console.log('reverse for ${a}: ${JSON.stringify(hostnames)}');
        });
    });
});