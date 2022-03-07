import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';


import signup from './routes/signup.js'
import 'dotenv/config';

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

// api routes
// app.use('/student',jwtVerify, student);
app.use('/api/login', login);
app.use('/api/signup', signup);

// UI routes
app.get('/',(req,res)=>{
    res.render('login.ejs')
});
app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
});
app.get('/index',jwtVerify,(req,res)=>{
    res.render('index.ejs')
});

// initialize server
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server started at port ${process.env.SERVER_PORT}`);
});