const { User } = require('../models');
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
            return res.status(200).json(user); // login Completed
        })
    })(req,res,next);
};


exports.logout=(req,res,next)=>{
    req.logout();
    req.session.destroy();
    res.stats(200).send('okay');
}