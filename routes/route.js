const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // Import the multer middleware

const createPost = require('../controller/admin/createPost');
const filterPost = require('../controller/admin/filterPost');

const signup = require('../controller/user/signupController');
const login = require('../controller/user/loginController');
const filterController = require('../controller/user/filterController');
const cardController = require('../controller/user/cardController');
const adminController = require('../controller/user/adminController');
const reviewAdd = require('../controller/user/reviewAdd');
const reviewAll = require('../controller/user/reviewAllController');
const addcart = require('../controller/user/cartController');

// Admin Routes
router.get('/admin/filterPost', filterPost);
router.post('/admin/createPost',upload.single('image'), createPost);

// User Routes
router.post('/signup',upload.single('image'), signup);
router.post('/login', login);
router.get('/filter', filterController);
router.get('/all', cardController);
router.post('/admin', adminController);
router.post('/addReview', reviewAdd);
router.get('/reviewAll', reviewAll);
router.post('/addCart', addcart);

module.exports = router;
