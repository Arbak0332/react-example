const express = require("express")
const router = express.Router()

const {
    createOrderItem,
    updateOrderItemById,
    deleteOrderItemById,
    getOrderItemsByOrderId,
} = require("./orderItemController")

router
    .route("/orders/items/:id")
    .patch(updateOrderItemById)
    .delete(deleteOrderItemById)

router.route("/orders/items").get(getOrderItemsByOrderId).post(createOrderItem)

module.exports = router
