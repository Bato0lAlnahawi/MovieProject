const express = require('express');
const ReviewCtrl = require('../controllers/review-ctrl'); 
const router = express.Router();

router.post('/review/create', ReviewCtrl.createReview);
router.delete('/review/:movieID', ReviewCtrl.deleteReview);
router.get('/review/:id', ReviewCtrl.getReviewsForMovie);

module.exports = router;
