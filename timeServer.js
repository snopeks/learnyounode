var net = require('net')
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function(socket){
    var currentDate = new Date()
    var printedDate = currentDate.getFullYear().toString() + "-"
      + zeroFill(currentDate.getMonth()+ 1) + "-"
      + zeroFill(currentDate.getDate()) + " "
      + zeroFill(currentDate.getHours()) + ":"
      + zeroFill(currentDate.getMinutes()) + "\n"
//console.log(printedDate)
    socket.end(printedDate)
})
server.listen(process.argv[2])
console.log(process.argv[2])
