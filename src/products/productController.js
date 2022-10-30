const knex = require('../utils/database')
const { StatusCodes } = require('http-status-codes')
const AWS = require('aws-sdk')
const { NotFoundError, BadRequestError } = require('../utils/error')



const getAllProductsStatic = async (req, res) => {

    // const products = await knex.select().from('product')
    await knex('product').del()
    
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


    /*******************************SELECT**************************/

    if (fields) {
        queryObject.fields = fields.split(',')
    }
    else {
        queryObject.fields = ['*']
    }
    query = query.select(queryObject.fields)


    /*****************************WHERE******************************/

    if (type) {
        query = query.where({
            type: type
        })
    }

    if (brand) {
        query = query.where({
            brand: brand
        })
    }

    if (name) {
        query = query.whereILike('name', `%${name}%`)
    }

    if (price) {
        query = query.where('price', '<=', price)
    }

    /**********************************SORT*********************************/

    if (sort) {
        query = query.rowNumber('xd', function () {
            let arr = []
            sort.split(',').map((item) => {
                if (item[0] === '-')
                    arr.push({
                        column: item.slice(1),
                        order: 'desc'
                    })
                else
                    arr.push({
                        column: item,
                        order: 'asc'
                    })

            })
            this.orderBy(arr)
        })
    }

    /****************************PAGINATION*******************************/

    queryObject.limit = 12
    queryObject.skip = 0

    if (limit) {
        queryObject.limit = limit
    }

    if (page) {
        queryObject.skip = queryObject.limit * (page - 1)
    }

    query = query
        .offset(queryObject.skip)
        .limit(queryObject.limit)



    /**********************************result*********************************/
    let result = await query

    res.status(StatusCodes.OK).json(result)
}


const getProduct = async (req, res) => {
    const product = await knex('product').where({ id: req.params.id })

    if (product.length == 0) {

        throw new NotFoundError('product does not exist')
    }

    res.status(StatusCodes.OK).send(product[0])
}

const createProduct = async (req, res) => {

    const result = await knex('product').insert({ ...req.body })

    if (!result) {
        throw new BadRequestError('invalid data')
    }

    res.status(StatusCodes.OK).send('createProduct')
}


const updateProduct = async (req, res) => {

    const result = await knex('product').update({ ...req.body })


    res.status(StatusCodes.OK).send('updateProduct')
}

const deleteProduct = async (req, res) => {
    const result = await knex('product').where({ id: req.params.id }).del()

    if (!result) {
        throw new NotFoundError('product does not exist')
    }

    res.status(StatusCodes.OK).json({ message: `deleted product with id=${req.params.id}` })

}





module.exports = {
    getAllProductsStatic,
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

