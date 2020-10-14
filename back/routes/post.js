const express = require('express');
const router = express.Router();
const PostController = require('../Controller/post');
const { isLoggedIn, isNotLoggedIn} = require('./middlewares');

router.put('/update', isLoggedIn, PostController.modifyPost);

router.post('/:postId/addComment',isLoggedIn,PostController.AddComment);

router.post('/addPost',isLoggedIn, PostController.Addpost);

router.patch('/:postId/like',isLoggedIn,PostController.LikePost);

router.delete('/:postId/like',isLoggedIn,PostController.unLikePost);

router.delete('/:postId',isLoggedIn,PostController.removePost);

router.delete('/',(req,res)=>{
    res.json({id:1});
});


module.exports = router;