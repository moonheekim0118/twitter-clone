const { Post, User ,Image,Comment} = require('../models');
const { Op } = require('sequelize');

exports.loadPost=async (req,res,next)=>{
    try{
        let totalPostsLength=0;
        const where={};
        const lastId=+req.query.lastId;
        if(lastId!==0){
            where.id={[Op.lt]: +req.query.lastId};
        }
        if(lastId===0){
            totalPostsLength= await Post.count();
        }
        const posts = await Post.findAll({
            where,
            limit:10,
            attributes:{
                exclude:['password']
            }, // excluding password
            order:[
                ['createdAt','DESC'],
                [Comment, 'createdAt', 'DESC']
        ],
            include:[
                {model:User,attributes:{exclude:['password']}},
                {model :Image},
                {model:Comment, include:[{model:User}],  
                attributes:{exclude:['password']},},
                { model: User,  as: 'Likers', attirbutes:['id','nickname']}
            ]
        });
        res.status(200).json({posts,totalPostsLength});
    }catch(err){
        console.error(err);
        next(err);
    }
};

