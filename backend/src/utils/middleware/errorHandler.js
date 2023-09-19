const { StatusCodes } = require("http-status-codes")

const errorHandler = (err, req, res, next) => {
    console.log('error handler START');
    console.error(err);
    console.log("error handler END")
    let message = err.message || "Something went wrong"
    let status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR

    if (typeof err.nativeError !== "undefined") {
        status = StatusCodes.BAD_REQUEST

        if (err.nativeError.code === "23503")
            message = "reference to record that does not exist"

        if (err.nativeError.code === "23505") message = "duplicate value"
    }
    if (err.code == 23514) {
        message = "Invalid data"
        status = StatusCodes.BAD_REQUEST
    }

    return res.status(status).send(message)
}

module.exports = errorHandler
