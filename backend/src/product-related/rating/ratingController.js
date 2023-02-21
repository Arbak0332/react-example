const {StatusCodes} = require('http-status-codes');
const { Rating } = require('../../utils/models/rating');
const { NotFoundError, BadRequestError } = require('../../utils/error');



/***** TODO: add authentication before refactoring this code *****/

async function createRating(req, res) {
    const { rate, user_id, product_id } = req.body;

    const newRating = await Rating.query().insert({
        rate,
        user_id,
        product_id
    });

    res.status(StatusCodes.CREATED).json(newRating);
}

async function getRating(req, res) {
    const { id } = req.params;

    const rating = await Rating.query().findById(id);

    if (!rating) {
        throw new NotFoundError(`Rating with id ${id} not found`);
    }

    res.status(StatusCodes.OK).json(rating);
}


async function getAllRatings(req, res) {
    const ratings = await Rating.query();

    res.status(StatusCodes.OK).json(ratings);
}

async function updateRating(req, res) {
    const { id } = req.params;
    const { rate } = req.body;

    const updatedRating = await Rating.query().patchAndFetchById(id, {
        rate
    });

    if (!updatedRating) {
        throw new NotFoundError(`Rating with id ${id} not found`);
    }

    res.status(StatusCodes.OK).json(updatedRating);
}

async function deleteRating(req, res) {
    const { id } = req.params;

    const numDeleted = await Rating.query().deleteById(id);

    if (numDeleted === 0) {
        throw new NotFoundError(`Rating with id ${id} not found`);
    }

    res.sendStatus(StatusCodes.NO_CONTENT);
}

module.exports = {
    createRating,
    getRating,
    getAllRatings,
    updateRating,
    deleteRating
};
