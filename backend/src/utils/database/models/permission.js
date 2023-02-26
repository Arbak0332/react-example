const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Permission extends Model {
    static get tableName() {
        return "permission";
    }
}

module.exports = Permission