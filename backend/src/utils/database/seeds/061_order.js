const Order = require("../models/order")
const { Model } = require("objection")

const orders = [
  {
    user_id: 1,
    address_id: 1,
    created_at: new Date(),
  },
  {
    user_id: 2,
    address_id: 2,
    created_at: new Date(),
  },
]

exports.seed = async function (knex) {
  Model.knex(knex)

  await Order.query().insert(orders)
}
