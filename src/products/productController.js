const knex = require('../utils/database')
const { StatusCodes } = require('http-status-codes')




const getAllProductsStatic = async (req, res) => {
    const products = await knex.select('*').from('product')
    console.log(products)

    res.status(StatusCodes.OK).send(products)
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


    res.status(StatusCodes.OK).json()
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


module.exports = {
    getAllProductsStatic,
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

