
module.exports = (sequelize, DataTypes)=>{
    const Post= sequelize.define('Post',{ // MySQL에는 users 테이블 생성
        content:{
            type:DataTypes.STRING(150),
            allowNull:false,
        },
    },{
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci', // 이모티콘 저장
    }
    )
    Post.associate=(db)=>{
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers'});
        db.Post.belongsTo(db.Post, { as: 'Retweet' }); // post.addRetweet
    };
    return Post;
}