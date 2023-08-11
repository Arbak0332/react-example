const { Model } = require("objection")
const knex = require("../knexfile")
Model.knex(knex)
class Order extends Model {
  static get tableName() {
    return "order"
  }
}

module.exports = Order
