/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
require('dotenv').config('../../../.env')
const products = require('./products.json')
// const knex = require('../index')

const test = require('./test_seed/product')
exports.seed = async function (knex) {

    // Deletes ALL existing entries
    await knex('product').del()
    await knex.raw('ALTER SEQUENCE product_id_seq RESTART WITH 1')

    if (process.env.ENV === 'test') {
        return await test(knex)
    }
    else {
        await populate()
    }
};

const populate = async () => {

    for (let i = 0; i < products.length; ++i) {
        const image_name = `products/image${i}.jpeg`

        const result = await knex('product').insert({
            name: products[i].product_name,
            price: products[i].retail_price,
            image_name: image_name,
            description: products[i].description,
            rating: products[i].product_rating,
            brand: products[i].brand,
            type: products[i].type
        })
        console.log(result)
    }

}