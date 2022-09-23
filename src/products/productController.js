const { query } = require('../utils/database/connection')
const { StatusCodes } = require('http-status-codes')




const getAllProductsStatic = async (req, res) => {

    let products = await query(`
        SELECT  
            distinct brand
        FROM product;
    `)
    


    // res.status(StatusCodes.OK).json(products)
}

const getAllProducts = async (req, res) => {

    const {
        type,
        rating,
        brand,
        name,
        price,
        limit,
        page,
        fields,
        sort
    } = req.query

    if (fields) {

    }



    // console.log(await getColumnsName())

    // let products = await query('SELECT * FROM product;')
    let products = 0;

    res.status(StatusCodes.OK).json(mapToProductEntity(products))
}


const getProduct = async (req, res) => {

    res.status(StatusCodes.OK).send('getProduct')
}


const createProduct = async (req, res) => {

    res.status(StatusCodes.OK).send('createProduct')
}


const updateProduct = async (req, res) => {
    res.status(StatusCodes.OK).send('updateProduct')

}


const deleteProduct = async (req, res) => {
    res.status(StatusCodes.OK).send('deleteProduct')

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// utils ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mapToProductEntity = (queryResult) => {
    let entity = {}

    entity.length = queryResult.rowCount
    entity.products = queryResult.rows

    return entity
}

const getColumnsName = async () => {
    const result = await query(`
        SELECT *
        FROM product
        WHERE false; 
    `)

    return result
}





module.exports = {
    getAllProductsStatic,
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

