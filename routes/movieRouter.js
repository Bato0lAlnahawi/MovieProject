const express = require('express');

const MovieCtrl = require('../controllers/movie-ctrl');

const router = express.Router();

router.post('/movie', MovieCtrl.createMovie);


module.exports = router;