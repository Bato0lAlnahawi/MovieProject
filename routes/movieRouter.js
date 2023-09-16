const express = require('express');

const MovieCtrl = require('../controllers/movie-ctrl');

const router =  express.Router();

router.post('/createMovie', MovieCtrl.createMovie);
router.put('/UpdateMovie/:id', MovieCtrl.updateMovie);
router.delete('/DeleteMovie/:id', MovieCtrl.deleteMovie);
router.get('/movie/:id', MovieCtrl.getMovieById);
router.get('/movies', MovieCtrl.getAllMovies);
router.get('/movieCreatedByUser/:id',MovieCtrl.getMoiveByAdmin);
module.exports = router;