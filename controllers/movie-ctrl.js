const Movie = require("../models/movieModel");
const { IdValidator } = require("../utils/validator");
//Create Movie ...
createMovie = async (req, res) => {
  console.log("Received POST request at /api/movie");
  const body = req.body;

  if (Object.values(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a movie",
    });
  }
  const findMovie = await Movie.findOne({ name: body.name });

  if (findMovie) {
    return res
      .status(200)
      .json({ message: "Movie Already exist", moive: findMovie });
  } else {
    const movie = new Movie(body);

    if (!movie) {
      return res.status(400).json({ success: false, error: err });
    }

    movie
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: movie._id,
          message: "Movie created!",
        });
      })

      .catch((error) => {
        return res.status(400).json({
          error,
          message: "Movie not created!",
        });
      });
  }
};

//Update Movie ...
updateMovie = async (req, res) => {
  const body = req.body;

  if (Object.values(body).length === 0) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  if (!IdValidator(req.params.id)) {
    return res.status(400).json({ message: "Id Not valid" });
  }
  const movie = await Movie.findOne({ _id: req.params.id });
  if (movie) {
    movie.name = body.name;
    movie.time = body.time;
    movie.rating = body.rating;
    movie.description = body.description;
    movie.genre = body.genre;
    movie.releaseDate = body.releaseDate;
    movie
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: movie._id,
          message: "Movie updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Movie not updated!",
        });
      });
  } else {
    return res.status(404).json({
      message: "Movie not found!",
    });
  }
};

//Delete Movie ...
deleteMovie = async (req, res) => {
  if (!IdValidator(req.params.id)) {
    return res.status(400).json({ message: "Id Not valid" });
  }
  await Movie.findOneAndDelete({ _id: req.params.id })
    .then((movie) => {
      if (!movie) {
        return res
          .status(404)
          .json({ success: false, error: `Movie not found` });
      }

      return res.status(200).json({ success: true, data: movie });
    })
    .catch((err) => console.log(err));
};

//Get Movie By ID ...
getMovieById = async (req, res) => {
  if (!IdValidator(req.params.id)) {
    return res.status(400).json({ message: "Id Not valid" });
  }
  const movie = await Movie.findOne({ _id: req.params.id });
  if (movie) {
    return res.status(200).json({ success: true, data: movie });
  } else {
    return res.status(404).json({ success: false, error: `Movie not found` });
  }
};

//Get All Movies (with both user & admin)
getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ success: true, data: movies });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Server error: Unable to get movies" });
  }
};
// get movie by admin
getMoiveByAdmin = async (req, res) => {
  if (!IdValidator(req.params.id)) {
    return res.status(400).json({ message: "user Id Not valid" });
  }
  const adminID = req.params.id;
  movies = await Movie.find({ adminID: adminID });
  return res.status(200).json(movies);
};
///////////////////////////
module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
  getAllMovies,
  getMoiveByAdmin,
};
