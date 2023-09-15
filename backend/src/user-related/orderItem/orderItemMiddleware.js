const AnonymousUser = require("../../utils/database/models/anonymous_user")

/**
 *  This middleware check if client is logged in.
 *  If he is not and it is his first operation such as adding a product to shopping
 *  cart then creates an anonymous user integrate the shopping cart with his browser.
 */
const handleUserData = async (req, res, next) => {

    if(req.user.user_id !== null)
        next()

    if(req.user.anonymous_user_id !== null)
        next()

    const newAnonymousUser = await AnonymousUser.query().insert({
        create_date: new Date(),
    })

    req.user.anonymous_user_id = newAnonymousUser.id
    next()
}

module.exports = {
    handleUserData,
}
