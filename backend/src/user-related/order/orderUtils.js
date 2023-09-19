const jwt = require("jsonwebtoken")

const getJWT = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
    })
}
module.exports = {
    getJWT,
}
