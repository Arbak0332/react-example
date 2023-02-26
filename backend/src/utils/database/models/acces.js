const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Access extends Model {
    static get tableName() {
        return "access";
    }
}

module.exports = Access