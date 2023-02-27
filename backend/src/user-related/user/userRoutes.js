const express = require('express')
const router = express.Router()

const {
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById
}=  require('./userController')

router.route('')
    .get(getAllUsers)

router.route('/:id')
    .patch(updateUser)
    .delete(deleteUser)
    .get(getUserById)

module.exports = router