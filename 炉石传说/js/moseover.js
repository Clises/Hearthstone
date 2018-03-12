function over(){
	var odiv=document.getElementsByClassName("bb1");
	var oxin=document.getElementsByClassName("xin");
	var obt=document.getElementsByClassName("bt");
//	alert("111");
	for(var i=0;i<odiv.length;i++)
	{
		odiv[i].a=i;
		
		odiv[i].onmouseover=function(){
			oxin[this.a].style.boxShadow="0 0 40px orange ";
			obt[this.a].style.color="orange";
			obt[this.a].style.fontSize="19px";
		}
		odiv[i].onmouseout=function(){
			oxin[this.a].style.boxShadow="0 0 20px black ";
			obt[this.a].style.color="black";
			obt[this.a].style.fontSize="17px";
		}
	}
	
}
