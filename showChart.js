
/**** 
cmd: node showChart.js
URLs: 
http://localhost:3005
****/

const fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var Chart = require('chart.js');
var result =[3,6,9];

app.get('/', function(req, res){
    let _resLine = '<h1>Ereignisse: ' + result+'</h1>';
    console.log('show chart:');
    console.log(_resLine);

    _html = "<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js'></script>"+