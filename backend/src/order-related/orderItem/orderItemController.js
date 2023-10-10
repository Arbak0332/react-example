const { StatusCodes } = require("http-status-codes")
const { NotFoundError, BadRequestError } = require("../../utils/error")
const { handleCreate, updateOrderItem } = require("./orderItemUtils")
const { cookieOptions } = require("../../utils/cookieOptions")
const OrderItem = require("../../utils/database/models/order_item")
const Order = require("../../utils/database/models/order")
const Product = require("../../utils/database/models/product")
const { getJWT } = require("../order/orderUtils")
const { Model } = require("objection")

const createOrderItem = async (req, res) => {
    // console.log(req.user)
    console.log(req.body)
    const { product_id, quantity } = req.body
    const { userQueryObject } = req.user
    const result = await handleCreate(product_id, quantity, userQueryObject)

    if (!result)
        throw new BadRequestError("There are not enough products in stock.")

    const token = getJWT(userQueryObject)
    res.status(StatusCodes.CREATED)
        .cookie("jwt", token, cookieOptions)
        .json(result)
}

const getOrderItemsWithProductsByUserId = async (req, res) => {
    const { userQueryObject } = req.user
    console.log(userQueryObject);
    const order = await Order.query().where(userQueryObject)

    if (!order[0]) res.status(StatusCodes.OK).json()

    const result = await OrderItem.query()
        .where("order_id", order[0].id)
        .withGraphFetched("product")

    res.status(StatusCodes.OK).json(result)
}

const updateOrderItemById = async (req, res) => {
    const { id } = req.params
    const { quantity } = req.body

    const updatedOrderItem = await updateOrderItem(null, id, quantity)

    if (!updatedOrderItem) {
        throw new NotFoundError("Order item not found.")
    }

    res.status(StatusCodes.OK).json(updatedOrderItem)
}

const deleteOrderItemById = async (req, res) => {
    const { id } = req.params
    const order = await OrderItem.query().deleteById(id)

    if (!order) {
        throw new NotFoundError("Order item not found")
    }

    res.status(StatusCodes.NO_CONTENT).send()
}

module.exports = {
    createOrderItem,
    updateOrderItemById,
    deleteOrderItemById,
    getOrderItemsWithProductsByUserId,
}
