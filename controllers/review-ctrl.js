
const Review = require('../models/reviewModel');
const Movie = require('../models/movieModel');
const User = require('../models/userModel');


// Create Review
const createReview = (req, res) => {
    const body = req.body;
  
    if (!body) {
      return res.status(400).json({
        success: false,
        error: 'You must provide a review',
      });
    }
  
    const { movieID, userID, rating } = body;
  
    if (!movieID || !userID || !rating) {
      return res.status(400).json({
        success: false,
        error: 'movieID, userID, and rating are required',
      });
    }
  
    const review = new Review({ movieID, userID, rating, comment: body.comment });
  
    review
      .save()
      .then(() => {
        res.status(201).json({
          success: true,
          id: review._id,
          message: 'Review created!',
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          error: 'Server error: Unable to create the review',
        });
      });
  };
  
// Get Reviews for a Movie
const getReviewsForMovie = (req, res) => {
  const { movieID } = req.params;

  Review.find({ movieID }, (err, reviews) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: 'Server error: Unable to get reviews',
      });
    }
    res.status(200).json({ success: true, data: reviews });
  });
};

// Delete Review
const deleteReview = (req, res) => {
  const { id } = req.params;

  Review.findByIdAndDelete(id, (err, review) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: 'Server error: Unable to delete the review',
      });
    }

    if (!review) {
      return res.status(404).json({
        success: false,
        error: 'Review not found',
      });
    }

    res.status(200).json({ success: true, data: review });
  });
};

module.exports = {
  createReview,
  getReviewsForMovie,
  deleteReview,
};

