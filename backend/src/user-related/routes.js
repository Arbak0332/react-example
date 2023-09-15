const express = require('express')
const router = express.Router()

const authRoutes = require('./auth/authRoutes')
const userRoutes = require('./user/userRoutes')
const orderRoutes = require('./order/orderRoutes')
const orderItemRoutes = require('./orderItem/orderItemRoutes')

router.use('', authRoutes)
router.use('', userRoutes)
router.use('', orderItemRoutes)
router.use('', orderRoutes)

module.exports = router