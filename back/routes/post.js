const express = require('express');
const router = express.Router();
const PostController = require('../Controller/post');
const { isLoggedIn, isNotLoggedIn} = require('./middlewares');

router.post('/:postId/addComment',isLoggedIn,PostController.AddComment);

router.post('/addPost',isLoggedIn, PostController.Addpost);

router.delete('/',(req,res)=>{
    res.json({id:1});
});


module.exports = router;