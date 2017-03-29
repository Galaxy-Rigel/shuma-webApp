"use strict";
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/myweb',(err)=>{
	if(err)
		throw err;
	console.log('connect mongodb success');
})


let userTB = new mongoose.Schema({
	id:String,
	nickname:String,
	username:String,
	password:String,
	addtime:Date
})

let userDB = mongoose.model('user',userTB);


let userExport = new Object();

userExport.find = function(selector,columns,callback){
	userDB.find(selector,columns,function(err,docs){
		callback(err,docs);
	})
}



exports.user = userExport;
