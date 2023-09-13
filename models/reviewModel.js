const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    movieID: { type: mongoose.Types.ObjectId, ref: 'Movie', required: true }, // Reference to the movieModel
    userID: { type: mongoose.Types.ObjectId, ref: 'User', required: true }, // Reference to the userModel
    rating: { type: Number, required: true },
    comment: { type: String },
    timestamp: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', ReviewSchema);
