var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.options('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Authorization, Accept, Origin, Content-Length, X-Requested-With');
  res.header('Access-Control-Max-Age', 10);
  res.sendStatus(200);
});






let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Learn listening on ${port}!`));

module.exports = app;