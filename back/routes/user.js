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

// 나중에 다른 routes로 나눌 지 결정하기 ! 
router.get('/:userId/followings', UserController.loadFollowings);

router.get('/:userId/followers', UserController.loadFollowers);

router.get('/:userId/posts', UserController.loadUserPosts);

router.get('/:userId/likes', UserController.loadLikedposts);

router.get('/:userId',UserController.loadUserInfo); // 

router.get('/',UserController.loadMyInfo);

module.exports = router;