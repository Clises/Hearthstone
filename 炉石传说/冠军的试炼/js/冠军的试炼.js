window.onload=function(){

     var oTu1=document.getElementsByClassName("tu1");
     var oTu2=document.getElementsByClassName("tu2");
     var oLi=document.getElementsByTagName("li");
     var oDatu1=document.getElementById("datu1");
     var oDatu2=document.getElementById("datu2");
     var oDatu3=document.getElementById("datu3");
     var oDatu4=document.getElementById("datu4");
     var oDatu5=document.getElementById("datu5");
     var oDatu6=document.getElementById("datu6");
     var oBtn1=document.getElementsByClassName("btn1"); 
     var oBtn2=document.getElementsByClassName("btn2");
     /*上部图片*/
    oLi[6].onmouseover=function(){
    	oTu1[0].style.display="block";
    }
    oLi[6].onmouseout=function(){
    	oTu1[0].style.display="none";
    }
    oLi[7].onmouseover=function(){
    	oTu1[1].style.display="block";
    }
    oLi[7].onmouseout=function(){
    	oTu1[1].style.display="none";
    }
    oLi[8].onmouseover=function(){
    	oTu1[2].style.display="block";
    }
    oLi[8].onmouseout=function(){
    	oTu1[2].style.display="none";
    }
    /*下部图片*/
    oLi[9].onmouseover=function(){
    	oTu2[0].style.display="block";
    }
    oLi[9].onmouseout=function(){
    	oTu2[0].style.display="none";
    }
    oLi[10].onmouseover=function(){
    	oTu2[1].style.display="block";
    }
    oLi[10].onmouseout=function(){
    	oTu2[1].style.display="none";
    }
    oLi[11].onmouseover=function(){
    	oTu2[2].style.display="block";
    }
    oLi[11].onmouseout=function(){
    	oTu2[2].style.display="none";
    }
    
    /*点击后的大图*/
      oTu1[0].onclick=function(){/*大图*/
      	oDatu1.style.display="block";
      }
      oTu1[1].onclick=function(){/*大图*/
      	oDatu2.style.display="block";
      }
      oTu1[2].onclick=function(){/*大图*/
      	oDatu3.style.display="block";
      }
      oTu2[0].onclick=function(){/*大图*/
      	oDatu4.style.display="block";
      }
      oTu2[1].onclick=function(){/*大图*/
      	oDatu5.style.display="block";
      }
      oTu2[2].onclick=function(){/*大图*/
      	oDatu6.style.display="block";
      }
      
      
      /*关闭按钮*/
      oBtn1[0].onclick=function(){
      	oDatu1.style.display="none";
      }
      oBtn1[1].onclick=function(){
      	oDatu2.style.display="none";
      }
      oBtn1[2].onclick=function(){
      	oDatu3.style.display="none";
      }
      oBtn2[0].onclick=function(){
      	oDatu4.style.display="none";
      }
      oBtn2[1].onclick=function(){
      	oDatu5.style.display="none";
      }
      oBtn2[2].onclick=function(){
      	oDatu6.style.display="none";
      }
           
}
