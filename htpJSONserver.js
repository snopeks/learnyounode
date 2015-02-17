var http = require('http');
var url = require('url');

function parsetime(time) {
  return { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() }

}
function unixtime (time) { return { unixtime : time.getTime() } }

var server = http.createServer(function(req, res){

  //console.log(req);
  var URL = url.parse(req.url, true);
  var isoTime = URL.query.iso;
  var isoDate = new Date(isoTime)

var result;
  if(URL.pathname === "/api/parsetime"){
    //DO SOMETHING
    result = parsetime(isoDate)
  }

  else if(URL.pathname === "/api/unixtime") {
    result = unixtime(isoDate)
  }

  if(result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(result), 'utf-8');
    res.end()
  } else {
    res.writeHead(404)
    res.end();
  }

})
console.log(process.argv[2])
server.listen(process.argv[2])
