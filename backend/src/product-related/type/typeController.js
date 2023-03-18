const Type = require('../../utils/database/models/type');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../utils/error')

// GET all types
const getAllTypes= async (req, res)=> {
    const types = await Type.query();
    res.status(StatusCodes.OK).json(types);
}

// GET a specific type
const getTypeById= async (req, res)=> {
    const { id } = req.params;
    const type = await Type.query().findById(id);

    if (!type)
        throw new NotFoundError('Type not found')

    res.status(StatusCodes.OK).json(type);
}

// POST a new type
const createType= async (req, res)=> {
    const { name } = req.body;
    const type = await Type.query().insert({ name });

    if (!type)
        throw new BadRequestError('Invalid data')

    res.status(StatusCodes.CREATED).json(type);
}

// PUT (update) an existing type
const updateType= async (req, res)=> {
    const { id } = req.params;
    const { name } = req.body;
    const type = await Type.query().findOne({name:id}).patch({name:name})

    if (!type)
        throw new NotFoundError('Type not found')
    const result = await Type.query().findOne({name:name})

    res.status(StatusCodes.OK).json(result);
}

// DELETE an existing type
const deleteType= async (req, res)=> {
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