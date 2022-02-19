// add data to a sqlite databases in js
// by node addData2sqlite.js

const readline = require('readline');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

var res = ['mylog.txt','03.10.2018','m1','Area1','ok','Load']
let db;
// exist database
fs.exists('./event.db', function(exists) {
  if (exists) {
    // File exist
    console.log('open database');
    db = new sqlite3.Database('./event.db');
    DoMain(db,res);
  } else {
    // database is not existing
    console.log('open database and create table');
    db = new sqlite3.Database('./event.db',() => {
      db.run('CREATE TABLE logTable(logfile TEXT,logdate TEXT,referto TEXT, area TEXT,status TEXT,action TEXT)',() => {
      DoMain(db,res);  
      });
    
    });
  }  
  });   
function DoMain(db,res) {
  var logEntry = {
  logfile:"-",
  logdate:"-",
  referto:'-',
  area:"-",
  status:"-",
  action:"-"
};
    // map fields to entry
      entryDate = '-';
      logEntry.logfile = res[0];
      logEntry.logdate = res[1];
    
      logEntry.action = res[5]; 
      logEntry.area = res[2];
      logEntry.referto = res[3];
      logEntry.status = res[4];

      doAdd2DB(db,logEntry);
      console.log(logEntry);
}

function doAdd2DB(db,entry) {
db.run("INSERT OR IGNORE INTO logTable (