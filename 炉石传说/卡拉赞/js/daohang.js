function daohang(){
	
	var oNews = document.getElementById("onews");
	var oUl = document.getElementById("news");
	
	var oNews1 = document.getElementById("onews1");
	var oUl1 = document.getElementById("news1");
	
	var oNews2 = document.getElementById("onews2");
	var oUl2 = document.getElementById("news2");
	
	var oNews3 = document.getElementById("onews3");
	var oUl3 = document.getElementById("news3");
	
	var oA  = document.getElementsByTagName("a");
	var oLi = document.getElementsByTagName("li");
	//console.log(oA.length)  17
	//console.log(oLi.length)
	
	
	
	
	oNews.onmouseover=function(){
			
		oUl.style.display = "block";
			
	}		
	oNews.onmouseout=function(){
		oUl.style.display = "none";
	}
	
	oNews1.onmouseover=function(){
			
		oUl1.style.display = "block";
			
	}		
	oNews1.onmouseout=function(){
		oUl1.style.display = "none";
	}
	
	oNews2.onmouseover=function(){
			
		oUl2.style.display = "block";
			
	}		
	oNews2.onmouseout=function(){
		oUl2.style.display = "none";
	}
	
	oNews3.onmouseover=function(){
			
		oUl3.style.display = "block";
			
	}		
	oNews3.onmouseout=function(){
		oUl3.style.display = "none";
	}
		
	
}

	
	

