const jwt = require("jsonwebtoken")
const { UnauthenticatedError } = require("../../utils/error")

const authentication = async (req, res, next) => {
    const token = req.cookies.jwt

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const { user_id, anonymous_user_id } = decoded
        req.user = { user_id, anonymous_user_id }
        next()
    } catch (e) {
        throw new UnauthenticatedError("No authorized to acces this route")
    }
}

module.exports = {
    authentication,
}
