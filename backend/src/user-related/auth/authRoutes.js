const express = require('express')
const router = express.Router()
const passport = require('passport')

const {googleSignIn, register} = require('./authController')

require('./authMiddleware')

router.route('/auth/google')
    .get(passport.authenticate('google', { scope: ['profile', 'email'] , session:false}));

router.route('/auth/google-callback')
    .get(
        passport.authenticate('google', { failureRedirect: '/login', session:false }),
        googleSignIn)

router.route('/auth/register')
    .post(register)

module.exports = router