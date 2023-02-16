const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Type extends Model {
    static get tableName() {
        return "type";
    }
}

module.exports = Type