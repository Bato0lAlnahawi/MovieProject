const express = require('express');

const userCrtl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/register', userCrtl.register);


module.exports = router;