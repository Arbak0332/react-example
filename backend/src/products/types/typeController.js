const Type = require('../../utils/database/models/type');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../utils/error')

// GET all types
async function getAllTypes(req, res) {
    const types = await Type.query();
    res.status(StatusCodes.OK).json(types);
}

// GET a specific type
async function getTypeById(req, res) {
    const { id } = req.params;
    const type = await Type.query().findById(id);

    if (!type)
        throw new NotFoundError('Type not found')

    res.status(StatusCodes.OK).json(type);
}

// POST a new type
async function createType(req, res) {
    const { name } = req.body;
    const type = await Type.query().insert({ name });

    if (!type)
        throw new BadRequestError('Invalid data')

    res.status(StatusCodes.CREATED).json(type);
}

// PUT (update) an existing type
async function updateType(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const type = await Type.query().patchAndFetchById(id, { name });
    if (!type)
        throw new NotFoundError('Type not found')

    res.status(StatusCodes.OK).json(type);
}

// DELETE an existing type
async function deleteType(req, res) {
    const { id } = req.params;
    const numRowsDeleted = await Type.query().deleteById(id);
    if (numRowsDeleted <= 0)
        throw new NotFoundError('Type not found')
        
    res.status(StatusCodes.NO_CONTENT).send();
}

module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType,
};