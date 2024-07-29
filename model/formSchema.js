const mongoose = require('mongoose');
const { Schema } = mongoose;


const formSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type:String,
    required: true,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Form', formSchema);
