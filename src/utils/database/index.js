const knex = require('knex')
const knexfile = require('./knexfile')


// TODO in prod dont acces knexfile.development directly

if (process.env.ENV === 'production') {
    module.exports = knex(knexfile.production)
} 
else if (process.env.ENV === 'test') {
    module.exports = knex(knexfile.development)
}
else{
    module.exports = knex(knexfile.development)
}




