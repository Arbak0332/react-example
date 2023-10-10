const express = require("express")
const router = express.Router()

const {
    getOrderById,
    updateOrderById,
    deleteOrderById,
    getOrder,
} = require("./orderController")

router
    .route("/:id")
    .patch(updateOrderById)
    .delete(deleteOrderById)
    .get(getOrderById)

router.route("/").get(getOrder)

module.exports = router
