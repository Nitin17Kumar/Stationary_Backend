const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  detail: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Card', cardSchema);
