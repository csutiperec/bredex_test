const express = require('express');
const users_controller = require('../Controllers/users_controller');
const router = express.Router();

router.post('/login', users_controller.login);
router.post('/register', users_controller.register);

module.exports = router;