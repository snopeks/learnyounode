var bl = require('bl')
var http = require('http')

http.get(process.argv[2], function(response){
  response.pipe(bl(function(err, data){
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
//I used data.toString twice to create the string and to create the integer
//but I could have made a data variable to simplify the process
//^^taken from the example solution.
//I also forgot the if(err) part of the problem. Remember the ERROR option!

  }))

})
