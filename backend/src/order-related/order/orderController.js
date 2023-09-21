const { StatusCodes } = require("http-status-codes")
const { NotFoundError, BadRequestError } = require("../../utils/error")
const Order = require("../../utils/database/models/order")


const getOrderById = async (req, res) => {
    console.log("getOrderById")
    const { id } = req.params
    const order = await Order.query().findById(id)

    if (!order) {
        throw new NotFoundError("Order not found.")
    }

    res.status(StatusCodes.OK).json(order)
}
const getOrder = async (req, res) => {
    console.log("getOrder")
    const { userQueryObject } = req.user
    const order = await Order.query().where(userQueryObject)

    if (!order[0]) {
        throw new NotFoundError("Order not found.")
    }

    res.status(StatusCodes.OK).json(order[0])
}

const updateOrderById = async (req, res) => {
    console.log("updateOrderById")
    const { id } = req.params    

    const order = await Order.query().patchAndFetchById(
        id,
        {
            ...req.body
        },
        { new: true }
    )

    if (!order) {
        throw new NotFoundError("Order not found.")
    }

    res.status(StatusCodes.OK).json(order)
}

const deleteOrderById = async (req, res) => {
    console.log("deleteOrderById")
    const { id } = req.params
    const order = await Order.query().deleteById(id)


    if (!order) {
        throw new NotFoundError("Order not found.")
    }

    res.status(StatusCodes.NO_CONTENT).send()
}

module.exports = {
    getOrderById,
    updateOrderById,
    deleteOrderById,
    getOrder,
}
