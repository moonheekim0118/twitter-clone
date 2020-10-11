
module.exports = (sequelize, DataTypes)=>{
    const User= sequelize.define('User',{ // MySQL에는 users 테이블 생성
        email:{
            type:DataTypes.STRING(30),
            allowNull: false,
            unique:true,
        },
        nickname:{
            type:DataTypes.STRING(4),
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        profilepic:{
            type:DataTypes.STRING(200),
            allowNull:true,
        }
    },{
        charset:'utf8',
        collate:'utf8_general_ci',
    }
    )
    User.associate=(db)=>{
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, { through: 'Like' ,as: 'Liked'}); // 사용자와 사용자가 좋아요한 게시물 
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey:'FollowingId' }) ; // 팔로워 
        db.User.belongsToMany(db.User, {through: 'Follow' , as : 'Followings' , foreignKey:'FollowerId'}) ; // 팔로잉 
    };
    return User;
}