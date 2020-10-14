const { User, Post } = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.signUp= async (req,res,next)=>{
    try{
        const exUser= await User.findOne({
            where:{
                email:req.body.email,
            }
        });
        if(exUser){
            return res.status(403).send('이미 사용중인 이메일 입니다.');
        }
        const hashedPassword= await bcrypt.hash(req.body.password,12);
        await User.create({
            email:req.body.email,
            nickname:req.body.nickname,
            password:hashedPassword
        });
        res.status(200).send('ok');
    }catch(err){
        console.log(err);
        next(err);
    }
};

exports.login = (req,res,next)=>{
    passport.authenticate('local', (err,user,info)=>{
        if(err){ // Server Error
            console.error(err);
            return next(err);
        }
        if(info){ // Client Error
            return res.status(401).send(info.reason); 
        }
        return req.login(user, async (loginErr)=> {
            if(loginErr){
                console.error(loginErr);
                return next(loginErr); // Error in Passport login 
            }
            const fullUserwitoutPassword = await User.findOne({ // 패스워드 제외하고 followings,followers, posts 정보 가져오기 
                where:{id : user.id},
                attributes:{
                    exclude:['password']
                }, // excluding password
                include:[{
                    model:Post,
                    attributes:['id']
                } , {
                    model: User,
                    as:'Followings', 
                    attributes:['id']
                }, {
                    model: User,
                    as: 'Followers',
                    attributes:['id']
                },
                {
                    model:Post,
                    as: 'Liked',
                    attributes:['id']
                }]
            })
            return res.status(200).json(fullUserwitoutPassword); // login Completed
        })
    })(req,res,next);
};


exports.logout=(req,res,next)=>{
    console.log(req.user);
    req.logout();
    req.session.destroy();
    res.status(200).send('okay');
}

exports.changeNickname= async (req,res,next)=>{
   try{
        const user = await User.findOne({ where : {id: req.user.id}});
        if(!user){
            return res.status(403).send('다시 로그인 해주시길 바랍니다.');
        }
        user.nickname=req.body.nickname;
        await user.save();
        return res.status(200).send('ok');
   }catch(err){
        console.log(err);
        next(err);
   }
}

exports.loadUser=async(req,res,next)=>{
    try{
        if(req.user){
            const fullUserwitoutPassword = await User.findOne({ // 패스워드 제외하고 followings,followers, posts 정보 가져오기 
                where:{id : req.user.id},
                attributes:{
                    exclude:['password']
                }, // excluding password
                include:[{
                    model:Post,
                    attributes:['id']
                } , {
                    model: User,
                    as:'Followings', 
                    attributes:['id']
                }, {
                    model: User,
                    as: 'Followers',
                    attributes:['id']
                }, {
                    model:Post,
                    as: 'Liked',
                    attributes:['id']
                }]
            })
            res.status(200).json(fullUserwitoutPassword);
        }
        else{
            res.status(200).json(null);
        }
    }catch(err){
        console.log(err);
        next(err);
    }
}