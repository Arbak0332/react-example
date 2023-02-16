const Brand = require('../../utils/database/models/brand');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../utils/error')

// GET all brands
async function getAllBrands(req, res) {
    const brands = await Brand.query();
    res.status(StatusCodes.OK).json(brands);
}

// GET a specific brand
async function getBrandById(req, res) {
    const { id } = req.params;
    const brand = await Brand.query().findById(id);
    if (!brand) 
        throw new NotFoundError('Brand not found')
        
    res.status(StatusCodes.OK).json(brand);
}

// POST a new brand
async function createBrand(req, res) {
    const { name } = req.body;
    if(!name)
        throw new BadRequestError('Invalid data')
    const brand = await Brand.query().insert({ name });
    res.status(StatusCodes.CREATED).json(brand);
}

// PUT (update) an existing brand
async function updateBrand(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const brand = await Brand.query().patchAndFetchById(id, { name });
    if (!brand) 
        throw new NotFoundError('Brand not found')
    
    res.status(StatusCodes.OK).json(brand);
}

// DELETE an existing brand
async function deleteBrand(req, res) {
    const { id } = req.params;
    const numRowsDeleted = await Brand.query().deleteById(id);
    if (numRowsDeleted <= 0)
        throw new NotFoundError('Brand not found')

    res.status(StatusCodes.NO_CONTENT).send();
}

module.exports = {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand,
};