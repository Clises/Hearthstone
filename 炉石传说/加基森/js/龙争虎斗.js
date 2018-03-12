function lzhd(){
	var tu1_1=document.getElementById("u1_1");
	var tu1_2=document.getElementById("u1_2");
	var tu1_3=document.getElementById("u1_3");
	var tu2_1=document.getElementById("u2_1");
	var tu2_2=document.getElementById("u2_2");
	var tu2_3=document.getElementById("u2_3");
	var tblack=document.getElementsByClassName("black");
	
	var tbig_pic1=document.getElementsByClassName("big_pic1");
	var tbig_pic2=document.getElementsByClassName("big_pic2");
	var tbig_pic3=document.getElementsByClassName("big_pic3");
	var tbig_pic4=document.getElementsByClassName("big_pic4");
	var tbig_pic5=document.getElementsByClassName("big_pic5");
	var tbig_pic6=document.getElementsByClassName("big_pic6");
	var ttop_pic1=document.getElementsByClassName("top_pic1");
	var ttop_pic2=document.getElementsByClassName("top_pic2");
	var ttop_pic3=document.getElementsByClassName("top_pic3");
	var ttop_pic4=document.getElementsByClassName("top_pic4");
	var ttop_pic5=document.getElementsByClassName("top_pic5");
	var ttop_pic6=document.getElementsByClassName("top_pic6");
	var tbg_black=document.getElementsByClassName("bg_black");
	/*鼠标经过，隐藏显示*/
	tu1_1.onmouseover=function(){
		tblack[0].style.display="block";
	}
	tu1_1.onmouseout=function(){
		tblack[0].style.display="none";
	}
	tu1_2.onmouseover=function(){
		tblack[1].style.display="block";
	}
	tu1_2.onmouseout=function(){
		tblack[1].style.display="none";
	}
	tu1_3.onmouseover=function(){
		tblack[2].style.display="block";
	}
	tu1_3.onmouseout=function(){
		tblack[2].style.display="none";
	}
	tu2_1.onmouseover=function(){
		tblack[3].style.display="block";
	}
	tu2_1.onmouseout=function(){
		tblack[3].style.display="none";
	}
	tu2_2.onmouseover=function(){
		tblack[4].style.display="block";
	}
	tu2_2.onmouseout=function(){
		tblack[4].style.display="none";
	}
	tu2_3.onmouseover=function(){
		tblack[5].style.display="block";
	}
	tu2_3.onmouseout=function(){
		tblack[5].style.display="none";
	}
	
	/*鼠标单击放大*/
	/*tbg_black.style.height=window.innerHeight+"px";	*/
	tblack[0].onclick=function(){
		tbig_pic1[0].style.display="block";
	}
	ttop_pic1[0].onclick=function(){
		tbig_pic1[0].style.display="none";
	}
	
	tblack[1].onclick=function(){
		tbig_pic2[0].style.display="block";		
	}
	ttop_pic2[0].onclick=function(){
		tbig_pic2[0].style.display="none";
	}
	
	tblack[2].onclick=function(){
		tbig_pic3[0].style.display="block";		
	}
	ttop_pic3[0].onclick=function(){
		tbig_pic3[0].style.display="none";
	}
	
	tblack[3].onclick=function(){
		tbig_pic4[0].style.display="block";		
	}
	ttop_pic4[0].onclick=function(){
		tbig_pic4[0].style.display="none";
	}
	
	tblack[4].onclick=function(){
		tbig_pic5[0].style.display="block";		
	}
	ttop_pic5[0].onclick=function(){
		tbig_pic5[0].style.display="none";
	}
	
	tblack[5].onclick=function(){
		tbig_pic6[0].style.display="block";		
	}
	ttop_pic6[0].onclick=function(){
		tbig_pic6[0].style.display="none";
	}


}
