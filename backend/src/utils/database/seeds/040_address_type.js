
const AddressType = require('../models/address_type')
const { Model } = require('objection')

const address_types = [
    {name: 'Main'},
    {name: 'Shipping'}
]

exports.seed = async function (knex) {
    Model.knex(knex);

    await AddressType.query().insert(address_types)
};

