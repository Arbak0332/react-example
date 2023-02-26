const Role = require('../models/role')
const { Model } = require('objection')
const roles = [
    { name: 'consumer' },
    { name: 'consultant' },
    { name: 'admin' },
    { name: 'superadmin' }
]


exports.seed = async function (knex) {
    Model.knex(knex);

    await Role.query().insert(roles)
};
