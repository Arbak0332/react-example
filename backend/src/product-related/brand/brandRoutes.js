const express = require('express');
const router = express.Router();
const {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand,
} = require('./brandController');

router.get('/brands', getAllBrands);
router.get('/brands/:id', getBrandById);
router.post('/brands', createBrand);
router.patch('/brands/:id', updateBrand);
router.delete('/brands/:id', deleteBrand);

module.exports = router;