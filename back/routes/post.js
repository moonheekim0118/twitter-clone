const express = require('express');
const router = express.Router();
const PostController = require('../Controller/post');
const multerS3 =require('multer-s3');
const AWS = require('aws-sdk');
const path = require('path');
const fs = require('fs');
const { isLoggedIn} = require('./middlewares');

try{
    fs.accessSync('uploads')
}catch(err){
    fs.mkdirSync('uploads');
}

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region:'ap-northeast-2'
});

const upload =multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'twitcloneproject',
        key(req,file,cb){
            cb(null, `original/${Date.now()} ${path.basename(file.originalname)}`)
        }
    }) 
   ,
    limits:{fileSize:20*1024*1024} // 20mg
});

router.put('/update', isLoggedIn, PostController.modifyPost);

router.post('/:postId/addComment',isLoggedIn,PostController.AddComment);

router.delete('/:postId/removeComment',isLoggedIn, PostController.removeComment);

router.post('/addPost',isLoggedIn, upload.none(), PostController.Addpost);

router.post('/:postId/retweet',isLoggedIn,PostController.retweetPost);

router.delete('/:postId/retweet',isLoggedIn,PostController.unRetweetPost);

router.post('/images',isLoggedIn, upload.array('image'), PostController.uploadImages);

router.patch('/:postId/like',isLoggedIn,PostController.LikePost);

router.delete('/:postId/like',isLoggedIn,PostController.unLikePost);

router.delete('/:postId',isLoggedIn,PostController.removePost);

router.get('/:postId',PostController.loadSinglePost);

router.delete('/',(req,res)=>{
    res.json({id:1});
});


module.exports = router;