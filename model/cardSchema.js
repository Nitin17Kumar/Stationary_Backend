const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    product_name:{
      type: String,
      require: true
    },
    price:{
      type:Number,
      require:true
    },
    detail:{
      type:String
    },
    quantity:{
      type:Number
    },
    image:{
      type:String,
      require:true
    }
  }
)
module.exports = mongoose.model("card",cardSchema)