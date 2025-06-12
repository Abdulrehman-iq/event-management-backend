const express = require('express');
const { registerUser, loginUser, getCurrentUser } = require('../controllers/authController');

const router = express.Router();

// Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getCurrentUser);

module.exports = router;