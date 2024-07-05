const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const configureCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
  } catch (err) {
    console.log('Error in Cloudinary configuration');
    console.log(err);
  }
};

configureCloudinary();

module.exports = cloudinary;
