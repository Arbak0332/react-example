const Color = require('../../utils/database/models/color');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../utils/error')

// GET all colors
const getAllColors = async (req, res) => {
    const colors = await Color.query();
    res.status(StatusCodes.OK).json(colors);
}

// GET a specific color
const getColorById = async (req, res) => {
    const { id } = req.params;
    const color = await Color.query().findById(id);

    if (!color)
        throw new NotFoundError('Color not found')

    res.status(StatusCodes.OK).json(color);

}

// POST a new color
const createColor = async (req, res) => {
    const { name } = req.body;
    const color = await Color.query().insert({ name });

    if (!color)
        throw new BadRequestError('Invalid data')

    res.status(StatusCodes.CREATED).json(color);

}

// PUT (update) an existing color
const updateColor = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const color = await Color.query().findOne({ name: id }).patch({ name: name })

    if (!color)
        throw new NotFoundError('Color not found')
    const result = await Color.query().findOne({ name: name })

    res.status(StatusCodes.OK).json(result);

}

// DELETE an existing color
const deleteColor = async (req, res) => {
    const { id } = req.params;
    const numRowsDeleted = await Color.query().delete().where({ name: id });
    if (numRowsDeleted <= 0)
        throw new NotFoundError('Color not found')

    res.status(StatusCodes.NO_CONTENT).send();

}

module.exports = {
    getAllColors,
    getColorById,
    createColor,
    updateColor,
    deleteColor,
};