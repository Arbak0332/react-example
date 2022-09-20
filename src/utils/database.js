const { Pool } = require('pg')
const products = require('../../converter/products.json')

const pool = new Pool({
    connectionString: process.env.PG_CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }

})
const query = (text, params) => pool.query(text, params)


const selectExists = `
    SELECT EXISTS (
        SELECT FROM
            pg_tables
        WHERE
            schemaname = 'public' 
        AND
            tablename = 'product'
    ); 
`

const init = async () => {
    let isExistResult = await query(selectExists)

    if (isExistResult.rows[0].exists === false) {    

        console.error(`Table of products doesnt exist. I suggest you to create and populate table manuall using 'npm run converter'.`)
    }
}





module.exports = {
    query,
    init
}