const express = require('express');
const router = express.Router();
const {
    getAllMaterials,
    getMaterialById,
    createMaterial,
    updateMaterial,
    deleteMaterial,
} = require('./materialController');

router.get('/materials', getAllMaterials);
router.get('/materials/:id', getMaterialById);
router.post('/materials', createMaterial);
router.patch('/materials/:id', updateMaterial);
router.delete('/materials/:id', deleteMaterial);

module.exports = router;