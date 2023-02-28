const User = require('../models/user')
const { Model } = require('objection')

const users = [
    {
        first_name: 'testName',
        last_name: 'testLastName',
        email: 'test@test.com',
        address_id: 1,
        role_id: 1
    }
]
exports.seed = async function (knex) {
    Model.knex(knex);

    await User.query().insert(users)
};
