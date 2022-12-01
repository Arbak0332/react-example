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

const brands = [
    'FabHomeDecor', 'Alexus',
    'Bestway', 'induscraft',
    'Smart Choice Furniture', 'Cello Furniture',
    'Birdy', 'Durian',
    'ARRA', 'HomeTown',
    'Furnstyl', 'RoyalOak',
    'Intex', 'Stellar',
    'Art n Beyond', 'Springwel',
    'Nilkamal', 'ORKA',
    'Comfort Couch', 'Lovely'
]


exports.up = function (knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.integer('price').notNullable()
        table.string('image_name').notNullable()
        table.text('description').notNullable()
        table.integer('rating').notNullable()
        table.enu('brand', brands).notNullable()
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
