const mongoose = require('mongoose');
const { Schema } = mongoose;

const fileSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, required: true },
  lastModified: { type: Number, required: true },
  lastModifiedDate: { type: Date, required: true },
});

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
    type: fileSchema,
    required: true,
  }
});

module.exports = mongoose.model('Card', cardSchema);
