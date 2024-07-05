const Card = require('../../model/cardSchema'); // Ensure your model is named correctly

module.exports = async (req, res) => {
  try {
    const { product_name, price, detail, quantity } = req.params;
    const query={}
    if (product_name) {
      query.product_name = product_name;
    }
    if (price) {
      query.price = price;
    }
    if (detail) {
      query.detail = detail;
    }
    if (quantity) {
      query.quantity = quantity;
    }
    const cardData = await Card.find(query);
    res.status(200).json({
      success: true,
      data: cardData
    });
  } 
  catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
