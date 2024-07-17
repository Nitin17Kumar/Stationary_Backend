const Card = require('../../model/cardSchema'); // Ensure your model is correctly imported

module.exports = async (req, res) => {
  try {
    const { product_name, price, detail, quantity } = req.query; // Using req.query to get query parameters

    const query = {};
    if (product_name) {
      query.product_name = product_name;
    }
    if (price) {
      query.price = Number(price); // Ensure price is converted to a number
    }
    if (detail) {
      query.detail = detail;
    }
    if (quantity) {
      query.quantity = Number(quantity); // Ensure quantity is converted to a number
    }

    console.log('Query:', query); // Log the query for debugging

    const cardData = await Card.find(query); // Using find() to filter based on query
    console.log('Card Data:', cardData); // Log the result for debugging

    res.status(200).json({
      success: true,
      data: cardData
    });
  } catch (err) {
    console.error('Error:', err); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
