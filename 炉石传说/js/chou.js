function chou(){
	var oli=document.getElementsByClassName("chouli");
	var ostar=document.getElementById("star");
	var ofin=document.getElementById("fin");
	var time;
	ostar.onclick=function(){
		clearInterval(time);
		time=setInterval(function(){
			var i=Math.floor(Math.random()*9)
			for(var k=0;k<oli.length;k++){
				oli[k].style.display="none";
			}
			console.log(i);
			oli[i].style.display="block";
		},100);
	}
	ofin.onclick=function(){
		clearInterval(time);
	}
}


