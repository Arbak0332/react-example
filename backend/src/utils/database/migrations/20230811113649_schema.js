exports.up = function (knex) {
  return (
    knex.schema
      .createTable("brand", (table) => {
        table.string("name", 40).notNullable().primary()
      })
      .createTable("type", (table) => {
        table.string("name", 40).notNullable().primary()
      })
      .createTable("material", (table) => {
        table.string("name", 40).notNullable().primary()
      })
      .createTable("color", (table) => {
        table.string("name", 40).notNullable().primary()
      })
      .createTable("product", (table) => {
        table.increments("id").primary()
        table.string("name", 50).notNullable().unique()
        table.float("price", 2).unsigned().notNullable()
        table.string("image_name", 100).notNullable()
        table.text("description").notNullable()
        table.string("brand").notNullable()
        table.string("type").notNullable()
        table.string("material").notNullable()
        table.string("color").notNullable()

        table.foreign("brand").references("brand.name")
        table.foreign("type").references("type.name")
        table.foreign("material").references("material.name")
        table.foreign("color").references("color.name")
        table.timestamps(true, true)
      })
      .createTable("inventory", (table) => {
        table.increments("id").primary()
        table.integer("product_id").unsigned().notNullable()
        table.integer("quantity").unsigned().notNullable()
        table.foreign("product_id").references("product.id")

        table.timestamps(true, true)
      })
      .createTable("address_type", (table) => {
        table.increments("id").primary()
        table.string("name", 30).notNullable() // Main, Shipping
      })
      .createTable("address", (table) => {
        table.increments("id").primary()
        table.string("street", 100).notNullable()
        table.string("city", 50).notNullable()
        table.string("post_code", 20).notNullable()
        table.integer("address_type_id").unsigned().notNullable()

        table.foreign("address_type_id").references("address_type.id")
      })
      /************************* permission managment tables **********************/
      .createTable("role", (table) => {
        table.increments("id").primary()
        table.string("name", 50).notNullable() // customer, consultant, admin, superadmin
      })
      .createTable("resource", (table) => {
        table.increments("id").primary()
        table.string("name", 50).notNullable() // table name
      })
      .createTable("permission", (table) => {
        table.increments("id").primary()
        table.string("name", 50).notNullable() // GET, POST, PATCH, DELETE
      })
      .createTable("access", (table) => {
        table.increments("id").primary()
        table.integer("role_id").unsigned().notNullable()
        table.integer("permission_id").unsigned().notNullable()
        table.integer("resource_id").unsigned().notNullable()

        table.foreign("role_id").references("role.id")
        table.foreign("permission_id").references("permission.id")
        table.foreign("resource_id").references("resource.id")
      })

      .createTable("user", (table) => {
        table.increments("id").primary()
        table.string("first_name", 50).notNullable()
        table.string("last_name", 50).notNullable()
        table.string("email", 100).notNullable().unique()
        table.string("password")
        table.integer("address_id").unsigned().notNullable()
        table.integer("role_id").unsigned().defaultTo(1).notNullable()

        table.foreign("address_id").references("address.id")
        table.foreign("role_id").references("role.id")
      })
      .createTable("rating", (table) => {
        table.increments("id").primary()
        table.integer("rate").notNullable().checkBetween([1, 5])
        table.integer("user_id").unsigned().notNullable()
        table.integer("product_id").unsigned().notNullable()

        table.foreign("user_id").references("user.id")
        table.foreign("product_id").references("product.id")
      })
      .createTable("status", (table) => {
        table.increments("id").primary()
        table.string("name", 10).notNullable() // 'Checkout, Paid, Sent, Finished'
      })
      .createTable("order", (table) => {
        table.increments("id").primary()
        table.integer("user_id").unsigned().notNullable()
        table.integer("address_id").unsigned().notNullable() // primary user address
        table.date("created_at").notNullable()
        table.integer("status_id").defaultTo(1).notNullable() // default Checkout
        table.foreign("user_id").references("user.id")
        table.foreign("address_id").references("address.id")
        table.foreign("status_id").references("status.id")
      })
      .createTable("order_item", (table) => {
        table.increments("id").primary()
        table.integer("product_id").unsigned().notNullable()
        table.integer("quantity").unsigned().notNullable()
        table.integer("order_id").unsigned().notNullable()

        table.foreign("product_id").references("product.id")
        table.foreign("order_id").references("order.id")
      })
  )
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("order_item")
    .dropTableIfExists("order")
    .dropTableIfExists("status")
    .dropTableIfExists("rating")
    .dropTableIfExists("user")
    .dropTableIfExists("access")
    .dropTableIfExists("permission")
    .dropTableIfExists("resource")
    .dropTableIfExists("role")
    .dropTableIfExists("address")
    .dropTableIfExists("address_type")
    .dropTableIfExists("inventory")
    .dropTableIfExists("product")
    .dropTableIfExists("brand")
    .dropTableIfExists("type")
    .dropTableIfExists("material")
    .dropTableIfExists("color")
}
