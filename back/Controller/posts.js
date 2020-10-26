const { Post, User ,Image,Comment} = require('../models');
const { Op } = require('sequelize');

exports.loadPost=async (req,res,next)=>{
    try{
        const where={};
        const lastId=+req.query.lastId;
        if(lastId!==0){
            where.id={[Op.lt]: +req.query.lastId};
        }
        const posts = await Post.findAll({
            where,
            limit:5,
            order:[
                ['createdAt','DESC'],
                [Comment, 'createdAt', 'DESC']
        ],
            include:[
                {model:User,attributes:{exclude:['password']}},
                {model :Image},
                {model:Comment, include:[{model:User, attirbutes:['id','nickname']}],  
                attributes:{exclude:['password']},},
                { model: User,  as: 'Likers', attirbutes:['id','nickname']},
                { model: Post, as: 'Retweet', include:[{model:User, attirbutes:['id','nickname','profilepic']},
                { model: User,  as: 'Likers', attirbutes:['id','nickname']},
                 {model: Image}, 
                 {model:Comment, include:[{model:User, attirbutes:['id','nickname','profilepic']}]},
            ]}]});
        res.status(200).json({posts});
    }catch(err){
        console.error(err);
        next(err);
    }
};

