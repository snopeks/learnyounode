/*Write a program that uses a single asynchronous filesystem operation to read
a file and print the number of newlines it contains to the console (stdout),
similar to running cat file | wc -l.
The full path to the file to read will be provided as the first
command-line argument. */

var fs = require('fs');
//filesystem operation
var arg = process.argv[2]
//turning process.argv[2] into var arg.

/*callbacks take 2 fields: error, and data. the data comes from process.argv*/
fs.readFile(arg, function(err, contents) {
//fs. readFile(filename, function callback(err, data){}). You put the filename 
//in first then the callback.
var lines = contents.toString().split('\n').length - 1
//this is the same line as myfirstIO. It does the stuff to the data.
console.log(lines)
})
