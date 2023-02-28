const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class AddressType extends Model {
    static get tableName() {
        return "address_type";
    }
}

module.exports = AddressType