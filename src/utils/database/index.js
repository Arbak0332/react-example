const knex = require('knex')
const knexfile = require('./knexfile')


// TODO in prod dont acces knexfile.development directly
const db = knex(knexfile.development)


module.exports = db

