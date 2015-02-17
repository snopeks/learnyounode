var http = require('http')


//console.log(process.argv[2])

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    //^^ is telling the data to be returned as a string
    //instead of a buffer that needs to be turned into a string.
    var str = ' ';
    //console.log(response);

    response.on("data", function (data){
      str += data
      console.log(data)
    })
})

//))
