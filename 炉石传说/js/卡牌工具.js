function kpgj(){
	var tpic1_1=document.getElementsByClassName("pic1_1");
	var tpic1_2=document.getElementsByClassName("pic1_2");
	var tpic1_3=document.getElementsByClassName("pic1_3");

	for(var i=0;i<tpic1_1.length;i++)/*第一部分卡牌*/
	{		
		var timer = null;
		tpic1_1[i].onmouseover=function()
		{
			clearInterval(timer);
			var oThis = this;		
			timer = setInterval(function(){
				for(var i=0;i<tpic1_1.length;i++)
				{
					if(tpic1_1[i].offsetWidth>100&&tpic1_1[i].offsetWidth<=300&&oThis.offsetWidth>=100&&oThis.offsetWidth<300)
					{
						tpic1_1[i].style.width=tpic1_1[i].offsetWidth-20+"px";	
						oThis.style.width=oThis.offsetWidth+20+"px";						
					}	
				}
			},40);
		}
	}	
	
	for(var i=0;i<tpic1_2.length;i++)/*第二部分卡牌*/
	{		
		var timer = null;
		tpic1_2[i].onmouseover=function()
		{
			clearInterval(timer);
			var oThis = this;		
			timer = setInterval(function(){
				for(var i=0;i<tpic1_2.length;i++)
				{
					if(tpic1_2[i].offsetWidth>100&&tpic1_2[i].offsetWidth<=300&&oThis.offsetWidth>=100&&oThis.offsetWidth<300)
					{
						tpic1_2[i].style.width=tpic1_2[i].offsetWidth-20+"px";	
						oThis.style.width=oThis.offsetWidth+20+"px";						
					}	
				}
			},40);
		}
	}
	
	for(var i=0;i<tpic1_3.length;i++)/*第三部分卡牌*/
	{		
		var timer = null;
		tpic1_3[i].onmouseover=function()
		{
			clearInterval(timer);
			var oThis = this;		
			timer = setInterval(function(){
				for(var i=0;i<tpic1_3.length;i++)
				{
					if(tpic1_3[i].offsetWidth>100&&tpic1_3[i].offsetWidth<=300&&oThis.offsetWidth>=100&&oThis.offsetWidth<300)
					{
						tpic1_3[i].style.width=tpic1_3[i].offsetWidth-20+"px";	
						oThis.style.width=oThis.offsetWidth+20+"px";						
					}	
				}
			},40);
		}
	}

}	
	
	

