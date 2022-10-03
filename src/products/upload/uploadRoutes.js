const express = require('express')
const router = express.Router()

const {getURL} = require('./uploadController')

router.route('').get(getURL)

module.exports = router