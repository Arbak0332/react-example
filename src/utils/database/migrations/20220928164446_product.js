/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const types = [
    'Sofa Bed', 'Chair',
    'Play Pool', 'Computer Desk',
    'Standard Shoe Rack', 'Shoe Cabinet',
    'Collapsible', 'Sofa',
    'Sectional', 'Outdoor Chair',
    'Interactive', 'Air Chair',
    'Water Games', 'Entertainment Unit',
    'Wine Rack', 'Spring',
    'Coir', 'Teardrop',
    'Desk Chair'
]


exports.up = function (knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.integer('price').notNullable()
        table.string('image_name').notNullable()
        table.string('description').notNullable()
        table.integer('rating').notNullable()
        table.string('brand').notNullable()
        table.json('specification').notNullable()
        table.enu('type', types).notNullable()
        table.timestamps(true, true)
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('product')
};
