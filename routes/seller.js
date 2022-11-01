const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/seller');
const auth = require('../middleware/auth');
const {checkIfSeller} = require('../middleware/requiredUser');
const upload = require('../utils/multer.util');
router.get('/dashboard',sellerController.getDashbord);
router.get('/myproducts',auth,checkIfSeller,sellerController.getMyProducts);
router.get('/addproduct',auth,checkIfSeller,sellerController.getAddProduct);
router.post('/addproduct',upload.single('image'),auth,checkIfSeller,sellerController.postAddProduct);
module.exports = router;