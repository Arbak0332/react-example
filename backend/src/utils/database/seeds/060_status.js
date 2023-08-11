const Status = require("../models/status")
const { Model } = require("objection")

const statuses = [
  {
    name: "Checkout",
  },
  {
    name: "Paid",
  },
  {
    name: "Sent",
  },
  {
    name: "Finished",
  },
]

exports.seed = async function (knex) {
  Model.knex(knex)

  await Status.query().insert(statuses)
}
