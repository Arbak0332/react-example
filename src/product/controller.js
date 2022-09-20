const {query} = require('../utils/database')
const { StatusCodes } = require('http-status-codes')

const getAllProducts = async (req, res)=>{
    res.status(StatusCodes.OK).send('getAllProducts')
}
const getProduct = async (req, res)=>{
    
    res.status(StatusCodes.OK).send('getProduct')
}
const createProduct = async (req, res)=>{
    
    res.status(StatusCodes.OK).send('createProduct')
}
const updateProduct = async (req, res)=>{
    res.status(StatusCodes.OK).send('updateProduct')
    
}
const deleteProduct = async (req, res)=>{
    res.status(StatusCodes.OK).send('deleteProduct')

}


module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

