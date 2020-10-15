const express = require('express');
const router = express.Router();
const PostController = require('../Controller/post');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { isLoggedIn, isNotLoggedIn} = require('./middlewares');

try{
    fs.accessSync('uploads')
}catch(err){
    fs.mkdirSync('uploads');
}

router.put('/update', isLoggedIn, PostController.modifyPost);

router.post('/:postId/addComment',isLoggedIn,PostController.AddComment);

router.post('/addPost',isLoggedIn, PostController.Addpost);


const upload =multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads')
        },
        filename(req,file,done){
            const ext= path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + new Date().getTime()+ext);
        }
    }),
    limits:{fileSize:20*1024*1024} // 20mg
});



router.post('/images',isLoggedIn, upload.array('image'), PostController.uploadImages);

router.patch('/:postId/like',isLoggedIn,PostController.LikePost);

router.delete('/:postId/like',isLoggedIn,PostController.unLikePost);

router.delete('/:postId',isLoggedIn,PostController.removePost);

router.delete('/',(req,res)=>{
    res.json({id:1});
});


module.exports = router;