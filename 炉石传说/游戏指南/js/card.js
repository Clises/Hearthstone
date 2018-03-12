function fudong(){
	var odiv=document.getElementById("card");
		var before = 0;
	document.onmousemove = function(ev) {
		var oEvent = ev || event;
		
		
		if( oEvent.clientX<before){
			odiv.style.left=odiv.offsetLeft+0.4+"px";
		}
		
		else if(oEvent.clientX>before)
		{
			odiv.style.left=odiv.offsetLeft-0.4+"px";
		}
		else if(oEvent.clientY<before)
		 {
			odiv.style.top=odiv.offsetTop+0.4+"px";
		}
		else if(oEvent.clientY>before)
		 {
			odiv.style.top=odiv.offsetTop-0.4+"px";
		}
		before=oEvent.clientX;
	}
	
}

