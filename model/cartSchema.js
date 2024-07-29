const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  product_name: {
    type: String,
    required: true,
  },
  cost:{
    type:String,
    required:true
  },
  items: {
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Review', reviewSchema);
