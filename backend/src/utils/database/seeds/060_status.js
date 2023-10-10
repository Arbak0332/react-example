const Status = require("../models/status")
const { Model } = require("objection")

const statuses = [
    {
        id: 1,
        name: "Checkout",
    },
    {
        id: 2,
        name: "Paid",
    },
    {
        id: 3,
        name: "Sent",
    },
    {
        id: 4,
        name: "Delivered",
    },
    {
        id: 0,
        name: "Error",
    },
]

exports.seed = async function (knex) {
  Model.knex(knex)

  await Status.query().insert(statuses)
}
