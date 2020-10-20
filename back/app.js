const express =require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const hashtagRouter = require('./routes/hashtag');
const cors = require('cors');
const app = express();
const db = require('./models');
const passportConfig= require('./passport');
const passport = require('passport');
const session = require('express-session');
const cookieParser= require('cookie-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

dotenv.config();
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));

passportConfig();

app.use(morgan('dev'));
app.use('/',express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:process.env.COOKIE_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/post',postRouter);
app.use('/posts',postsRouter);
app.use('/users',usersRouter); // 다른 유저 정보 
app.use('/user',userRouter); // 내 정보
app.use('/hashtag',hashtagRouter); // 해쉬태그 검색

db.sequelize.sync()
.then(()=>{
    app.listen(3065);
})
.catch((err)=>{
    console.log(err);
    next(err);
})