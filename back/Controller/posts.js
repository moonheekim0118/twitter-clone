const { Post, User ,Image,Comment} = require('../models');
const { Op } = require('sequelize');

exports.loadPost=async (req,res,next)=>{
    try{
        let totalPostsLength=0;
        const where={};
        if(+req.query.lastId){
            where.id={[Op.lt]: +req.query+lastId};
        }
        else{ // 초기 
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
            ]
        });
        res.status(200).json({posts,totalPostsLength});
    }catch(err){
        console.lerror(err);
        next(err);
    }
};

