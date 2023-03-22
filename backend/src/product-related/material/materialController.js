const Material = require('../../utils/database/models/material');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../utils/error')

// GET all materials
const getAllMaterials = async (req, res) => {
    const materials = await Material.query();
    res.status(StatusCodes.OK).json(materials);
}

// GET a specific material
const getMaterialById = async (req, res) => {
    const { id } = req.params;
    const material = await Material.query().findById(id);

    

    if (!material)
        throw new NotFoundError('Material not found')

    res.status(StatusCodes.OK).json(material);

}

// POST a new material
const createMaterial = async (req, res) => {
    const { name } = req.body;
    const material = await Material.query().insert({ name });

    

    if (!material)
        throw new BadRequestError('Invalid data')

    res.status(StatusCodes.CREATED).json(material);

}

// PUT (update) an existing material
const updateMaterial = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const material = await Material.query().findOne({ name: id }).patch({ name: name })

    

    if (!material)
        throw new NotFoundError('Material not found')
    const result = await Material.query().findOne({ name: name })

    res.status(StatusCodes.OK).json(result);

}

// DELETE an existing material
const deleteMaterial = async (req, res) => {
    const { id } = req.params;
    const numRowsDeleted = await Material.query().delete().where({ name: id });
    if (numRowsDeleted <= 0)
        throw new NotFoundError('Material not found')

    

    res.status(StatusCodes.NO_CONTENT).send();

}

module.exports = {
    getAllMaterials,
    getMaterialById,
    createMaterial,
    updateMaterial,
    deleteMaterial,
};