function uslogin(){
	
	var olg1=document.getElementById("lg1");
	var ologbox=document.getElementById("login_1");
	olg1.onclick=function(){
	ajax("login.txt",function(str){
						var arr = eval(str);
						var ouser=document.getElementById("user").value;
						var opassword=document.getElementById("password").value;
						var k=0;
					
						for(var i=0;i<arr.length;i++)
						{
							if(ouser==0){
							alert("您未输入用户名");
							break;
							}
							if(opassword==0){
							alert("您未输入密码");
							break;
							}
							else{
								if(ouser==arr[i].user){
									if(opassword==arr[i].password){
										k=1;
										break;
									}
									else {
//										alert("密码错误");
										k=2;
										break;
									}
								}
								else{
//									alert("没有此用户");
									k=3
								}
							}
								
						}
						if(k==1){
//							alert("成功");
							ologbox.innerHTML="欢迎您"+ouser+"<br/>您已登陆成功";
						}
						if(k==2){
							alert("密码错误");
						}
						
						if(k==3){
							alert("没有此用户");
						}
						
					});
				}
}
