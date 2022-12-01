const express = require('express')
const router = express.Router()
const { 
    updateProductValidation,
    createProductValidation
} = require('./productMiddleware')

const { 
    getAllProductsStatic,
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./productController')

router.route('/static')
    .get(getAllProductsStatic)

router.route('/')
    .get(getAllProducts)
    .post(createProductValidation, createProduct)

router.route('/:id')
    .get(getProduct)
    .patch(updateProductValidation,updateProduct)
    .delete(deleteProduct)

module.exports = router
