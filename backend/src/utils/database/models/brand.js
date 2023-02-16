const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Brand extends Model {
    static get tableName() {
        return "brand";
    }
}

module.exports = Brand