const {StatusCodes} = require('http-status-codes')

const errorHandler = (err, req, res, next)=>{
    let message = err.message || 'Something went wrong'
    console.error(err.message)

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(message)
}


module.exports = errorHandler