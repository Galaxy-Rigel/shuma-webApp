

mui.init({
    subpages:[{
	    url:'main.html',//子页面HTML地址，支持本地地址和网络地址
	    id:'main.html',//子页面标志
	    styles:{
	        top:'0',//子页面顶部位置
	        bottom:'50px'//子页面底部位置
     	 }
	}],
	preloadPages:[{
		url:'shopping-list.html',
		id:'shopping-list.html',
		styles:{
	        top:'0',//子页面顶部位置
	        bottom:'50px'//子页面底部位置
     	 }
		
	}
	,{
		url:'myaccount_content.html',
		id:'myaccount_content.html',
		styles:{
	        top:'0',//子页面顶部位置
	        bottom:'50px'//子页面底部位置
     	 }
	},{
		url:'classify.html',
		id:'classify.html',
		styles:{
	        top:'0',//子页面顶部位置
	        bottom:'50px'//子页面底部位置
     	 }
		
	},{
		url:'classify-details-product01.html',
		id:'classify-details-product01.html',
		styles:{
	        top:'0',//子页面顶部位置
	        bottom:'50px'//子页面底部位置
     	 }
	},{
		url:'login.html',
		id:'login.html',
		 styles:{
	        top:'0',//子页面顶部位置
	        bottom:'50px'//子页面底部位置
     	 }
	},{
		url:'shopping-list-content.html',
		id:'shopping-list-content.html',
		 styles:{
	        top:'0',//子页面顶部位置
	        bottom:'50px'//子页面底部位置
     	 }
	}
	]
	
})
	
mui.plusReady(function(){
	var pageIndex = plus.webview.getWebviewById('main.html');	
	var pageType = plus.webview.getWebviewById('classify.html');
	var pageShopping =  plus.webview.getWebviewById("shopping-list.html");
	var pageMyaccount = plus.webview.getWebviewById('myaccount_content.html');


	mui('nav').on('tap','#index',function(){
	 	pageIndex = plus.webview.getWebviewById('main.html')		
		pageIndex.show();
		
		pageType.hide();
		pageShopping.hide();
		pageMyaccount.hide();
	})

	mui('nav').on('tap','#type',function(){
		pageType = plus.webview.getWebviewById('classify.html')
		pageType.show()
	})
	mui('nav').on('tap','#shopping',function(){
	 	pageShopping =  plus.webview.getWebviewById("shopping-list.html")
		pageShopping.show()
	})
	mui('nav').on('tap','#myaccount',function(){
 		pageMyaccount = plus.webview.getWebviewById('myaccount_content.html');
		pageMyaccount.show()
	})
})

