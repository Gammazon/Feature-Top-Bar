const mongoose = require("mongoose");
const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  Category: {
    type: String,
    trim: true,
    required: true
  },
  key: {
    type: String,
    trim: true,
    required: true
  }
});
const Products = mongoose.model("Products", ProductsSchema, "Products");

module.exports = Products;
