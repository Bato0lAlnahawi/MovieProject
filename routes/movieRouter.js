const express = require('express');

const MovieCtrl = require('../controllers/movie-ctrl');
const middleware = require("../middlewares/checkAuthUser");
const router =  express.Router();

router.post('/createMovie',middleware.checkAuthUser, MovieCtrl.createMovie);
router.put('/UpdateMovie/:id', MovieCtrl.updateMovie);
router.delete('/DeleteMovie/:id', MovieCtrl.deleteMovie);
router.get('/:id', MovieCtrl.getMovieById);
router.get('', MovieCtrl.getAllMovies);
router.get('/movieCreatedByUser/:id',MovieCtrl.getMovieByAdmin);
module.exports = router;