/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.integer('price').notNullable()
        table.string('image').notNullable()
        table.string('description').notNullable()
        table.integer('rating').notNullable()
        table.string('brand').notNullable()
        table.json('specification').notNullable()
        table.string('type').notNullable()
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('product')
};
