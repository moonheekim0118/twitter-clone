const { Post, User ,Image,Comment} = require('../models');

exports.loadPost=async (req,res,next)=>{
    try{
        const posts = await Post.findAll({
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
        res.status(200).json(posts);
    }catch(err){
        console.lerror(err);
        next(err);
    }
};

