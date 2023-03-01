const { Model } = require('objection');

exports.seed = async function (knex) {
    Model.knex(knex);
    // Deletes ALL existing entries

    await knex('rating').del()
    await knex.raw('ALTER SEQUENCE rating_id_seq RESTART WITH 1')

    await knex('user').del()
    await knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 1')

    await knex('address').del()
    await knex.raw('ALTER SEQUENCE address_id_seq RESTART WITH 1')

    await knex('address_type').del()
    await knex.raw('ALTER SEQUENCE address_type_id_seq RESTART WITH 1')

    await knex('access').del()
    await knex.raw('ALTER SEQUENCE access_id_seq RESTART WITH 1')

    await knex('resource').del()
    await knex.raw('ALTER SEQUENCE resource_id_seq RESTART WITH 1')

    await knex('role').del()
    await knex.raw('ALTER SEQUENCE role_id_seq RESTART WITH 1')

    await knex('permission').del()
    await knex.raw('ALTER SEQUENCE permission_id_seq RESTART WITH 1')

    await knex('product').del()
    await knex.raw('ALTER SEQUENCE product_id_seq RESTART WITH 1')

    await knex('brand').del()
    await knex.raw('ALTER SEQUENCE brand_id_seq RESTART WITH 1')

    await knex('type').del()
    await knex.raw('ALTER SEQUENCE type_id_seq RESTART WITH 1')

};

