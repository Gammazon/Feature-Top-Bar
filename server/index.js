var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use(express.static("dist"));

app.listen(2424, function() {
  console.log("listening on port 2424!");
});
