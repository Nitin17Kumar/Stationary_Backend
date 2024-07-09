const Review = require('../../model/reviewSchema'); // Ensure your model is named correctly

module.exports = async (req, res) => {
  try {
    const {product_name}   = req.body ; 
    const query = product_name ? { product_name } : {};
    const Data = await Review.find(query);
    
    res.status(200).json({
      success: true,
      data: Data
    });
  } 
  catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
