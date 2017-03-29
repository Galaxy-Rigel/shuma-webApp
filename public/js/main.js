var gallery = mui('.mui-slider');
			gallery.slider({
			  interval:2500//自动轮播周期，若为0则不自动播放，默认为0；
		});
		
		//锚点
		document.addEventListener('scroll',function(){
				var scrollTop=this.body.scrollTop;
				var hide=document.querySelector('.shopping-top-hide');
//				console.log(hide);
//				console.log(scrollTop);
				if(scrollTop>=400){
					hide.style.display='block'; 
				}else{
					hide.style.display='none';
				}
			})
