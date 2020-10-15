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
                { model: Comment , include:[{ model: User, attributes:{exclude:['password']}}]},
                { model : User,attributes:{exclude:['password']}}, 
                { model: User,  as: 'Likers', attirbutes:['id','nickname']}
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
            PostId:+req.params.postId,
            UserId:req.user.id,
        })

        const fullComment = await Comment.findOne(
            {where: {id: comment.id},
            include:[{ model: User, attributes:{exclude:['password']}}],
        }
        )
        res.status(201).json(fullComment);
    } catch(err){
        console.log(err);
        next(err);
    }
};


exports.LikePost=async(req,res,next)=>{
   try{
        const post = await Post.findOne({where:{id:req.params.postId}});
        if(!post){
            return res.status(403).json('존재하지 않는 게시물입니다.');
        }
        await post.addLikers(req.user.id);
        res.status(200).json({PostId:post.id, UserId:req.user.id});
   }catch(err){
       console.log(err);
       next(err);
   }
    

};

exports.unLikePost=async(req,res,next)=>{
    try{
        const post = await Post.findOne({where:{id:req.params.postId}});
        if(!post){
            return res.status(403).json('존재하지 않는 게시물입니다.');
        }
        await post.removeLikers(req.user.id);
        res.status(200).json({PostId:post.id, UserId:req.user.id});
   }catch(err){
       console.log(err);
       next(err);
   }
}


exports.removePost=async(req,res,next)=>{
    try{
        await Post.destroy({
            where:{
                id:req.params.postId,
                UserId:req.user.id,
            }
        });
        res.status(200).json({id:+req.params.postId});
    }catch(err){
        console.error(err);
        next(err);
    }
}

exports.modifyPost=async(req,res,next)=>{
    try{
        const post = await Post.findOne({where:{id:req.body.postId, UserId:req.user.id}});
        post.content=req.body.content;
        await post.save();
        res.status(200).json({postId:post.id, content:post.content});
    }catch(err){
        console.error(err);
        next(err);
    }
}

exports.uploadImages=async(req,res,next)=>{
    
};