const express = require('express')
const router = express.Router()
const typeRouter = require('./types/typeRoutes')
const brandRouter = require('./brands/brandRoutes')
const uploadRouter = require('./upload/uploadRoutes')

const { 
    getAllProductsStatic,
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./productController')

router.use('', typeRouter)
router.use('', brandRouter)
router.use('', uploadRouter)


router.route('/')
    .get(getAllProducts)
    .post(createProduct)

router.route('/:id')
    .get(getProduct)
    .patch(updateProduct)
    .delete(deleteProduct)

module.exports = router
