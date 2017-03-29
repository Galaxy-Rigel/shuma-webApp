
mui(document).on('tap','#loginBtn',function(){
	let username = document.getElementById('userInput').value,
		password = document.getElementById('pswInput').value;
//		console.log(username)
//		console.log(password)
	mui.ajax('/api/login',{
		data:{
			username:username,
			password:password
		},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		headers:{'Content-Type':'application/json'},	              
		success:function(data){
			//服务器返回响应，根据响应结果，分析是否登录成功；
			if(data.isSuccess){
				mui.openWindow({
					url:'myaccount_content.html',
					id:'myaccount_content.html'
				})
			}else{
				alert('登陆失败');
			}
		},
		error:function(xhr,type,errorThrown){
			//异常处理；
			console.log(type);
		}
	});
})



	

