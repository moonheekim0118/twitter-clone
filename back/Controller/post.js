const { Post, Comment,Image,User } = require('../models');

exports.Addpost= async (req,res,next)=>{
    try{
        const post = await Post.create({
            content:req.body.text,
            UserId:req.user.id,
        });
        const fullPost= await Post.findOne({
            where:{id:post.id},
            include: [
                { model: Image,},
                { model: Comment},
                { model : User}, 
            ]
        })
        res.status(201).json(fullPost);
    }catch(err){
        console.log(err);
        next(err);
    }

};

exports.AddComment=async (req,res,next)=>{
    try{
        const post = await Post.findOne({
            where:{id:req.params.postId}
        });
        if(!post){
            return res.status(403).send('존재하지 않는 게시물입니다.');
        }
        const comment = await Comment.create({
            content:req.body.text,
            PostId:req.params.postId,
            UserId:req.user.id,
        })
        res.status(201).json(comment);
    } catch(err){
        console.log(err);
        next(err);
    }
};