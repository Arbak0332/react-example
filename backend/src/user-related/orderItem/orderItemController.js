const { StatusCodes } = require("http-status-codes")
const { NotFoundError, BadRequestError } = require("../../utils/error")
const { handleCreate, updateOrderItem } = require("./orderItemUtils")
const { cookieOptions } = require("../../utils/cookieOptions")
const OrderItem = require("../../utils/database/models/order_item")
const Order = require("../../utils/database/models/order")
const {getJWT} = require('../order/orderUtils')

const createOrderItem = async (req, res) => {
    console.log("createOrderItem")
    const { product_id, quantity } = req.body
    const { userQueryObject } = req.user
    const result = await handleCreate(
        product_id,
        quantity,
        userQueryObject 
    )



    if (!result)
        throw new BadRequestError("There are not enough products in stock.")

    const token = getJWT(userQueryObject)
    res.status(StatusCodes.CREATED).cookie('jwt', token, cookieOptions).json(result)
}

const getOrderItemsByOrderId = async (req, res) => {
    console.log("getOrderItemsByOrderId")
    const { userQueryObject } = req.user

    const order = await Order.query().where(userQueryObject)

    if (!order[0])
        throw new NotFoundError(
            "Order not found."
        )

    const result = await OrderItem.query()
        .select("order_item.*")
        .where({ "order_item.order_id": order[0].id })
        .join("order", function () {
            this.on("order_item.order_id", "=", "order.id")
        })

    res.status(StatusCodes.OK).json(result)
}

const updateOrderItemById = async (req, res) => {
    console.log("updateOrderItemById")
    const { id } = req.params
    const {quantity} = req.body

    const updatedOrderItem = await updateOrderItem(null, id, quantity) 

    if (!updatedOrderItem) {
        throw new NotFoundError("Order item not found.")
    }

    res.status(StatusCodes.OK).json(updatedOrderItem)
}

const deleteOrderItemById = async (req, res) => {
    console.log("deleteOrderItemById")
    const { orderId } = req.params
    const order = await OrderItem.query().findByIdAndDelete(orderId)

    if (!order) {
        throw new NotFoundError("Order not found")
    }

    res.status(StatusCodes.NO_CONTENT).send()
}

module.exports = {
    createOrderItem,
    updateOrderItemById,
    deleteOrderItemById,
    getOrderItemsByOrderId,
}
