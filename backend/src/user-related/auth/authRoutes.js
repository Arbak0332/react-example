const express = require('express')
const router = express.Router()

const {googleSignIn, register,getGoogleOAuthURL, login, logout } = require('./authController')

require('./authMiddleware')

router.route("/auth/google_link").get(getGoogleOAuthURL)
router.route("/auth/google").get(googleSignIn)

router.route('/auth/google-callback')
        

router.route('/auth/register')
    .post(register)

router.route('/auth/login')
    .post(login)

router.route('/auth/logout')
    .post(logout)

module.exports = router