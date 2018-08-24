var http = require('http');
server = http.createServer(function (req, res) {
    res.writeHeader(200,{"Content-Type":"text/plain"});
    res.end("HelloWorld!");
});
server.listen(7070);
console.log("httpd start @7070");