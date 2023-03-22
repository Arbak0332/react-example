const express = require('express');
const router = express.Router();
const {
    getAllColors,
    getColorById,
    createColor,
    updateColor,
    deleteColor,
} = require('./colorController');

router.get('/colors', getAllColors);
router.get('/colors/:id', getColorById);
router.post('/colors', createColor);
router.patch('/colors/:id', updateColor);
router.delete('/colors/:id', deleteColor);

module.exports = router;