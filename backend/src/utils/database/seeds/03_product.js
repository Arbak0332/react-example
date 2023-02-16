const Product = require('../models/product')
const { Model } = require('objection');

const products = [
    {
        name: 'test0',
        price: 0,
        image_name: 'products/image0.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 1
    },
    {
        name: 'test1',
        price: 1,
        image_name: 'products/image1.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 2
    },
    {
        name: 'test2',
        price: 2,
        image_name: 'products/image2.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 3
    },
    {
        name: 'test3',
        price: 3,
        image_name: 'products/image3.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 4
    },
    {
        name: 'test4',
        price: 4,
        image_name: 'products/image4.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 8
    },
    {
        name: 'test5',
        price: 5,
        image_name: 'products/image5.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 5
    },
    {
        name: 'test6',
        price: 6,
        image_name: 'products/image6.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 6
    },
    {
        name: 'test7',
        price: 7,
        image_name: 'products/image7.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 7
    },
    {
        name: 'test8',
        price: 8,
        image_name: 'products/image8.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 8
    },
    {
        name: 'test9',
        price: 9,
        image_name: 'products/image9.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',        quantity: 1,
        brand_id: 1,
        type_id: 8
    },
    {
        name: 'test10',
        price: 10,
        image_name: 'products/image10.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand_id: 1,
        type_id: 8
    },
    {
        name: 'test11',
        price: 11,
        image_name: 'products/image11.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand_id: 1,
        type_id: 8
    },
    {
        name: 'test12',
        price: 12,
        image_name: 'products/image12.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand_id: 2,
        type_id: 8
    }
]
exports.seed = async function (knex) {
    Model.knex(knex);

    await Product.query().insert(products)
};

