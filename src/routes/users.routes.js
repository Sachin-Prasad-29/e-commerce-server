const express = require('express');
const { register, login, getProfile, editProfile } = require('../controllers/users.controller');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', getProfile);
router.patch('/profile', editProfile);

module.exports = router;
