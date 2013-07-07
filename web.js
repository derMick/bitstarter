var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file = fs.readFileSync('index.html');
  file = buf.toString('utf8');
  response.send(file);
  //response.send('Hello World2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
