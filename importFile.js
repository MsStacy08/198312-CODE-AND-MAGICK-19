
/**** 
cmd: node importFile event.txt
****/

const readline = require('readline');
const fs = require('fs');

var filename = 'c:\\temp\\event.txt'; 

// read commandline
if ( process.argv[2]) {
  filename =  process.argv[2];
}

DoMain();
  
  
// *** main ***
function DoMain() {
// check if file exists
fs.exists(filename, function(exists) {