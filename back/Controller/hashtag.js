const { Post, Comment,Image,User, Hashtag } = require('../models');
const { Op } = require('sequelize');

exports.loadPosts=async(req,res,next)=>{
    try{
        let totalPostLength=0;
        const where={};
        const lastId=+req.query.lastId;
        if(lastId!==0){
            where.id={[Op.lt]: +req.query.lastId};
        }
        if(lastId===0){
            totalPostLength=await Post.findAll({
                include:[
                    {model: Hashtag,
                     where: {name: decodeURIComponent(req.params.hashtag)} },
            ]});
            totalPostLength=totalPostLength.length;
        }

        const posts = await Post.findAll({
            where,
            limit:5,
            order:[
                ['createdAt','DESC'],
                [Comment, 'createdAt', 'DESC']
            ],
            include:[
                {model: Hashtag,
                 where: {name: decodeURIComponent(req.params.hashtag)} },
                {model:User,attributes:{exclude:['password']}},
                {model :Image},
                {model:Comment, include:[{model:User, attirbutes:['id','nickname']}],  
                attributes:{exclude:['password']},},
                { model: User,  as: 'Likers', attirbutes:['id','nickname']},
                { model: Post, as: 'Retweet', include:[{model:User, attirbutes:['id','nickname']},
                { model: User,  as: 'Likers', attirbutes:['id','nickname']},
                 {model: Image}, 
                 {model:Comment, include:[{model:User, attirbutes:['id','nickname']}]},
            ]}]});
        res.status(200).json({posts,totalPostLength});
    }catch(err){
        console.error(err);
        next(err);
    }
};