const Rating = require('../models/rating')
const { Model } = require('objection')

const rating = [
    {
        rate: 1,
        user_id: 1,
        product_id: 1
    }
]
exports.seed = async function (knex) {
    Model.knex(knex);

    await Rating.query().insert(rating)
};
