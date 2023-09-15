const OrderItem = require("../models/order_item")
const { Model } = require("objection")

const order_items = [
    {
        product_id: 1,
        quantity: 2,
        order_id: "69117069-bd61-4e1e-9ce5-792bcacdcc1e",
    },
    {
        product_id: 2,
        quantity: 1,
        order_id: "69117069-bd61-4e1e-9ce5-792bcacdcc1e",
    },
    {
        product_id: 1,
        quantity: 4,
        order_id: "f03eb7e3-c55f-4f24-8e57-cdfaedfe97ae",
    },
]

exports.seed = async function (knex) {
  Model.knex(knex)

  await OrderItem.query().insert(order_items)
}
