const { User, Post } = require('../models');


exports.loadFollowings=async(req,res,next)=>{
    try{
        const userId=+req.params.userId;
        const user = await User.findOne({where:{id:userId}});
        if(!user){
            return res.status(403).json('사용자 정보가 잘못 되었습니다.');
        }
        const followings = user.getFollowings();
        res.status(200).json(followings);
    }catch(err){
        console.error(err);
        next(err);
    }
};

exports.loadFollowers=async(req,res,next)=>{ /// 개수 제한해서 줘야함 
    try{
        const userId=+req.params.userId;
        const user = await User.findOne({where:{id:userId}});
        if(!user){
            return res.status(403).json('사용자 정보가 잘못 되었습니다.');
        }
        const followers = user.getFollowers();
        res.status(20).json(followers);
    }catch(err){
        console.error(err);
        next(err);
    }
};

exports.loadUserPosts=async(req,res,next)=>{

};

exports.loadLikedposts=async(req,res,next)=>{
    
}

exports.loadUserInfo=async(req,res,next)=>{
    try{
        console.log('아미치것넹ㅋ');
        const fullUserwitoutPassword = await User.findOne({ // 패스워드 제외하고 followings,followers, posts 정보 가져오기 
            where:{id : req.params.userId},
            attributes:{
                exclude:['password']
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