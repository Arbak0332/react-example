const OrderItem = require("../models/order_item")
const { Model } = require("objection")

const order_items = [
  {
    product_id: 1,
    quantity: 2,
    order_id: 1,
  },
  {
    product_id: 2,
    quantity: 1,
    order_id: 1,
  },
  {
    product_id: 1,
    quantity: 4,
    order_id: 2,
  },
  
]

exports.seed = async function (knex) {
  Model.knex(knex)

  await OrderItem.query().insert(order_items)
}
