const OrderItem = require("../../utils/database/models/order_item")
const Order = require("../../utils/database/models/order")
const Inventory = require("../../utils/database/models/inventory")
const { Model } = require("objection")
const { BadRequestError } = require("../../utils/error")

const handleCreate = async (product_id, quantity, user) => {
    try {
        const result = Model.transaction(async (trx) => {
            /* 
                check if is sufficient amount of products in Inventory
                and compare it with products in Checkout state that are in Order table
            */
            const isSufficient = await isEnough(trx, product_id, quantity)

            if (user.order_id === null) {
                const newOrder = await Order.query(trx).insert({
                    user_id: user.user_id,
                    anonymous_user_id: user.anonymous_user_id,
                })

                // console.log(newOrder)
                user.order_id = newOrder.id
            }

            if (isSufficient) {
                const newOrderItem = await OrderItem.query(trx).insert({
                    product_id: product_id,
                    quantity: quantity,
                    order_id: user.order_id,
                })
                if(!newOrderItem)
                    throw new BadRequestError('Cannot create order item.')
                // console.log(newOrderItem);
                return true
            } else {
                return false
            }
        })
        return result
    } catch (error) {
        console.error(error)
    }
}

const isEnough = async (trx, product_id, quantity) => {
    try {
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

        if (sumOfProducts + quantity <= productsInInvetory[0].quantity)
            return true
        else return false
    } catch (error) {
        console.error(error)
    }
}

const ifCartExist = async (trx, order_id) => {
    try {
        const result = await Order.query(trx).where({})
    } catch (error) {
        console.error(error)
    }
}

const signToken = (obj)=>{
    
}

module.exports = {
    handleCreate,
}
