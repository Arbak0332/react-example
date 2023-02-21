const express = require('express');
const router = express.Router();
const {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType,
} = require('./typeController');

router.get('/types', getAllTypes);
router.get('/types/:id', getTypeById);
router.post('/types', createType);
router.patch('/types/:id', updateType);
router.delete('/types/:id', deleteType);

module.exports = router;