const { User, Post, Comment,Image } = require('../models');
const { Op } = require('sequelize');

exports.loadFollowings=async(req,res,next)=>{
    try{
        const where={};
        const userId=+req.params.userId;
        const lastId=+req.query.lastId;
        if(lastId!==0){
            where.id={[Op.lt]: +req.query.lastId};
        }
        const user = await User.findOne({where:{id:userId}});
        if(!user){
            return res.status(402).json('사용자 정보가 잘못 되었습니다.');
        } // 
        const followings = await user.getFollowings({
            where,
            attributes:['id','nickname','profilepic'],
            limit:10,
        });

        res.status(200).json(followings);
    }catch(err){
        console.error(err);
        next(err);
    }
};

exports.loadFollowers=async(req,res,next)=>{ /// 개수 제한해서 줘야함 
    try{
        const where={};
        const userId=+req.params.userId;
        const lastId=+req.query.lastId;
        if(lastId!==0){
            where.id={[Op.lt]: +req.query.lastId};
        }
        const user = await User.findOne({where:{id:userId}});
        if(!user){
            return res.status(403).json('사용자 정보가 잘못 되었습니다.');
        }
        const followers = await user.getFollowers({
            where,
            attributes:['id','nickname','profilepic'],
            limit:10,
        });
        res.status(200).json(followers);
    }catch(err){
        console.error(err);
        next(err);
    }
};

exports.loadUserPosts=async(req,res,next)=>{
    try{
        const where={UserId:req.params.userId};
        const lastId=+req.query.lastId;
        if(lastId!==0){
            where.id={[Op.lt]: +req.query.lastId};
        }
        const user = await User.findOne({
            where:{id:req.params.userId}
        });
        if(!user){
            return res.status(404).json("존재하지 않는 사용자입니다.");
        }
        const posts = await Post.findAll({
            where,
            limit:5,
            order:[
                ['createdAt','DESC'],
                [Comment, 'createdAt', 'DESC']
        ],
            include:[
                {model:User,attributes:['id','nickname','profilepic']},
                {model :Image},
                {model:Comment, include:[{model:User, attributes:['id','nickname','profilepic']}],  
                attributes:{exclude:['password']},},
                { model: User,  as: 'Likers', attributes:['id','nickname','profilepic']},
                { model: Post, as: 'Retweet', include:[{model:User, attributes:['id','nickname','profilepic']},
                { model: User,  as: 'Likers', attributes:['id','nickname','profilepic']},
                 {model: Image}, 
                 {model:Comment, include:[{model:User, attributes:['id','nickname','profilepic']}]},
            ]}]});
        res.status(200).json({posts});
    }catch(err){
        console.error(err);
        next(err);
    }
};

exports.loadLikedposts=async(req,res,next)=>{ // userId의 user가 Liked 한 포스트들 가져오기
    try{
        const userId=+req.params.userId;
        const lastId=+req.query.lastId;
        const where={};
        if(lastId!==0){
            where.id={[Op.lt]: +req.query.lastId};
        }
        const user = await User.findOne({where:{id:userId}});
        if(!user){
            return res.status(403).json('사용자 정보가 잘못 되었습니다.');
        }
        const posts= await user.getLiked({
            where,
            limit:5,
            order:[
                ['createdAt','DESC'],
                [Comment, 'createdAt', 'DESC']
             ],
             include:[
                {model:User,attributes:['id','nickname','profilepic']},
                {model :Image},
                {model:Comment, include:[{model:User, attributes:['id','nickname','profilepic']}],  
                attributes:{exclude:['password']},},
                { model: User,  as: 'Likers', attirbutes:['id','nickname']},
                { model: Post, as: 'Retweet', include:[{model:User, attributes:['id','nickname','profilepic']},
                { model: User,  as: 'Likers', attirbutes:['id','nickname']},
                 {model: Image}, 
                 {model:Comment, include:[{model:User, attributes:['id','nickname','profilepic']}]},
            ]}]
        });
        return res.status(200).json({posts});

    }catch(err){
        console.error(err);
        next(err);
    }
}

exports.loadUserInfo=async(req,res,next)=>{
    try{
        const fullUserwitoutPassword = await User.findOne({ // 패스워드 제외하고 followings,followers, posts 정보 가져오기 
            where:{id : req.params.userId},
            attributes:{
                attributes:['id','nickname','profilepic']
            }, // excluding password
            include:[{
                model:Post,
                attributes:['id']
            } , {
                model: User,
                as:'Followings', 
                attributes:['id', 'nickname']
            }, {
                model: User,
                as: 'Followers',
                attributes:['id', 'nickname']
            }, {
                model:Post,
                as: 'Liked',
                attributes:['id']
            }]
        })
        if(fullUserwitoutPassword){
            const data = fullUserwitoutPassword.toJSON();
            data.Posts = data.Posts.length;
            data.Followers=data.Followers.length;
            data.Followings=data.Followings.length;
            data.Liked=data.Liked.length;
            res.status(200).json(data);
        }
        else{
            return res.status(404).json('존재하지 않는 사용자입니다.');
        }
    }catch(err){
        console.error(err);
        next(err);
    }
}