const express = require('express');
const router = express.Router();
const UsersController= require('../Controller/users');


router.get('/:userId/followings', UsersController.loadFollowings);

router.get('/:userId/followers', UsersController.loadFollowers);

router.get('/:userId/posts', UsersController.loadUserPosts);

router.get('/:userId/likes', UsersController.loadLikedposts);

router.get('/:userId',UsersController.loadUserInfo); // 


module.exports = router;