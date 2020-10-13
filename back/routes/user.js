const express = require('express');
const router = express.Router();
const UserController= require('../Controller/user');
const { isLoggedIn, isNotLoggedIn} = require('./middlewares');

router.post('/login',isNotLoggedIn,UserController.login);

router.post('/logout',isLoggedIn,UserController.logout);

router.post('/changeNickname',isLoggedIn,UserController.changeNickname);

router.post('/signUp',isNotLoggedIn,UserController.signUp);

router.get('/',UserController.loadUser);

module.exports = router;