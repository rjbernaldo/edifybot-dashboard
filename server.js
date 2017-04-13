var express = require('express');
var app = express();
var PORT = 5001;

app.use(express.static(__dirname + '/dist'))
app.use('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, function () {
  console.log('Server started on port:', PORT);
})