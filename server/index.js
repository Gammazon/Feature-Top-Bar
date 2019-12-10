let express = require("express");
let bodyParser = require("body-parser");
var mongoose = require("mongoose");
const password = require("./password");
const db = require("../db/index");
const Menu = require("../db/Menu");
const cors = require("cors");

var app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use(express.static("dist"));

app.get("/all", async (req, res) => {
  const menu = await Menu.find({});

  try {
    res.send(menu);
  } catch (err) {
    res.status(502).send(err);
  }
});

app.listen(2424, function() {
  console.log("listening on port 2424!");
});
module.exports = app;
