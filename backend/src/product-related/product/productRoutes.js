const express = require('express')
const router = express.Router()

const { 
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./productController')


router.route('/')
    .get(getAllProducts)
    .post(createProduct)

router.route('/:id')
    .patch(updateProduct)
    .delete(deleteProduct)

router.route('/:name')
    .get(getProduct)

module.exports = router
