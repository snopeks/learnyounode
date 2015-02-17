/*Write a program that uses a single synchronous filesystem operation to
read a file and print the number of newlines it contains to the console(stdout),
similar to running "cat file | wc-l." The full path to the file to read will be
provided as the first command-line argument*/


var fs = require('fs')
//requires filesystem = fs
//first commandline argument = process.argv[2]

var contents = fs.readFileSync(process.argv[2]) //<<reads the file!
var lines = contents.toString().split('\n').length - 1
//var lines takes contents, turns it into string, splits it on \n and
//subtracts the length by 1 to account for space at the end.

console.log(lines)
//gives us the result we want! 
