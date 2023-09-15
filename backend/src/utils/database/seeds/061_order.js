const Order = require("../models/order")
const { Model } = require("objection")

const orders = [
    {
        id: "69117069-bd61-4e1e-9ce5-792bcacdcc1e",
        user_id: 1,
        address_id: 1,
        created_at: new Date(),
    },
    {
        id: "f03eb7e3-c55f-4f24-8e57-cdfaedfe97ae",
        user_id: 2,
        address_id: 2,
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
