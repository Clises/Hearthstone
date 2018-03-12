function luntan() {
	var ttxt1 = document.getElementById("txt1");
	var ttxt2 = document.getElementById("txt2");
	var tbut1 = document.getElementById("but");
	var ttp = document.getElementById("tp");
	tbut1.onclick = function() {
		var tBox = document.createElement("div");
		tBox.className = "li_box"; /*大框*/

		var tDiv = document.createElement("div");
		tDiv.className = "li_h1"; /*标题*/
		tDiv.innerHTML = "标题：" + ttxt1.value;
		tBox.appendChild(tDiv);

		var tDiv = document.createElement("div");
		tDiv.className = "li_time"; /*时间*/
		var date = new Date();
		var s1 = null;
		s1 = date.toLocaleString();
		tDiv.innerHTML = s1;
		tBox.appendChild(tDiv);

		var tDiv = document.createElement("div");
		tDiv.className = "li_pic"; /*图片*/
		tDiv.innerHTML="<img src='img/论坛/qwe.jpg' width='110px' height='136px'>";
		tBox.appendChild(tDiv);

		var tDiv = document.createElement("div");
		tDiv.className = "li_txt"; /*内容*/
		tDiv.innerHTML = ttxt2.value;
		tBox.appendChild(tDiv);

		var tDiv = document.createElement("div");
		tDiv.className = "li_name"; /*昵称*/
		tDiv.innerHTML = "昵称:小兔子";
		tBox.appendChild(tDiv);

		var tDiv = document.createElement("div");
		tDiv.className = "li_good"; /*点赞*/
		//tDiv.innerHTML = "<img src='img/论坛/点赞2.png' width='35px' height='35px'>";
		tDiv.style.backgroundImage = "url(img/论坛/点赞2.png)";
		tDiv.style.backgroundSize = "100% 100%";
		tBox.appendChild(tDiv);

		ttp.appendChild(tBox);

		var tDiv = ttp.getElementsByTagName("div");
		if(tDiv.length == 0) {
			ttp.appendChild(tBox);
		} else {
			ttp.insertBefore(tBox, tDiv[0]);
		}

		/*点赞单击*/
		var tli_good = document.getElementsByClassName("li_good");
		var s = 0;
		tli_good[0].onclick = function() {
			if(s == 0) {
				this.style.backgroundImage = "url(img/论坛/点赞1.png)";
				this.style.backgroundSize = "100% 100%";
				s = 1;
			} else if(s = 1) {
				this.style.backgroundImage = "url(img/论坛/点赞2.png)";
				this.style.backgroundSize = "100% 100%";
				s = 0;
			}

		}
	}
	
	
	
}