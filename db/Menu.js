const mongoose = require("mongoose");
const MenuSchema = new mongoose.Schema({
  order: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  under: {
    type: String,
    trim: true,
    required: true
  },
  type: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
});
const Menu = mongoose.model("Menu", MenuSchema, "Menu");

module.exports = Menu;
