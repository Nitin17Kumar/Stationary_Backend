const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where uploaded files should be stored
  },
  filename: function (req, file, cb) {
    // Use Date.now() to ensure unique filenames
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|gif/;
  const mimetype = allowedFileTypes.test(file.mimetype);
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  
  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error('Error: Images only!'), false);
  }
};

const limits = {
  fileSize: 5 * 1024 * 1024 // 5MB file size limit
};

const upload = multer({
  storage: storage,
  limits: limits,
  fileFilter: fileFilter
});

module.exports = upload;
