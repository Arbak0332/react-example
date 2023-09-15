const { StatusCodes } = require("http-status-codes")
const { NotFoundError, BadRequestError } = require("../../utils/error")
const { handleCreate } = require("./orderItemUtils")
const { cookieOptions } = require("../../utils/cookieOptions")
const Order = require("../../utils/database/models/order")
const jwt = require('jsonwebtoken')

const createOrderItem = async (req, res) => {
    const { product_id, quantity } = req.body

    const result = await handleCreate(product_id, quantity, req.user)

    if (!result)
        throw new BadRequestError(
            "There is not sufficient amount of products in inventory."
        )

    const jwtValue = jwt.sign(
        req.user,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES }
    )

    res.status(StatusCodes.CREATED)
        .cookie("jwt", jwtValue, cookieOptions)
        .json()
}

const getOrderItemsByOrderId = async (req, res) => {
    console.log(req.user)
    const { order_id } = req.user

    const result = await Order.query()
        .where({ "order_item.order_id": order_id })
        .join("order_item", function () {
            this.on("order.id", "=", "order_item.order_id")
        })

    res.status(StatusCodes.OK).json({ result })
}

const updateOrderItemById = async (req, res) => {
    const { orderId } = req.params
    const {} = req.body

    const order = await OrderItem.query().findByIdAndUpdate(
        orderId,
        {
            /* updated order data */
        },
        { new: true }
    )

    if (!order) {
        throw new NotFoundError("Order.query() not found")
    }

    res.status(StatusCodes.OK).json(order)
}

const deleteOrderItemById = async (req, res) => {
    const { orderId } = req.params
    const order = await OrderItem.query().findByIdAndDelete(orderId)

    if (!order) {
        throw new NotFoundError("Order.query() not found")
    }

    res.status(StatusCodes.NO_CONTENT).send()
}

module.exports = {
    createOrderItem,
    updateOrderItemById,
    deleteOrderItemById,
    getOrderItemsByOrderId,
}
