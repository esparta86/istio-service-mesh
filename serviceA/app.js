var express = require('express');
const os = require('os');

var app = express();


app.get('/serviceb', function (req, res) {
  const hostName = os.hostname();
  res.send('This is the service B!!!! running in hostname : ${hostName}');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});