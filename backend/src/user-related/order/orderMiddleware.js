const jwt = require("jsonwebtoken")

const { InternalServerError } = require("../../utils/error")

const getTokenData = async (req, res, next) => {
    const token = req.cookies.jwt
    let decoded = {}
    console.log(token)
    if (token) decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded.user_id) decoded.user_id = null
    if (!decoded.anonymous_user_id) decoded.anonymous_user_id = null
    if (!decoded.order_id) decoded.order_id = null

    const { user_id, anonymous_user_id, order_id } = decoded
    req.user = { user_id, anonymous_user_id, order_id }

    next()
}

module.exports = {
    getTokenData,
}
