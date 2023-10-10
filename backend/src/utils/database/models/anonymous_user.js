const { Model } = require("objection")
const knex = require("../knexfile")
const { v4: uuidv4 } = require("uuid")

Model.knex(knex)
class AnonymousUser extends Model {
    static get tableName() {
        return "anonymous_user"
    }
    $beforeInsert() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

module.exports = AnonymousUser
