const jwt = require("jsonwebtoken")
const AnonymousUser = require("../../utils/database/models/anonymous_user")

const getTokenData = (req, res, next) => {
    const token = req.cookies.jwt
    let decoded = {}

    if (token) decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded.user_id) decoded.user_id = null
    if (!decoded.anonymous_user_id) decoded.anonymous_user_id = null

    const { user_id, anonymous_user_id } = decoded
    req.user = { user_id, anonymous_user_id }
    next()
}

const setUserQueryObject = (req, res, next) => {
    const userQueryObject = {}
    const { user_id, anonymous_user_id } = req.user
    if (user_id !== null) {
        userQueryObject.user_id = user_id
    }
    if (anonymous_user_id !== null) {
        userQueryObject.anonymous_user_id = anonymous_user_id
    }
    req.user = { userQueryObject, user_id, anonymous_user_id }
    next()
}

/**
 *  This middleware check if client is logged in.
 *  If he is not and it is his first operation such as adding a product to shopping
 *  cart then creates an anonymous user integrate the shopping cart with his browser.
 */
const handleUserData = async (req, res, next) => {
    const { user_id, anonymous_user_id } = req.user

    if (user_id !== null) {
        next()
        return
    }

    if (anonymous_user_id !== null) {
        const oldAnonymousUser = await AnonymousUser.query().findById(
            anonymous_user_id
        )
        if (oldAnonymousUser) {
            next()
            return
        }
    }

    const newAnonymousUser = await AnonymousUser.query().insert({
        create_date: new Date(),
    })

    req.user.anonymous_user_id = newAnonymousUser.id
    next()
}

module.exports = {
    getTokenData,
    setUserQueryObject,
    handleUserData,
}
