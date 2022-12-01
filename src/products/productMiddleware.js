const { BadRequestError } = require('../utils/error')
const { StatusCodes } = require('http-status-codes')
const knex = require('../utils/database')

const createProductValidation = async (req, res, next) => {

    // whether the name is empty string
    let name = req.body.name.split(' ').join('')
    if (name === '') {
        next(new BadRequestError('Invalid data'))
    }

    const result = await knex('product').where({ name: req.body.name })

    if (result.length !== 0) {
        next(new BadRequestError('Product name is taken'))
    }
    next()
}


const updateProductValidation = async (req, res, next) => {


    const result = await knex('product')
        .whereILike('name', req.body.name)

    if (result.length !== 0) {
        result.map(product=>{
            if(product.id != req.params.id){
                next(new BadRequestError('Product name is taken'))
            }
        })

    }

    next()
}

module.exports = {
    createProductValidation,
    updateProductValidation

}