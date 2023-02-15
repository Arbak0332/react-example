// Update with your config settings.
require('dotenv').config({ path: '../../../.env' })

const { knexSnakeCaseMappers } = require('objection')
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: '.',
            database: 'ecommerce'
        },
        seed: {
            directory: './seeds'
        },
        migrations: {
            directory: './migrations'
        },
        ...knexSnakeCaseMappers,
    },
    production: {
        client: 'pg',
        connection: {
            host: process.env.AWS_HOST,
            port: process.env.AWS_PORT,
            user: process.env.AWS_USER_NAME,
            password: process.env.AWS_USER_PASSWORD,
            database: process.env.AWS_DATABASE,
        },
        pool: {
            min: 2,
            max: 10
        },
        ...knexSnakeCaseMappers,
    }

};
