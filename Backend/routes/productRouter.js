const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')

router.route('/products')
    .post(productCtrl.createProduct)
    .get(productCtrl.getProducts)

router.route('/product/:id')
    .put(productCtrl.updateProduct)
    .delete(productCtrl.deleteProduct)

module.exports = router