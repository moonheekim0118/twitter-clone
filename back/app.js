const express =require('express');
const postRouter = require('./routes/post');
const app = express();
const db = require('./models');

db.sequelize.sync()
.then(()=>{
    console.log('db 연결 성공')
})
.catch((err)=>{
    console.log(err);
})

app.use('/post',postRouter);

app.listen(3065, ()=>{
    console.log("server is running");
})