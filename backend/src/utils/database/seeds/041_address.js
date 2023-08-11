const addresses = [
    {
        street: '123 Main St',
        city: 'Kielce',
        post_code: '12345',
        address_type_id: 1
    },
    {
        street: '456 Elm St',
        city: 'Warszawa',
        post_code: '12345',
        address_type_id: 2
    },
    {
        street: '789 Oak St',
        city: 'Anytown',
        post_code: '12345',
        address_type_id: 1
    },
    {
        street: '1011 Pine St',
        city: 'Anytown',
        post_code: '12345',
        address_type_id: 2
    },
    {
        street: '1213 Maple St',
        city: 'Anytown',
        post_code: '12345',
        address_type_id: 1
    }
]

const Address = require('../models/address')
const { Model } = require('objection')


exports.seed = async function (knex) {
    Model.knex(knex);

    await Address.query().insert(addresses)
};

