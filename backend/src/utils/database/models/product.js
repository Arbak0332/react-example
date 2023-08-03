const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Product extends Model {
  static get tableName() {
    return "product";
  }
  static get idColumn() {
    return "id";
  }
}

module.exports = Product