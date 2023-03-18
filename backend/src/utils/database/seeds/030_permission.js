const Permission = require('../models/permission')
const { Model } = require('objection')

const permissions = [
    {name : 'GET'},
    {name : 'POST'},
    {name : 'PATCH'},
    {name : 'DELETE'}
]

exports.seed = async function (knex) {
    Model.knex(knex);

    await Permission.query().insert(permissions)
};
