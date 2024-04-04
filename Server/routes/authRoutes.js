const express = require('express');
const router = express.Router();
const { signupController } = require('../controllers/authControllers')


router.post('/create_account', signupController);

module.exports = router;