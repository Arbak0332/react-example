const { Model } = require("objection")
const knex = require("../knexfile")
const Product = require('./product')
Model.knex(knex)
class OrderItem extends Model {
    static get tableName() {
        return "order_item"
    }
    static relationMappings = {
        product: {
            relation: Model.BelongsToOneRelation,
            modelClass: Product,
            join: {
                from: "order_item.product_id",
                to: "product.id",
            },
        },
    }
}

module.exports = OrderItem
