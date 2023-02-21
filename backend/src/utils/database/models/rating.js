const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Rating extends Model {
    static get tableName() {
        return "rating";
    }
}
module.exports = Rating