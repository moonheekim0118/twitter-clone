const { Post, Comment,Image,User } = require('../models');

exports.Addpost= async (req,res,next)=>{
    try{
        const post = await Post.create({
            content:req.body.content,
            UserId:req.user.id,
        });
        if(req.body.image){ // 이미지가 있는 경우 
            if(Array.isArray(req.body.image)){ // 이미지 여러개 
                const images=await Promise.all(req.body.image.map((image)=>Image.create({src:image})));
                await post.addImages(images);
            }
            else{
                const image = await Image.create({src:req.body.image});
                await post.addImages(image);
            }
        }
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
    res.json(req.files.map((v)=>v.filename));
};