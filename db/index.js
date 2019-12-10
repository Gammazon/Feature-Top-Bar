var mongoose = require("mongoose");
const password = require("../server/password");

mongoose.connect(
  `mongodb+srv://mattyshiloh23:${password}@gammazon-topbar-2wyhz.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Gammazon"
  }
);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connected to mongo here!"));
module.exports = db;
