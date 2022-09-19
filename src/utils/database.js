const { Pool } = require('pg')
const products = require('../../converter/products.json')

const pool = new Pool({
    connectionString: process.env.PG_CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }

})

const query = (text, params) => pool.query(text, params)

const init = async () => {

    let selectExists = `
        SELECT EXISTS (
            SELECT FROM
                pg_tables
            WHERE
                schemaname = 'public' 
            AND
                tablename = 'product'
        ); 
    `
    let s = await query('drop table product;')
    let isExistResult = await query(selectExists)
    
    console.log('Checking ')

    if (isExistResult.rows[0].exists === false) {
        console.log('Creating table of products')
        let createProductTable = `
            CREATE TABLE IF NOT EXISTS product(
                id bigserial not null primary key,
                name VARCHAR(100) not null,
                brand VARCHAR(30) not null,
                description VARCHAR not null,
                rating NUMERIC(2, 0),
                type VARCHAR(50) not null,
                image VARCHAR not null,
                data VARCHAR
            );
        `
        let createTableResult = await query(createProductTable)
         populate
    }

        

}


const populate = async () => {
    console.log('populating')

    if (!products) {
        console.log("Cant populate")
    }

    let promise = await Promise.all(
        products.map(async (item) => {
            let insert = `
                INSERT INTO product (
                    name,
                    brand,
                    description,
                    rating,
                    type,
                    image,
                    data
                )
                VALUES (
                    $1, $2, $3, $4, $5, $6, $7
                )
            `
            return await query(insert, ...item)
        })
    )
    promise.map((res) => {
        console.log(res)
    })
}



module.exports = {
    query,
    init
}