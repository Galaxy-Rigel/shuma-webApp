mui.ajax('/session',{
	dataType:'json',//服务器返回json格式数据
	type:'post',//HTTP请求类型
	timeout:10000,//超时时间设置为10秒；
	headers:{'Content-Type':'application/json'},	              
	success:function(data){
		//服务器返回响应，根据响应结果，分析是否登录成功；
		if(data.isSuccess){
//			console.log(data.obj)
			document.getElementsByClassName('myaccount_login')[0].innerHTML = data.obj.nickname;
			document.getElementsByClassName('myaccount_register')[0].style.display = 'none';
			mui(document).off('tap','.myaccount_login');
			document.getElementsByClassName('myaccount_userLogo')[0].style.backgroundImage = 'url("../images/9e3772a1-1a26-7c63-0da3-40721abdd568!720x360.jpg")'
		}else{
			document.getElementsByClassName('myaccount_login')[0].innerHTML = '登陆';
			document.getElementsByClassName('myaccount_register')[0].style.display = 'inline-block';
			
		}
	},
	error:function(xhr,type,errorThrown){
		//异常处理；
//		console.log(type);
	}
})






mui(document).on('tap','.myaccount_login',function login (){
	mui.openWindow({
    url:'login.html',
    id:'login.html',
    styles:{
//    top:newpage-top-position,//新页面顶部位置
//    bottom:newage-bottom-position,//新页面底部位置
//    width:newpage-width,//新页面宽度，默认为100%
//    height:newpage-height,//新页面高度，默认为100%
//    ......
    },
    extras:{
//    .....//自定义扩展参数，可以用来处理页面间传值
    },
    createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
    show:{
      autoShow:true,//页面loaded事件发生后自动显示，默认为true
      aniShow:'slide-in-right',//页面显示动画，默认为”slide-in-right“；
      duration:1000//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
    },
    waiting:{
      autoShow:true,//自动显示等待框，默认为true
      title:'正在加载...',//等待对话框上显示的提示内容
      options:{
//      width:waiting-dialog-widht,//等待框背景区域宽度，默认根据内容自动计算合适宽度
//      height:waiting-dialog-height,//等待框背景区域高度，默认根据内容自动计算合适高度
//      ......
      }
    }
})
})
