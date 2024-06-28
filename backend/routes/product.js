const express = require('express');
const { getProducts, newProduct, getSingleProduct, updateProdcut, deleteProdcut } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/products/new').post(newProduct);
router.route('/products/:id').get(getSingleProduct);
router.route('/products/:id').put(updateProdcut);
router.route('/products/:id').delete(deleteProdcut);
module.exports = router;