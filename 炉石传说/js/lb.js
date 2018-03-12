function lb(){
				var oul1=document.getElementById("ul1");
				var oul2=document.getElementById("ul2");
				var otxt=document.getElementById("text");
				var oli1=document.getElementById("li1");
				var oli2=document.getElementById("li2");
				var oli3=document.getElementById("li3");
				var time=null;
				hello=function(){
					clearInterval(time);
					time=setInterval(function(){
						if(oul1.offsetLeft==-630){
							clearInterval(time);
							otxt.innerHTML="狂野系列和卡牌包变动现已上线";
							oli1.style.borderColor="black";
							oli2.style.borderColor="yellow";
							oli3.style.borderColor="black";
						}
						if(oul1.offsetLeft==-1270){
							clearInterval(time);
							otxt.innerHTML="高校星联赛秋季赛报名开启";
							oli1.style.borderColor="black";
							oli2.style.borderColor="black";
							oli3.style.borderColor="yellow";
						}
						if(oul1.offsetLeft==-1910){
							clearInterval(time);
							otxt.innerHTML="“冰封王座的骑士”现已上线";
							oli3.style.borderColor="yellow";
							oul1.style.left="10px";
							oli1.style.borderColor="yellow";
							oli2.style.borderColor="black";
							oli3.style.borderColor="black";
						}
						
						oul1.style.left=oul1.offsetLeft-10+"px";
					},10);
				}
				setInterval(function(){
					hello();
				},5000);
				oli1.onmouseover=function(){
					oul1.style.left="0px";
					oli1.style.borderColor="yellow";
					oli3.style.borderColor="black";
					oli2.style.borderColor="black";
					otxt.innerHTML="“冰封王座的骑士”现已上线";
				}
				oli1.onmouseout=function(){
					oli1.style.borderColor="yellow";
					oli3.style.borderColor="black";
					oli2.style.borderColor="black";
				}
				oli2.onmouseover=function(){
					oul1.style.left="-640px";
					oli1.style.borderColor="black";
					oli2.style.borderColor="yellow";
					oli3.style.borderColor="black";
					otxt.innerHTML="狂野系列和卡牌包变动现已上线";
				}
				oli2.onmouseout=function(){
					oli1.style.borderColor="black";
					oli2.style.borderColor="yellow";
					oli3.style.borderColor="black";
				}
				oli3.onmouseover=function(){
					oul1.style.left="-1280px";
					oli1.style.borderColor="black";
					oli2.style.borderColor="black";
					oli3.style.borderColor="yellow";
					otxt.innerHTML="高校星联赛秋季赛报名开启";
				}
				oli3.onmouseout=function(){
					oli1.style.borderColor="black";
					oli2.style.borderColor="black";
					oli3.style.borderColor="yellow";
				}
			}