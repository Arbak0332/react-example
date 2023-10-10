const jwt = require("jsonwebtoken")
const User = require("../../utils/database/models/user")
const { BadRequestError, NotFoundError } = require("../../utils/error")
const { StatusCodes } = require("http-status-codes")
const { getGoogleAuthTokens, getGoogleUser } = require("./authUtils")
const { cookieOptions } = require("../../utils/cookieOptions")

const googleSignIn = async (req, res) => {
    const code = req.query.code

    const googleToken = await getGoogleAuthTokens(code)

    // get user with tokens
    const googleUser = await getGoogleUser(
        googleToken.id_token,
        googleToken.access_token
    )

    console.log(googleUser)

    let user = await User.query().where({ email: googleUser.email })
    console.log(user)

    if (user.length != 0) {
        const userToken = user[0].createJWT()
        res.cookie("jwt", userToken, cookieOptions).redirect(
            302,
            process.env.FRONTEND_DOMAIN
        )
        return
    }

    user = await User.query().insert({
        first_name: googleUser.given_name,
        last_name: googleUser.family_name,
        email: googleUser.email,
        oauth_provider: "google",
    })
    const userToken = user.createJWT()
    console.log(user)
    if (!user) throw new BadRequestError("cannot create account")

    res.cookie("jwt", userToken, cookieOptions).redirect(
        302,
        process.env.FRONTEND_DOMAIN
    )
}

const getGoogleOAuthURL = (req, res) => {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth"
    const options = {
        redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ].join(" "),
    }
    const qs = new URLSearchParams(options)
    const url = `${rootUrl}?${qs.toString()}`

    res.redirect(url)
}

// creating custom user
const register = async (req, res) => {
    console.log(req.body)

    const { first_name, last_name, email, password } = req.body

    const user = await User.query().insert({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
    })
    console.log(user)

    if (!user) throw new BadRequestError("Invalid data.")

    const token = user.createJWT()

    res.cookie("jwt", token, cookieOptions).redirect(
        302,
        process.env.FRONTEND_DOMAIN
    )
}

const login = async (req, res) => {
    const user = await User.query().where({ email: req.body.email })

    if (!user[0])
        throw new NotFoundError("User with provided email does not exist.")

    if (!user[0].comparePassword(req.body.password))
        throw new BadRequestError("Invalid password.")

    const token = user[0].createJWT()

    res.status(StatusCodes.OK).cookie("jwt", token, cookieOptions).json()
}

const logout = async (req, res) => {}

module.exports = {
    googleSignIn,
    register,
    getGoogleOAuthURL,
    login,
    logout,
}
