const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.showLoginForm);

//  processar o login
router.post('/login', authController.handleLogin);

// logout
router.get('/logout', authController.logout);

module.exports = router;
