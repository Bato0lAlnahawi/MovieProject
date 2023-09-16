const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
 {
  name: { type: String, required: true },
  id:{type: String} ,
  time: { type: [String], required: true },
  rating: { type: Number, required: true },
  description: { type: String },
  genre: { type: [String] , required:true },
  releaseDate: { type: Date , required: true },
  adminID:{type: String , required: false},
  
 },
 { timestamps: true },
)

module.exports = mongoose.model('movies', Movie);