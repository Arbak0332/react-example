const jwt = require('jsonwebtoken')
const User = require('../../utils/database/models/user')

const googleSignIn = async (req, res) =>{
    console.log(req.body)    

    res.redirect(302,'http://localhost:8080/')
}

const register = async (req, res) =>{

}

module.exports = {
    googleSignIn,
    register
}