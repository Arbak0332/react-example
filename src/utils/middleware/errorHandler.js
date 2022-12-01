const {StatusCodes} = require('http-status-codes')

const errorHandler = (err, req, res, next)=>{
    let message = err.message || 'Something went wrong'
    let status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    
    if (err.code == 23514){
        message = 'Invalid data'
        status = StatusCodes.BAD_REQUEST
    }
    // console.log(err);
    return res.status(status).send(message)
}


module.exports = errorHandler