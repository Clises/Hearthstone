window.onscroll=onresize = function() {
					var topScroll = document.body.scrollTop; //滚动的距离,距离顶部的距离
					var bignav = document.getElementById("bar"); //获取到导航栏id
					if(topScroll > 230) { //当滚动距离大于230px时执行下面的东西
						bignav.style.position = 'fixed';
						bignav.style.top = '0';
						bignav.style.left = (window.innerWidth-bignav.offsetWidth)/2+"px";
						bignav.style.zIndex = '9999';
					} else { //当滚动距离小于230的时候执行下面的内容，也就是让导航栏恢复原状
						bignav.style.position = 'static';
					}
				}