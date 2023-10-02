const express = require("express")
const router = express.Router()

const {
    createOrderItem,
    updateOrderItemById,
    deleteOrderItemById,
    getOrderItemsWithProductsByUserId,
} = require("./orderItemController")

router
    .route("/items/:id")
    .patch(updateOrderItemById)
    .delete(deleteOrderItemById)

router.route("/items").get(getOrderItemsWithProductsByUserId).post(createOrderItem)

module.exports = router
