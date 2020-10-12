const express = require('express');
const router = express.Router();
const UserController= require('../Controller/user');

router.post('/login',UserController.login);

router.post('/logout',UserController.logout);

router.post('/',UserController.signUp);

module.exports = router;