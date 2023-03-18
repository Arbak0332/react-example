const Resource = require('../models/resource')
const { Model } = require('objection')

const resources = [
    { name: 'brand' },
    { name: 'product' },
    { name: 'rating' },
    { name: 'type' },
    { name: 'upload' },
    { name: 'order' },
    { name: 'order_item' },
    { name: 'user' },
    { name: 'role' },
    { name: 'permission' },
    { name: 'resource' },
    { name: 'access' },
]


exports.seed = async function (knex) {
    Model.knex(knex);

    await Resource.query().insert(resources)
};

