var express = require('express'),
    app = express(),
    path = require('path');

    //basic server
    //app.get('/', function(req, res){
    //  res.send('hello world');
    //});

    // static file server
    app.get('/', function(req,res) {
      res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.listen(8080, function(){
        console.log('Listening on :8080')
    });
