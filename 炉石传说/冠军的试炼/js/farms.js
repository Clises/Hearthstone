function yincang(){
	
	var oFar = document.getElementsByClassName("farmoo")[0];
	
	var oFad = document.getElementsByClassName("farm3_1")[0];
	
	var fArmspan = document.getElementsByClassName("farnspan")[0];
	

	
	oFar.onclick=function(){
		
		oFad.style.display= "block";
	}
	 fArmspan.onclick=function(){
	 	oFad.style.display= "none";
	 }
	
}
