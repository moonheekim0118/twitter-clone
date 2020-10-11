
module.exports = (sequelize, DataTypes)=>{
    const Comment= sequelize.define('Comment',{ // MySQL에는 users 테이블 생성
        content:{
            type:DataTypes.STRING(50),
            allowNull:false,
        },
    },{
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci', // 이모티콘 저장
    }
    )
    // UserId:{}
    // PostId:{}
    Comment.associate=(db)=>{
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}