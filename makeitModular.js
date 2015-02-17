var modulARR = require('./modulARR')
//I could define process.argv[2] and [3] here as var 'x' = process..
//and then use that as the modulARR arguments
modulARR(process.argv[2], process.argv[3],function(err, list){
if (err) {return console.error(err)}
  //this error is important because return stops the process
  //and doesn't waste more time.

for (var i = 0; i < list.length; i++)
  console.log(list[i])
//the for loop is defining the items necessary to print;
//list is ok to use because at this point the list contains
//only the matching extensions that have been pushed by the module.

}
)
