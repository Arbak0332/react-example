const User = require('../../utils/database/models/user');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../utils/error')

// "createUser" function is located in authController named as "register"

const getAllUsers = async (req, res)=>{
    const users = await User.query()
    res.status(StatusCodes.OK).json(users)
}

const getUserById = async (req, res)=>{
    const { id } = req.params;
    const user = await User.query().findById(id)

    

    if (!user)
        throw new NotFoundError('User not found')

    res.status(StatusCodes.OK).json(user)

}

const updateUser = async (req, res)=>{
    const { id } = req.params
    const data = req.body

    const user = await User.query().patchAndFetchById(id, {...data})

    if(!user)
        throw new NotFoundError('User not Found')

    res.status(StatusCodes.OK).json(user);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const numRowsDeleted = await User.query().deleteById(id);
    if (numRowsDeleted <= 0)
        throw new NotFoundError('User not found')

    res.status(StatusCodes.NO_CONTENT).send();
}


module.exports = {
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById
}