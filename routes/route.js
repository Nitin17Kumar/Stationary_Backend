const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer');

const createPost = require('../controler/admin/createPost');
const filterPost = require('../controler/admin/filterPost');

const signup = require('../controler/user/signupControler');
const login = require('../controler/user/loginControler');
const filterController = require('../controler/user/filterControler');
const cardController = require('../controler/user/cardControler');
const adminController = require('../controler/user/adminControler');
const reviewAdd = require('../controler/user/reviewAdd');
const reviewAll = require('../controler/user/reviewAllControler');

router.get('/admin/filterPost',filterPost);
router.post('/admin/createPost',upload.single('image'),createPost);


router.post('/signup',signup);
router.post('/login',login);
router.get('/filter',filterController);
router.get('/all',cardController);
router.post('/admin',adminController);
router.post('/addReview',reviewAdd);
router.get('/reviewAll',reviewAll);


module.exports = router;