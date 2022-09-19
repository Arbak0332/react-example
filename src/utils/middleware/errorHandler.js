const {StatusCodes} = require('http-status-codes')

const errorHandler = (err, req, res, next)=>{

    console.log(err.code)

    // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('err')
}


module.exports = errorHandler