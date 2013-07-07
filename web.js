var express = require('express');
var fs = require('fs');
buf = new Buffer();
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = fs.readFileSync('index.html');
  buf.toString('utf8');
  response.send(buf);
  //response.send('Hello World2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
