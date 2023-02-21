const express = require('express');
const router = express.Router();
const {
    createRating,
    getRating,
    getAllRatings,
    updateRating,
    deleteRating
} = require('./ratingController');

router.route('/:product_id/ratings')
    .post(createRating)
    .get(getRating)
    .patch(updateRating)
    .delete(deleteRating)

router.route('/ratings')
    .get(getAllRatings);

module.exports = router;
