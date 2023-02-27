const express = require('express')
const router = express.Router()

const {googleSignIn, register} = require('./authController')

router.route('/auth/google')
    .post(googleSignIn)

router.route('/auth/register')
    .post(register)

module.exports = router