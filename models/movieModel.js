const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
 {
  name: { type: String, required: true },
  id:{type: Number, required: true} ,
  time: { type: [String], required: true },
  rating: { type: Number, required: true },
  description: { type: String },
  genre: { type: [String] , required:true },
  releaseDate: { type: Date , required: true },
  adminID:{type: Number , required: true},
  
 },
 { timestamps: true },
)

module.exports = mongoose.model('movies', Movie);