var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res) {

var rstream = fs.createReadStream(process.argv[3])
rstream.pipe(res)
//console.log()
})
server.listen(process.argv[2])
