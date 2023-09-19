const { StatusCodes } = require("http-status-codes")
const { NotFoundError, BadRequestError } = require("../../utils/error")
const Order = require("../../utils/database/models/order")


const getOrderById = async (req, res) => {
    console.log("getOrderById")
    const { userQueryObject } = req.user
    const order = await Order.query().where(userQueryObject)

    if (!order) {
        throw new NotFoundError("Order not found.")
    }

    res.status(StatusCodes.OK).json()
}

const updateOrderById = async (req, res) => {
    console.log("updateOrderById")
    const { id } = req.params
    const {
        /* extract and validate updated order data from req.body */
    } = req.body

    const order = await Order.query().findByIdAndUpdate(
        id,
        {
            /* updated order data */
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
    const order = await Order.query().findByIdAndDelete(id)


    if (!order) {
        throw new NotFoundError("Order not found.")
    }

    res.status(StatusCodes.NO_CONTENT).send()
}

module.exports = {
    getOrderById,
    updateOrderById,
    deleteOrderById,
}
