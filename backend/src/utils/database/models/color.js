const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Color extends Model {
    static get tableName() {
        return "color";
    }
    static get idColumn() {
        return 'name';
    }
}

module.exports = Color