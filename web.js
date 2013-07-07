var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buffer = new Buffer(fs.readFileSync('./index.html', 'utf8'));
  buffer.toString('utf8');
  response.send(buffer);
  //response.send('Hello World2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
