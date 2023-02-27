const jwt = require('jsonwebtoken')
const User = require('../../utils/database/models/user')

const googleSignIn = async (req, res) =>{
    console.log(req.body)    

    res.redirect(302,'http://localhost:8080/')
}

const register = async (req, res) =>{
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