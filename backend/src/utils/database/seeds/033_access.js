/*
permissions [ 
    { 1 : 'GET'},
    { 2 : 'POST'},
    { 3 : 'PATCH'},
    { 4 : 'DELETE'}
]

roles  [
    { 1 : 'consumer' },
    { 2 : 'consultant' },
    { 3 : 'admin' },
    { 4 : 'superadmin' }
]

resources [
    { 1 : 'brand' },
    { 2 : 'product' },
    { 3 : 'rating' },
    { 4 : 'type' },
    { 5 : 'upload' },
    { 6 : 'order' },
    { 7 : 'order_item' },
    { 8 : 'user' },
]
*/
const Access = require('../models/access')
const { Model } = require('objection')

const accesses = [
    // consumer
    {role_id: 1, permission_id: 1, resource_id: 1},

    //
]
exports.seed = async function (knex) {
    Model.knex(knex);

    await Access.query().insert(accesses)
};



