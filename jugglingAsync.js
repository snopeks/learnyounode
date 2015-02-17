var http = require('http')
var bl = require('bl')
//console.log(process.argv)
var List = []
var count = 0
for (var i = 2; i < process.argv.length; i++){
  keepTrack(i)

}


function keepTrack (i){

  http.get(process.argv[i], function(response){
  response.pipe(bl(function(err, data) {
    //console.log(response)
    if (err) {
      return console.error(err)
    }
    List[i] = data.toString()
    count++
    if (count === 3){
      //console.log(List)
      List.forEach(function(item){
        console.log(item)

      })}
  }))

})
}
