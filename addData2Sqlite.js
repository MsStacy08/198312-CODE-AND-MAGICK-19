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
    con