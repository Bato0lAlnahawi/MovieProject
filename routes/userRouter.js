const express = require('express');

const userCrtl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/register', userCrtl.register);
router.post('/login', userCrtl.login);


module.exports = router;