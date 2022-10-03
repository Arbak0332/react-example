const knex = require('../utils/database')
const { StatusCodes } = require('http-status-codes')



const getAllProductsStatic = async (req, res) => {

    const insert  = await knex('product').insert({
        name:'test',
        price:1,
        image:'123',
        description:'description',
        rating:1,
        brand:'brand',
        specification:{a:1},
        type:'type'
    })
    console.log(insert)

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
        limit, // 12  default
        page,
        fields,
        sort
    } = req.query
    
    let query = knex('product')
    const queryObject = {}


    /*************************SELECT************************/

    if (fields) {
        queryObject.fields = fields.split(',')
    }
    else{
        queryObject.fields = ['*']
    }
    query = query.select(queryObject.fields)


    /**************************WHERE***************************/

    if(type){
        query = query.where({
            type : type
        })
    }

    if (brand) {
        query = query.where({
            brand: brand
        })
    }

    if(name){
        query = query.whereILike('name', `%${name}%`)
    }

    if(price){
        query = query.where('price', '<=', price)
    }

    /*************************PAGINATION***************************/

    queryObject.limit = 12
    queryObject.skip = 0
    
    if(limit){
        queryObject.limit = limit
    }

    if(page){
        queryObject.skip = queryObject.limit * (page - 1)         
    }

    query = query
        .offset(queryObject.skip)
        .limit(queryObject.limit)

    /*************************SORT***************************/

    if(sort){
        
    }


    let result = await query

    res.status(StatusCodes.OK).json(mapToProductEntity(result))
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

    entity.length = queryResult.length
    entity.products = queryResult

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

