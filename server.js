var express = require('express');
var app = express();
var path = require('path');

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/root/index.html'));
});

app.use((req, res,next)=>{
    res.sendFile(path.join(__dirname + '/root/errors/404.html'));
});

// Server Start up function.
var server = app.listen( process.env.PORT || 2000, function(){
    console.log('Listening on port ' + server.address().port);
});
  
