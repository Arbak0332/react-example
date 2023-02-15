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
    return knex.schema
        .createTable('product', table => {
            table.increments('id').primary()
            table.string('name', 300).notNullable()
            table.float('price', 2).unsigned().notNullable()
            table.string('image_name').notNullable()
            table.text('description').notNullable()
            table.enu('brand', brands).notNullable()
            table.enu('type', types).notNullable()
            table.integer('quantity').unsigned().notNullable()
            table.timestamps(true, true)
        })
        .createTable('user', table => {
            table.increments('id').primary()
            table.string('first_name', 30).notNullable()
            table.string('last_name', 50).notNullable()
            table.string('email', 100).notNullable().checkRegex('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
            table.string('password').notNullable()
            table.enu('permission', ['normal', 'admin']).defaultTo('normal').notNullable()
        })
        .createTable('rating', table => {
            table.increments('id').primary()
            table.integer('rate').notNullable().checkBetween([0, 10])
            table.integer('user_id').unsigned().notNullable()
            table.foreign('user_id').references('user.id')
        })
        .createTable('address', table => {
            table.increments('id').primary()
            table.string('street', 100).notNullable()
            table.string('city', 50).notNullable()
            table.string('post_code', 20).notNullable()
            table.string('country', 50).notNullable()
            table.enu('address_type', ['Main', 'Shipping'])
        })
        .createTable('order', table => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().notNullable()
            table.integer('address_id').unsigned().notNullable()
            table.date('created_at').notNullable()
            table.enu('status', ['Wathing', 'Processing', 'Shipped']).defaultTo('Wathing').notNullable()

            table.foreign('user_id').references('user.id')
            table.foreign('address_id').references('address.id')

        })
        .createTable('order_item', table => {
            table.increments('id').primary()
            table.integer('product_id').unsigned().notNullable()
            table.integer('quantity').unsigned().notNullable()
            table.integer('order_id').unsigned().notNullable()

            table.foreign('product_id').references('product.id')
            table.foreign('order_id').references('order.id')
        })

};


exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('order_item')
        .dropTableIfExists('order')
        .dropTableIfExists('rating')
        .dropTableIfExists('address')
        .dropTableIfExists('product')
        .dropTableIfExists('user')
};
