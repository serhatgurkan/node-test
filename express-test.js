var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(8000, function() {
  console.log('listenin on port 8000');
});
