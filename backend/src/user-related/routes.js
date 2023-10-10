const express = require("express")
const router = express.Router()

const authRoutes = require("./auth/authRoutes")
const userRoutes = require("./user/userRoutes")

router.use("", authRoutes)
router.use("", userRoutes)

module.exports = router
