const express = require("express")
const router = express.Router()

const {
    createOrderItem,
    updateOrderItemById,
    deleteOrderItemById,
    getOrderItemsByOrderId,
} = require("./orderItemController")

router
    .route("/items/:id")
    .patch(updateOrderItemById)
    .delete(deleteOrderItemById)

router.route("/items").get(getOrderItemsByOrderId).post(createOrderItem)

module.exports = router
