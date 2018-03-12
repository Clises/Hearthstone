window.onload=function(){
	var odiv=document.getElementById("card");
		var before = 0;
	document.onmousemove = function(ev) {
		var oEvent = ev || event;
		var s = 0.5;
		
		if( oEvent.clientX<before){
			odiv.style.left=odiv.offsetLeft+0.6+"px";
		}
		
		if(oEvent.clientX>before)
		{
			odiv.style.left=odiv.offsetLeft-0.6+"px";
		}
		 if(oEvent.clientY<before)
		 {
			odiv.style.top=odiv.offsetTop+0.4+"px";
		}
		 if(oEvent.clientY>before)
		 {
			odiv.style.top=odiv.offsetTop-0.4+"px";
		}
		before=oEvent.clientX;
	}
	
}

