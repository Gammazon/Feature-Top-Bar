let express = require("express");
let bodyParser = require("body-parser");
var mongoose = require("mongoose");
const password = require("./password");

mongoose
  .connect(
    `mongodb+srv://mattyshiloh23:${password}@gammazon-topbar-2wyhz.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Gammazon"
    }
  )
  .then(() => {
    console.log("connected to mongo!");
  });
var db = mongoose.connection;

var app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use(express.static("dist"));

app.listen(2424, function() {
  console.log("listening on port 2424!");
});
