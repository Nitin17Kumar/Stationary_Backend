const Review = require('../../model/reviewSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  try {
    const { address,product_name,cost,items } = req.body;
    if (!address || !product_name || !cost || !items) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    let formData = await Review.create({
        address,product_name,cost,items
    });
    res.status(200).json({
      success: true,
      data: formData
    });
  } catch (err) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
