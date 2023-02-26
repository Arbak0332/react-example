const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Resource extends Model {
    static get tableName() {
        return "resource";
    }
}

module.exports = Resource