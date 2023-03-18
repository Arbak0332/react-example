const { StatusCodes } = require('http-status-codes')
const { NotFoundError, BadRequestError } = require('../../utils/error')
const Product = require('../../utils/database/models/product')
const { Model } = require('objection');


const getAllProducts = async (req, res) => {
    const {
        type,
        rating,
        brand,
        material,
        color,
        name,
        price,
        limit, // 12  default
        page,
        fields,
        sort
    } = req.query

    let query = Product.query()

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
    if(material){
        query = query.where({
            material:material
        })
    }
    if (color) {
        query = query.where({
            color: color
        })
    }
    if (name) {
        query = query.where('name', 'ilike', `%${name}%`)
    }

    if (price) {
        query = query.where('price', '<=', price)
    }

    /**********************************SORT*********************************/

    if (sort) {
        sort.split(',').map((item) => {
            let column, order
            if (item[0] === '-') {
                column = item.slice(1)
                order = 'desc'
            }
            else {
                column = item
                order = 'asc'
            }

            query = query.orderBy(column, order)
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
    const product = await Product.query().findById(req.params.id)

    if (!product)
        throw new NotFoundError('product does not exist')

    res.status(StatusCodes.OK).json(product)
}

const createProduct = async (req, res) => {

    const product = await Product.query().insert({ ...req.body })

    if (!product) {
        throw new BadRequestError('Invalid data')
    }

    res.status(StatusCodes.CREATED).json(product)
}


const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.query().updateAndFetchById(id, { ...req.body })

    if (!product)
        throw new NotFoundError('Product not found')

    res.status(StatusCodes.OK).json(product)
}

const deleteProduct = async (req, res) => {
    const numRowsDeleted = await Product.query().deleteById(req.params.id)

    if (numRowsDeleted <= 0)
        throw new NotFoundError('product not found')

    res.status(StatusCodes.NO_CONTENT).send()
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

