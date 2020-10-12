const express =require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const cors = require('cors');
const app = express();
const db = require('./models');

app.use(cors({
    origin:'http://localhost:3000',
    credentials: false,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/post',postRouter);
app.use('/user',userRouter);

db.sequelize.sync()
.then(()=>{
    app.listen(3065);
})
.catch((err)=>{
    console.log(err);
    next(err);
})