const Card = require('../../model/cardSchema'); 
const cloudinary = require('../../config/cloudinary');


module.exports = async (req, res) => {
  try {
    const { product_name, price, detail, quantity } = req.body;
    const file = req.file;

    if (!product_name || !price || !file) {
      console.log(product_name, price, detail, quantity,file);
      return res.status(400).json({
        success: false,
        message: 'Product name, price, and image are required'
      });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: 'auto'
    });

    // Create a new card with the provided data
    const cardData = await Card.create({
      product_name,
      price,
      detail,
      quantity,
      image: result.secure_url
    });

    // Send a success response with the created card data
    res.status(200).json({
      success: true,
      data: cardData
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

