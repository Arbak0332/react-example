exports.up = function (knex) {
    return knex.schema
        .createTable('brand', table => {
            table.increments('id').primary()
            table.string('name', 40).notNullable().unique().index()
        })
        .createTable('type', table => {
            table.increments('id').primary()
            table.string('name', 40).notNullable().unique().index()
        })
        .createTable('product', table => {
            table.increments('id').primary()
            table.string('name', 300).notNullable().unique()
            table.float('price', 2).unsigned().notNullable()
            table.string('image_name', 100).notNullable()
            table.text('description').notNullable()
            table.integer('brand_id').notNullable().unsigned()
            table.integer('type_id').notNullable().unsigned()
            table.integer('quantity').unsigned().notNullable()

            table.foreign('brand_id').references('brand.id')
            table.foreign('type_id').references('type.id')
            table.timestamps(true, true)
        })
        .createTable('address', table => {
            table.increments('id').primary()
            table.string('street', 100).notNullable()
            table.string('city', 50).notNullable()
            table.string('post_code', 20).notNullable()
            table.string('country', 50).notNullable()
            table.enu('address_type', ['Main', 'Shipping'])
        })
        /************************* permission managment tables **********************/
        .createTable('role', table =>{
            table.increments('id').primary()
            table.string('name', 50).notNullable() // customer, consultant, admin, superadmin 
        })
        .createTable('resource', table =>{
            table.increments('id').primary()
            table.string('name', 50).notNullable() // table name
        })
        .createTable('permission', table => {
            table.increments('id').primary()
            table.string('name', 50).notNullable() // GET, POST, PATCH, DELETE
        })
        .createTable('access', table => {
            table.increments('id').primary()
            table.integer('role_id').unsigned().notNullable()
            table.integer('permission_id').unsigned().notNullable()
            table.integer('resource_id').unsigned().notNullable()

            table.foreign('role_id').references('role.id')
            table.foreign('permission_id').references('permission.id')
            table.foreign('resource_id').references('resource.id')
        })

        .createTable('user', table => {
            table.increments('id').primary()
            table.string('first_name', 50).notNullable()
            table.string('last_name', 50).notNullable()
            table.string('email', 100).notNullable().unique().checkRegex('/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
            table.string('password')
            table.integer('address_id').unsigned().notNullable()
            table.integer('role_id').unsigned().defaultTo(1).notNullable()

            table.foreign('address_id').references('address.id')
            table.foreign('role_id').references('role.id')
        })
        .createTable('oauth2_user', table => {
            table.increments('id').primary()
            table.integer('user_id').index()
            table.text('token').notNullable()

            table.foreign('address_id').references('address.id')
        })
        .createTable('rating', table => {
            table.increments('id').primary()
            table.integer('rate').notNullable().checkBetween([1, 5])
            table.integer('user_id').unsigned().notNullable()
            table.integer('product_id').unsigned().notNullable()

            table.foreign('user_id').references('user.id')
            table.foreign('product_id').references('product.id')
        })
        .createTable('status_static', table => {
            table.increments('id').primary()
            table.string('name', 50).notNullable()  // 'Watching, Processing, Shipped'
        })
        .createTable('order', table => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().notNullable()
            table.integer('address_id').unsigned().notNullable()
            table.date('created_at').notNullable()
            table.integer('status_id').defaultTo(1).notNullable() // default MAIN

            table.foreign('user_id').references('user.id')
            table.foreign('address_id').references('address.id')
            table.foreign('status_id').references('status.id')
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

// TODO cannot drop 
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('product')
        .dropTableIfExists('brand')
        .dropTableIfExists('type')
        .dropTableIfExists('order_item')
        .dropTableIfExists('order')
        .dropTableIfExists('rating')
        .dropTableIfExists('address')
        .dropTableIfExists('user')
        .dropTableIfExists('access')
        .dropTableIfExists('permission')
        .dropTableIfExists('resource')
        .dropTableIfExists('role')
};
