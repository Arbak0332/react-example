const Brand = require('../../utils/database/models/brand');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../utils/error')

// GET all brands
const getAllBrands = async (req, res) => {
    const brands = await Brand.query();
    res.status(StatusCodes.OK).json(brands);
}

// GET a specific brand
const getBrandById = async (req, res) => {
    const { id } = req.params;
    const brand = await Brand.query().findById(id);



    if (!brand)
        throw new NotFoundError('Brand not found')

    res.status(StatusCodes.OK).json(brand);

}

// POST a new brand
const createBrand = async (req, res) => {
    const { name } = req.body;
    const brand = await Brand.query().insert({ name });



    if (!brand)
        throw new BadRequestError('Invalid data')

    res.status(StatusCodes.CREATED).json(brand);

}

// PUT (update) an existing brand
const updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const brand = await Brand.query().findOne({ name: id }).patch({ name: name })



    if (!brand)
        throw new NotFoundError('Brand not found')
    const result = await Brand.query().findOne({ name: name })

    res.status(StatusCodes.OK).json(result);

}

// DELETE an existing brand
const deleteBrand = async (req, res) => {
    const { id } = req.params;
    const numRowsDeleted = await Brand.query().delete().where({ name: id });
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