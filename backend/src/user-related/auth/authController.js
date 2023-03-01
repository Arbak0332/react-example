const jwt = require('jsonwebtoken')
const User = require('../../utils/database/models/user')
const { BadRequestError } = require('../../utils/error')

// creating OAUTH2 user
const googleSignIn = async (req, res) => {
    console.log(req.body)

    // TODO decode jwt 
    //const decoded = jwt.verify(token, process.env.JWT_SECRET)


    res.redirect(302, 'http://localhost:8080/')
}

// creating custom user
const register = async (req, res) => {
    const user = await User.query().insert({ ...req.body })

    if (!user)
        throw new BadRequestError('Invalid data.')

    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ token: token })
}

module.exports = {
    googleSignIn,
    register
}