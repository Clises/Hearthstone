window.onload=function  () 
		{
	
			var ohiden=document.getElementById("hiden");
			var ohiden1=document.getElementById("hiden1")
		    var oyincang=document.getElementById("yincang");
		    var oyincang1=document.getElementById("yincang1");
		    var oyincang2=document.getElementById("yincang2");
			
			var b=true;
			var c=true;
		    ohiden.onclick=function  ()
		  {
		  	c=false;
		 	showdj();
		  	showGame();
		  	
		  	
 		  }
		      ohiden1.onclick=function  ()
		  {
		  	b=false;
		 	showGame();
		 	showdj();
		 	
 		  }
		  function showGame(){
		  	
		  	if(b){
		  		oyincang.style.display="block";
		 		oyincang1.style.display="block";
		  	}else{
		  		oyincang.style.display="none";
		 		oyincang1.style.display="none";
		  	}
		  	b=!b;
		  }
		  function showdj(){
		  	
		  		if(c){
		  		oyincang2.style.display="block";
		 		oyincang1.style.display="block";
		  	}else{
		  		oyincang2.style.display="none";
		 		oyincang1.style.display="none";
		  	}
		  	c=!c;
		  }
		  
		  
		  oyincang1.onclick=function  ()
		  {
		 	b=false;
		 	showGame();
		 	c=false;
		 	showdj();
		  }
		    
		  $("#game-tu1").animate({height:280},300,function  ()
		  {
		  	$("#game-tu2").animate({height:280},300,function  ()
		  	{
		  		$("#game-tu3").animate({height:280},300,function  ()
		  		{
		  			$("#game-tu4").animate({height:280},300,function  ()
		  			{
		  				$("#game-tu5").animate({height:280},300,function  ()
		  				{
		  					$("#game-tu6").animate({height:280},300);
		  				});
		  			});
		  		});
		  	});
		  });
		  
             var timer=null;
             
  
		      
		     function timer1 () 
		     {
		     	  $("#biglogo").animate({top:208},1000,function  ()
	          {
		    	$("#biglogo").animate({top:216},1000);
		      });
		     }
		     
		     setInterval(function  ()
		     {
		     	timer1 () ;
		     },2000);
		     
		     timer1();

		  
		var ocar1=document.getElementById("car1");
		var obg2=document.getElementById("bg2");
		var onewcar=document.getElementById("newcar");
		
		ocar1.onmouseover=function  ()
		{
			$("#car2").fadeIn(10);
			$("#car1").animate({height:"80%",width:"44%"},500);
			$("#car2").animate({left:250,opacity:"slow"},500);
			
			$("#zi").animate({top:327},500);
			$("#shou").animate({top:350},500);
		}
		
		ocar1.onmouseout=function  ()
		{
			 $("#car1").animate({width:"40%",height:"75%"},500);
			 $("#car2").animate({left:10,opacity:"toggle"},300);
			 //
			 $("#zi").animate({top:317},500);
			 $("#shou").animate({top:340},500);
		}
		
		
		ocar1.onclick=function  ()
		{
			$("#car1").animate({top:-20},100);
			$("#car2").animate({top:-15},100,function  ()
			{
				$("#car1").fadeOut(400);
				$("#car2").fadeOut(400);
				$("#car2").animate({width:"0px",height:"75%"},0);
				$("#shou").fadeOut(400);
				$("#zi").fadeOut(400);
				$("#car4").fadeIn(400);
				$("#car5").fadeIn(400);
				timer=setTimeout(function  ()
						{
							$("#car4").animate({left:-148},1);	
							$("#car4").animate({left:-152},1,function  ()
							{
								$("#car4").fadeOut(100)
							});	
						},50);
						
				$("#boom1")	.fadeIn(1000,function ()
				{
					$("#boom1").fadeOut(130);
					$("#boom2").fadeIn(120,function  ()
					{
						$("#boom3").fadeIn(120,function  ()
						{
							$("#boom2").fadeOut(130,function  ()
							{
								$("#boom4").fadeIn(120,function  ()
								{
									$("#boom3").fadeOut(300,function  ()
									{
										$("#boom4").fadeOut(130)
										$("#newcar").fadeIn()
										$("#car5").animate({
										   width: '0px',
										   height: "285px",
										   left:"300px"
										 },150,function()
										 {
											   $("#car5").animate(
											   	{
												   width: '200px',
												   height: "285px",
												   left:"200px"
											    },150,function  ()
											    {
												   	$("#car5").fadeOut(0,function  ()
												   	{
												   		$("#car2-1").fadeIn(0)
												   	})
												   	obg2.style.zIndex="200";
											    })
											   
										   })
									})
								})
							})
						})
					})
				})
			});
		}
		
		
		onewcar.onclick=function  ()
				{
					$("#newcar").fadeOut(200);
					$("#car2-1").fadeOut(200,function  ()
					{
						$("#car1").fadeIn(1);
						obg2.style.zIndex="99";
						
						$("#car2").fadeIn(1000);
						$("#car2").animate({width:"200px",height:"75%"},0);
					});
				}
				
				
				var opicture1=document.getElementById("picture-1");
				var opicture2=document.getElementById("picture-2");
				var opicture3=document.getElementById("picture-3");
				
				
				
				opicture1.onmouseover=function  ()
				{
					$("#picture-1").animate({height:"252",width:"430"},200);
					$("#small-txt1").fadeOut(200);
				}
				
				opicture1.onmouseout=function  ()
				{
					$("#picture-1").animate({height:"68%",width:"29%"},200);
					$("#small-txt1").fadeIn(200);
				}
				
				opicture2.onmouseover=function  ()
				{
					$("#picture-2").animate({height:"252",width:"430"},200);
					$("#small-txt2").fadeOut(200);
				}
				
				opicture2.onmouseout=function  ()
				{
					$("#picture-2").animate({height:"68%",width:"29%"},200);
					$("#small-txt2").fadeIn(200);
				}
				
				opicture3.onmouseover=function  ()
				{
					$("#picture-3").animate({height:"252",width:"430"},200);
					$("#small-txt3").fadeOut(200);
				}
				
				opicture3.onmouseout=function  ()
				{
					$("#picture-3").animate({height:"68%",width:"29%"},200);
					$("#small-txt3").fadeIn(200);
				}
				
				


                var ototalcar=document.getElementById("totalcar");
                
                
                ototalcar.onmousewheel=function  (ev) 
                {
                	var ovent=ev||event;
                	
                	$("#totalcar-play1").animate({left:"-161px",display:"block"},500);
                	$("#totalcar-play2").animate({right:"-175px",opacity:"slow"},500);
                		
                }
                
                
                var ototallookcar1=document.getElementById("totallookcar1");
                var ototallookcar2=document.getElementById("totallookcar2");
                var ototallookcar3=document.getElementById("totallookcar3");
                var ototallookcar4=document.getElementById("totallookcar4");
                var ototallookcar5=document.getElementById("totallookcar5");
                
                ototallookcar1.onmouseover=function  () 
                {
                	ototallookcar1.style.height="330px";
                	ototallookcar1.style.width="230px";
                }
                
                ototallookcar1.onmouseout=function  ()
                {
                	ototallookcar1.style.height="300px";
                	ototallookcar1.style.width="200px";
                }
                
                 ototallookcar2.onmousemove=function  () 
                {
                	ototallookcar2.style.height="330px";
                	ototallookcar2.style.width="230px";
                }
                
                ototallookcar2.onmouseout=function  ()
                {
                	ototallookcar2.style.height="300px";
                	ototallookcar2.style.width="200px";
                }
                
                 ototallookcar3.onmousemove=function  () 
                {
                	ototallookcar3.style.height="330px";
                	ototallookcar3.style.width="230px";
                }
                
                ototallookcar3.onmouseout=function  ()
                {
                	ototallookcar3.style.height="300px";
                	ototallookcar3.style.width="200px";
                }
                
                 ototallookcar4.onmousemove=function  () 
                {
                	ototallookcar4.style.height="330px";
                	ototallookcar4.style.width="230px";
                }
                
                ototallookcar4.onmouseout=function  ()
                {
                	ototallookcar4.style.height="300px";
                	ototallookcar4.style.width="200px";
                }
                
                 ototallookcar5.onmousemove=function  () 
                {
                	ototallookcar5.style.height="330px";
                	ototallookcar5.style.width="230px";
                }
                
                ototallookcar5.onmouseout=function  ()
                {
                	ototallookcar5.style.height="300px";
                	ototallookcar5.style.width="200px";
                }
                
                
                var olooka=document.getElementById("looka");
                var onowlookallcar=document.getElementById("nowlookallcars");
                var oclase=document.getElementById("close");
                
                olooka.onclick=function  ()
                {
                	onowlookallcar.style.display="block";
                }
                
                oclase.onclick=function  ()
                {
                	onowlookallcar.style.display="none";
                }
           
                var cnowlookallcar=document.getElementsByClassName("nowlookallcar");
              
                for (var i=0;i<cnowlookallcar.length;i++)
                {
	              	   cnowlookallcar[i].onmouseover=function()
	              	{
	             		this.style.width="230px";
	             		this.style.height="330px";
	             	}
	              	
	              	cnowlookallcar[i].onmouseout=function  ()
	              	{
	              		this.style.width="200px";
	             		this.style.height="300px";
	              	}
                }
             	
             	
             	var odemo=document.getElementById("demo");
             	
             	function istimer ()
             	{
             		$("#demo").animate({top:"460"},1000,function  ()
             		{
             			$("#demo").animate({top:"474"},1000);
             		})
             	}
             	
             	setInterval(function  ()
             	{
             		istimer ();
             	},2000);
             	
             	
             	
             	var cdwchakan=document.getElementsByClassName("dwchakan");
             	var cdw1=document.getElementsByClassName("dw1");
             	var cmeetpicture=document.getElementsByClassName("meetpicture");
             	
           
             	for (var k=0;k<cmeetpicture.length;k++)
             	{
             		cmeetpicture[k].index=k;
             		cmeetpicture[k].onmousemove=function  ()
             		{
             			
             			for (var j=0;j<cdw1.length;j++)
             			{
             				cdw1[j].style.display="none";
             				cdwchakan[j].style.display="none";
             			}
             			cdw1[this.index].style.display="block";
             			cdwchakan[this.index].style.display="block";
             		}
             		
             		
             	}
             	
             	var cbigpicture=document.getElementsByClassName("bigpicture");
             	
             	for (m=0;m<cbigpicture.length;m++) 
             	{
             		cdw1[m].index=m;
             		cdw1[m].onclick=function  ()
             		{
             			cbigpicture[this.index].style.display="block";
             		}
             	}
             	
             	var cmeetclose=document.getElementsByClassName("meetclose");
             	
             	for (var t=0;t<cmeetclose.length;t++) 
             	{
             		cmeetclose[t].index=t;
             		cmeetclose[t].onclick=function  ()
             		{
             			cbigpicture[this.index].style.display="none";
             		}
             	}
             	

		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		