const express = require('express');
const router = express.Router();
const UserController= require('../Controller/user');
const { isLoggedIn, isNotLoggedIn} = require('./middlewares');

router.post('/login',isNotLoggedIn,UserController.login);

router.post('/logout',isLoggedIn,UserController.logout);

router.patch('/changeNickname',isLoggedIn,UserController.changeNickname);

router.post('/signUp',isNotLoggedIn,UserController.signUp);

router.patch('/:userId/follow',isLoggedIn,UserController.followUser);

router.delete('/:userId/follow',isLoggedIn,UserController.unfollowUser);

router.get('/',UserController.loadMyInfo);

module.exports = router;