const OrderItem = require("../../utils/database/models/order_item")
const Order = require("../../utils/database/models/order")
const Inventory = require("../../utils/database/models/inventory")
const { Model } = require("objection")
const { BadRequestError } = require("../../utils/error")

/**
 *
 *
 */
const handleCreate = async (product_id, quantity, userQueryObject) => {
    return await Model.transaction(async (trx) => {
        // Check if is sufficient amount of products in inventory.
        const isSufficient = await isEnough(trx, product_id, quantity)
        if (!isSufficient) return false

        // Check if order cart exists in 'Checkout' state.
        const order = await Order.query(trx).where({
            ...userQueryObject,
            status_id: 1,
        })

        // if(order[0].status_id)
        // console.log(order);
        let tmpOrder = order[0]

        // if order cart does not exist then create new order cart
        if (!tmpOrder) {
            const newOrder = await Order.query(trx).insertAndFetch(
                userQueryObject
            )
            tmpOrder = newOrder
        }
        console.log(tmpOrder)
        //  if order is not in 'Checkout' state throw error
        if (tmpOrder.status_id !== 1)
            throw new BadRequestError(
                "Cannot update order that is not in Checkout state."
            )

        return await createOrUpdateOrderItem(
            trx,
            tmpOrder.id,
            product_id,
            quantity
        )
    })
}

/* 
    Check if is sufficient amount of products in Inventory
    and compare it with products in Checkout state that are in Order table
*/
const isEnough = async (trx, product_id, quantity) => {
    const productsInInvetory = await Inventory.query(trx).where({
        product_id: product_id,
    })

    const productsInCheckoutState = await OrderItem.query(trx)
        .select("order_item.quantity")
        .join("order", function () {
            this.on("order.id", "=", "order_item.order_id")
        })
        .where({
            "order.status_id": 1,
            "order_item.product_id": product_id,
        })
    const sumOfProducts = productsInCheckoutState.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
    )
    // console.log(productsInInvetory[0].quantity)
    // console.log(sumOfProducts + quantity)

    if (sumOfProducts + quantity <= productsInInvetory[0].quantity) return true
    else return false
}

const createOrUpdateOrderItem = async (trx, order_id, product_id, quantity) => {
    const orderItem = await OrderItem.query(trx).where({
        order_id: order_id,
        product_id: product_id,
    })
    if (!orderItem[0]) {
        return await OrderItem.query(trx).insert({
            product_id: product_id,
            quantity: quantity,
            order_id: order_id,
        })
    }
    const newQuantity = orderItem[0].quantity + quantity
    return await updateOrderItem(trx, orderItem[0].id, newQuantity)
}

const updateOrderItem = async (trx, order_item_id, quantity) => {
    console.log(order_item_id)
    console.log(quantity)
    const updatedOrderItem = await OrderItem.query(trx).patchAndFetchById(
        order_item_id,
        {
            quantity: quantity,
        }
    )
    if (!updatedOrderItem)
        throw new BadRequestError("Cannot create new order item.")

    return updatedOrderItem
}

module.exports = {
    handleCreate,
    updateOrderItem,
}
