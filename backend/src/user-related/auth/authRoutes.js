const express = require('express')
const router = express.Router()

const {googleSignIn} = require('./authController')

router.route('/auth/google')
    .post(googleSignIn)

module.exports = router