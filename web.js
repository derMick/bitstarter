var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file = fs.readFileSync('index.html');
  var buffer = new Buffer();
  buffer = file;
  buffer.toString('utf8');
  response.send(buffer);
  //response.send('Hello World2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
