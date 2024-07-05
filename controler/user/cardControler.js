const Card = require('../../model/cardSchema'); // Ensure your model is named correctly

module.exports = async (req, res) => {
  try {
    const cardData = await Card.find({});
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
