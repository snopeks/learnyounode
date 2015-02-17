var fs = require('fs')
var path = require('path')


module.exports = function(dirname, exten, callback) {
var filelist = []
//here I defined the array that will hold all the items we want to
//print for the problem.
  fs.readdir(dirname, function(err,list) {
    if (err) {
      return callback(err)
    }
    for (var i = 0; i < list.length; i++) {

      //if statement compares the extension we are looking for
      //with the extension of the existing files being evaluated.
      //console log exten + list[i] to see what is actually being compared.
      if ('.' + exten ===  path.extname(list[i])) {
            filelist.push(list[i]);
            //filelist contains all the items from the list array
            //that match the extension we are looking for. Then it sends those
            //list items back to the original program file.
      }
    }
    callback(null,filelist)
  })
}
