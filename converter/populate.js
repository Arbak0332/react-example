const { query } = require('../src/utils/database')
const products = require('./products.json')

const isExists = `
    SELECT EXISTS (
        SELECT FROM
            pg_tables
        WHERE
            schemaname = 'public' 
        AND
            tablename = 'product'
    ); 
`

const insertProduct = `
    INSERT INTO product (
        name,
        price,
        image,
        description,
        rating,
        brand,
        specification,
        type
    )
    VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8
    );
`
const createProductTable = `
    CREATE TABLE IF NOT EXISTS product(
        id bigserial not null primary key,
        name VARCHAR(100) not null,
        price NUMERIC not null,
        image VARCHAR not null,
        description VARCHAR not null,
        rating NUMERIC(2, 0),
        brand VARCHAR(30) not null,
        specification VARCHAR,
        type VARCHAR(50) not null
    );
`

const dropProductTable = `
    DROP TABLE product;
`

const insertProducts = async () => {
    products.map(async (item) => {
        console.log(item)

        let insertResult = await query(insertProduct, Object.values(item))
        console.log(insertResult)
    })

}


const run = async () => {

    try {
        let isExistResult = await query(isExists)
        if (isExistResult.rows[0].exists === true) { // if table of products exists
            await query(dropProductTable)
        }
        await query(createProductTable)
        await insertProducts()
    } catch (err) {
        console.error(err)
    }
}


run()
