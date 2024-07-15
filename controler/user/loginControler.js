const Form = require('../../model/formSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body; // Changed from req.body to req.query

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    let query = {};
    if (email) {
      query.email = email;
    }
    const user = await Form.findOne(query);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const payload = { email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3d' });

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie('token', token, options);

    res.status(200).json({
      success: true,
      token,
      data: user
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
