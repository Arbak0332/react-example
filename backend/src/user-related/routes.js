const express = require('express')
const router = express.Router()

const authRoutes = require('./auth/authRoutes')

router.use('', authRoutes)

module.exports = router