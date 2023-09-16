const Review = require("../models/reviewModel");
const { IdValidator } = require("../utils/validator");
// const Movie = require('../models/movieModel');
// const User = require('../models/userModel');

// Create Review
createReview = (req, res) => {
  const body = req.body;

  if (Object.values(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a review",
    });
  }

  const { movieID, userID, rating } = body;

  if (!movieID || !userID || !rating) {
    return res.status(400).json({
      success: false,
      error: "movieID, userID, and rating are required",
    });
  }

  const review = new Review(body);

  review
    .save()
    .then(() => {
      res.status(201).json({
        success: true,
        id: review._id,
        message: "Review created!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        error: `Server error: Unable to create the review ${error}`,
      });
    });
};

// Get Reviews for a Movie
getReviewsForMovie = async (req, res) => {
  if (!IdValidator(req.params.movieID)) {
    return res.status(400).json({ message: "Id Not valid" });
  }
  const movieID = req.params.movieID;

  const reviews = await Review.find({ movieID: movieID });
  res.status(200).json({ success: true, data: reviews });
  // (err, reviews) => {
  //   if (err) {
  //     return res.status(500).json({
  //       success: false,
  //       error: 'Server error: Unable to get reviews',
  //     });
  //   }

  // }
};

// Delete Review
deleteReview = async (req, res) => {
  if (!IdValidator(req.params.reviewId)) {
    return res.status(400).json({ message: "Id Not valid" });
  }
  const reviewId = req.params.reviewId;

  const review = await Review.findOneAndDelete({ _id: reviewId });
  if (review) {
    res.status(200).json({ success: true, data: review });
  } else {
    return res.status(404).json({
      success: false,
      error: "Review not found",
    });
  }
};

//update review
updateReview = async (req, res) => {
  const body = req.body;

  if (Object.values(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a review",
    });
  }
  if (!IdValidator(req.params.id)) {
    return res.status(400).json({ message: "Id Not valid" });
  }

  const id = req.params.id;
  const { rating, comment } = body;

  if (!rating && !comment) {
    return res.status(400).json({
      success: false,
      error: "Rating or comment is required for update",
    });
  }

  const review = await Review.findOne({ _id: id });
  if (review) {
    if (rating) {
      review.rating = rating;
    }
    if (comment) {
      review.comment = comment;
    }
    review
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: review._id,
          message: "Review updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Review not updated!",
        });
      });
  } else {
    return res.status(404).json({
      message: "Review not found!",
    });
  }
};

module.exports = {
  createReview,
  getReviewsForMovie,
  deleteReview,
  updateReview,
};
(err, review) => {
  if (err) {
  }
};
