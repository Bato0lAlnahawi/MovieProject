const express = require('express');
const ReviewCtrl = require('../controllers/review-ctrl'); 
const router = express.Router();

router.post('/review/create', ReviewCtrl.createReview);
router.delete('/deleteReviewFromMovie/:reviewId', ReviewCtrl.deleteReview);
router.get('/getMovieReviews/:movieID', ReviewCtrl.getReviewsForMovie);
router.put('/review/:id', ReviewCtrl.updateReview);

module.exports = router;
