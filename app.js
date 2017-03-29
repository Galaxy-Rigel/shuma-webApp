"use strict";
const express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
cookieParser = require('cookie-parser'),
session = require('express-session'),
mydb = require('./model/index');


let app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
  secret: '12345',
  name: 'user',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: true,
}));


app.use(express.static(path.join(__dirname,'public')))


//判断用户登陆
app.use('/session',(req,res)=>{
	//判断是否存在session
		if(req.session.user){
//			console.log(req.session.user);
			res.send({isSuccess:true,obj:req.session.user});
		}else{
			res.send({isSuccess:false});
		}
		res.end()
})


//登陆api
app.use('/api/login',(req,res)=>{
	let selector = req.body;
//	console.log(selector);
	mydb.user.find(selector,'nickname username addtime',function(err,docs){
		if(err){
			res.send({isSuccess:false,err:err})
		}else{
			if(docs.length>0){
				req.session.user = docs[0];
				res.send({isSuccess:true,obj:docs[0]})
			}else{
				res.send({isSuccess:false,err:'用户名或密码错误'})
			}
		}
	})
})









app.listen(port,(err)=>{
	if(err)
		throw err;
	console.log('this server start at port:%d',port);
})
