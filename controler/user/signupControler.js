const Form = require('../../model/formSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  try {
    const { name, email, image, password, isAdmin } = req.body;
    // Check if all required fields are provided
    if (!name || !email  || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Check if the email is already in use
    const existingUser = await Form.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email already in use'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const payload = { email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

    console.log("JWT Secret:", token);
    let formData = await Form.create({
      name,
      email,
      image,
      password: hashedPassword,
      isAdmin
    });

    formData=formData.toObject();
    formData.token = token;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), 
      httpOnly: true,
    };
    
    res.cookie('token', token, options);

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
