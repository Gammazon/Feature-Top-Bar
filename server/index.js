let express = require("express");
let bodyParser = require("body-parser");
var mongoose = require("mongoose");
const password = require("./password");
const db = require("../db/index");
const Menu = require("../db/Menu");
const Products = require("../db/Products");
const cors = require("cors");

var app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

app.use(express.static("dist"));

app.get("/all", async (req, res) => {
  const products = await Products.find({});

  try {
    res.send(products);
  } catch (err) {
    res.status(502).send(err);
  }
});

app.get("/:pkey", async (req, res) => {
  const product = await Products.find({ key: req.params.pkey });

  try {
    res.send(product);
  } catch (err) {
    res.status(502).send(err);
  }
});

app.listen(2424, function() {
  console.log("listening on port 2424!");
});
module.exports = app;
