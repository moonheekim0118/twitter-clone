const express =require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');
const cors = require('cors');
const app = express();
const db = require('./models');
const passportConfig= require('./passport');
const passport = require('passport');
const session = require('express-session');
const cookieParser= require('cookie-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));

passportConfig();

app.use(morgan('dev'));
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
app.use('/user',userRouter);

db.sequelize.sync()
.then(()=>{
    app.listen(3065);
})
.catch((err)=>{
    console.log(err);
    next(err);
})