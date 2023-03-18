const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Material extends Model {
    static get tableName() {
        return "material";
    }
    static get idColumn() {
        return 'name';
    }
}

module.exports = Material