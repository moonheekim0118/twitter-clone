const express = require('express');
const router = express.Router();
const UserController= require('../Controller/user');

router.post('/',UserController.signUp);

module.exports = router;