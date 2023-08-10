const Product = require('../models/product')
const { Model } = require('objection');

const products = [
    {
        name: 'test0',
        price: 0,
        image_name: 'image0.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Sofa",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test1',
        price: 1,
        image_name: 'image1.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Dining table",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test2',
        price: 2,
        image_name: 'image2.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Armchair",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test3',
        price: 3,
        image_name: 'image3.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Bookshelf",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test4',
        price: 4,
        image_name: 'image4.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Desk",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test5',
        price: 5,
        image_name: 'image5.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Bed frame",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test6',
        price: 6,
        image_name: 'image6.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Coffee table",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test7',
        price: 7,
        image_name: 'image7.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Dresser",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test8',
        price: 8,
        image_name: 'image8.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Desk",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test9',
        price: 9,
        image_name: 'image9.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.', quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Desk",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test10',
        price: 10,
        image_name: 'image10.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Desk",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test11',
        price: 11,
        image_name: 'image11.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand: 'Lumina Furnishings',
        type: "Desk",
        material: "Oak",
        color:"Brown"
    },
    {
        name: 'test12',
        price: 12,
        image_name: 'image12.jpeg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.',
        quantity: 1,
        brand: 'Haven Home',
        type: "Desk",
        material: "Oak",
        color:"Brown"
    }
]
exports.seed = async function (knex) {
    Model.knex(knex);

    await Product.query().insert(products)
};

