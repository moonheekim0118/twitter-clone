const express = require('express');
const router = express.Router();
const PostController = require('../Controller/post');

router.post('/:postId/addComment',PostController.AddComment);

router.post('/addPost', PostController.Addpost);

router.delete('/',(req,res)=>{
    res.json({id:1});
});


module.exports = router;