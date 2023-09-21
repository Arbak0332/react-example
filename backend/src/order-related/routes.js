const express = require("express")
const router = express.Router()

const orderRoutes = require("./order/orderRoutes")
const orderItemRoutes = require("./orderItem/orderItemRoutes")

const {
    getTokenData,
    setUserQueryObject,
    handleUserData,
} = require("../order-related/order/orderMiddleware")

router.use(getTokenData)
router.use(handleUserData)
router.use(setUserQueryObject)

router.use("", orderItemRoutes)
router.use("", orderRoutes)


module.exports = router
