const Brand = require('../models/brand')
const { Model } = require('objection')
const furnitureBrands = [
    { name: 'Lumina Furnishings' },
    { name: 'Haven Home' },
    { name: 'Oakwood Interiors' },
    { name: 'Heritage Furniture Co.' },
    { name: 'Fyra Home' },
    { name: 'Valtic Designs' },
    { name: 'Cadenza Furniture Co.' },
    { name: 'Nexus Furnishings' },
    { name: 'Solstice Home Interiors' },
    { name: 'Kavalier Furniture Co.' },
    { name: 'Ascend Furniture Co.' }
];

exports.seed = async function (knex) {
    Model.knex(knex);

    await Brand.query().insert(furnitureBrands)
};
