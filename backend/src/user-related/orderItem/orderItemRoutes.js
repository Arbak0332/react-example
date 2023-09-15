const express = require("express")
const router = express.Router()
const { getTokenData } = require("../order/orderMiddleware")
const { handleUserData } = require("./orderItemMiddleware")

const {
    createOrderItem,
    updateOrderItemById,
    deleteOrderItemById,
    getOrderItemsByOrderId,
} = require("./orderItemController")


router.use(getTokenData)

router
    .route("/orders/items/:id")
    .patch(getTokenData, updateOrderItemById)
    .delete(deleteOrderItemById)

router
    .route("/orders/items")
    .get(getOrderItemsByOrderId)
    .post( handleUserData, createOrderItem)

module.exports = router
