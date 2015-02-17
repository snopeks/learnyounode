/*Create a program that prints a list of files in a given directory, filtered by
the extension of the files. You will be provided a directory name as the first
argument to your program (e.g. '/path/to/dir/') and a file extension to filter
by as the second argument. For example, if you get 'txt' as the second argument
then you will need to filter the list to only files that end with .txt. Note that
 the second argument will not come prefixed with a '.'.
The list of files should be printed to the console, one file per line.
You must use asynchronous I/O.
*/

var fs = require('fs');
//another filesystem requirement

var path = require('path');
//a node module we are going to use

var arg = process.argv[2];
//turning process.argv[2] into var arg

var fileEXT =process.argv[3];
//turning process.argv[3] into var fileEXT

fs.readdir(arg, function(err, list) {
//readdir is reading a directory, which is the argv[2]!
for (var i = 0; i <list.length; i++) {
//now we are creating a for loop to go through the directory, through all the
//[ith] items in the directory, and increase through the length of i.
   //console.log(list[i])
   //console.log('.' + fileEXT)
   //console.log(path.extname(list[i]))
   if (path.extname(list[i]) == ('.' + fileEXT)) {
     //now if the extension we are looking for matches the extension of [i] then
     //console.log it! path extname gives the extension of the file i. But it
     //doesn't include the '.' so that's why we have '.' + fileEXT. 
     console.log(list[i])
   }

 }


})
