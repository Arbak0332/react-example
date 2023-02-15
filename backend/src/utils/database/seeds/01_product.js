const Product = require('../models/product')
const { Model } = require('objection');

const products = [
    {
        name: 'test0',
        price: 0,
        image_name: 'products/image0.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Sofa'
    },
    {
        name: 'test1',
        price: 1,
        image_name: 'products/image1.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Spring'
    },
    {
        name: 'test2',
        price: 2,
        image_name: 'products/image2.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Desk Chair'
    },
    {
        name: 'test3',
        price: 3,
        image_name: 'products/image3.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Air Chair'
    },
    {
        name: 'test4',
        price: 4,
        image_name: 'products/image4.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test5',
        price: 5,
        image_name: 'products/image5.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Chair'
    },
    {
        name: 'test6',
        price: 6,
        image_name: 'products/image6.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Wine Rack'
    },
    {
        name: 'test7',
        price: 7,
        image_name: 'products/image7.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Play Pool'
    },
    {
        name: 'test8',
        price: 8,
        image_name: 'products/image8.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test9',
        price: 9,
        image_name: 'products/image9.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test10',
        price: 10,
        image_name: 'products/image10.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test11',
        price: 11,
        image_name: 'products/image11.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand: 'Birdy',
        type: 'Coir'
    },
    {
        name: 'test12',
        price: 12,
        image_name: 'products/image12.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand: 'Lovely',
        type: 'Coir'
    }
]
exports.seed = async function (knex) {
    Model.knex(knex);
    // Deletes ALL existing entries
    await knex('product').del()
    await knex.raw('ALTER SEQUENCE product_id_seq RESTART WITH 1')

    await Product.query().insert(products)
};

