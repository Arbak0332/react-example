const { Model } = require('objection');

exports.seed = async function (knex) {
    Model.knex(knex);
    // Deletes ALL existing entries
    await knex('product').del()
    await knex.raw('ALTER SEQUENCE product_id_seq RESTART WITH 1')
 
    await knex('type').del()
    await knex.raw('ALTER SEQUENCE type_id_seq RESTART WITH 1')

    await knex('brand').del()
    await knex.raw('ALTER SEQUENCE brand_id_seq RESTART WITH 1')

    

};

