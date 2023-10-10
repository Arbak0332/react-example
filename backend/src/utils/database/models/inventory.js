const { Model } = require("objection")
const knex = require("../knexfile")
Model.knex(knex)
class Inventory extends Model {
  static get tableName() {
    return "inventory"
  }
}

module.exports = Inventory
