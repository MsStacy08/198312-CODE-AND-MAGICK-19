
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
  if (exists) {
    // File exist + import
    console.log( 'read file -> ' + process.argv[2]);
    DoReadFile(filename);
  } else {
  // File is not existing
    console.log('File ' + filename + ' is not existing');
    process.exit(1);  
  }
  });
// *** End main ***

// read file
function DoReadFile(filename) {
// open file
const rl = readline.createInterface({
  input: fs.createReadStream(filename),
  crlfDelay: Infinity
});
// help fields
var keys = ['action1',
            'action2',
            'action3'];
var LogAction = ['Ereignis1','Ereignis2','Ereignis3'];
var logEntry = {
  logfile:"-",
  logdate:"-",
  referto:'-',
  area:"-",
  status:"-",