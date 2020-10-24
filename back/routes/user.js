const express = require('express');
const router = express.Router();
const UserController= require('../Controller/user');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { isLoggedIn, isNotLoggedIn} = require('./middlewares');

try{
    fs.accessSync('uploads')
}catch(err){
    fs.mkdirSync('uploads');
}

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


router.post('/login',isNotLoggedIn,UserController.login);

router.post('/logout',isLoggedIn,UserController.logout);

router.post('/profilepic', isLoggedIn, upload.array('image'),UserController.uploadProfilePic);

router.patch('/updateMyInfo',isLoggedIn,UserController.updateUserInfo);

router.post('/signUp',isNotLoggedIn,UserController.signUp);

router.patch('/:userId/follow',isLoggedIn,UserController.followUser);

router.delete('/:userId/follow',isLoggedIn,UserController.unfollowUser);

router.get('/',UserController.loadMyInfo);

module.exports = router;