const express = require('express');
const router = express.Router();

const {
    createAddress,
    getAddressById,
    getAllAddresses,
    updateAddress,
    deleteAddress
} = require('./addressController')

router.route('/addresses')
    .post(createAddress)
    .get(getAllAddresses)

router.route('/addresses/:id',)
    .get(getAddressById)
    .patch(updateAddress)
    .delete(deleteAddress)

module.exports = router;
