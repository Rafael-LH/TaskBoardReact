const mongoose = require('mongoose');

const Schema = mongoose.Schema

const mySchema = new Schema({
  product: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  }
})

const model = mongoose.model('products', mySchema)

module.exports = model;
