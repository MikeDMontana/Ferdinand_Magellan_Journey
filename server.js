var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', 4000);
app.use('/', express.static(path.join(__dirname, 'public')));
var server = app.listen(app.get('port'), function() {
  console.log("%c Express server listening" + server.address().port);
});
