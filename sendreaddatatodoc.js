var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    // res.end('hey friends')
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('syo dawgs, now listening to port 3000')