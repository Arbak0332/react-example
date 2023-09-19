const express = require("express")
const router = express.Router()

const {
    getOrderById,
    updateOrderById,
    deleteOrderById,
} = require("./orderController")

router
    .route("/orders/:id")
    .get(getOrderById)
    .patch(updateOrderById)
    .delete(deleteOrderById)

module.exports = router
