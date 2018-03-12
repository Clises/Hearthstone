function jj() {
	var oA2 = document.getElementById("a2"); /*排名点击事件*/
	var oA3 = document.getElementById("a3"); /*黄金积分点击事件*/
	var oSp1 = document.getElementById("sp1"); /*获取排名字体*/
	var oSp2 = document.getElementById("sp2"); /*获取积分字体*/
	var oJifen = document.getElementById("jifen"); /*获取积分排名*/
	var oHuangjin = document.getElementById("huangjin"); /*获取黄金积分*/
	var oImg = document.getElementById("img"); /*获取搜索按钮*/
	var oTtx = document.getElementById("txt"); /*获取搜索栏*/
	var oTab = document.getElementById("table"); /*获取表格*/
	var oTab1 = document.getElementById("table1");
	var oG1 = document.getElementById("g1"); /*更新时间*/
	var oG2 = document.getElementById("g2");
	var oSousuo = document.getElementById("sousuo"); /*搜索按钮*/
	var oBottomtupian = document.getElementById("bottomtupian"); /*图片1*/
	var oBottomtupian2 = document.getElementById("bottomtupian2"); /*图片2*/

	oSp1.style.color = "#233A6E"; /*蓝色*/
	oA2.style.borderColor = "#233A6E";

	oA2.onclick = function() /*积分排名点击事件*/ {
		oSp1.style.color = "#233A6E"; /*积分排名变蓝*/
		this.style.borderColor = "#233A6E";
		oG1.style.display = "block"; /*更新时间*/
		oG2.style.display = "none"; /*更新时间*/
		oSp2.style.color = "#64563E"; /*原来的颜色*/
		oA3.style.borderColor = "#CDB48E"; /*原来的颜色*/
		oJifen.style.display = "block";
		oHuangjin.style.display = "none";

		oImg.onclick = function() /*搜索点击事件*/ {

			for(var i = 1; i < oTab.tBodies[0].rows.length; i++) {
				var sTab = oTab1.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
				var sTaba = oTab1.tBodies[0].rows[i].cells[4].innerHTML.toLowerCase();
				var sTtx = oTtx.value.toLowerCase();
				if(sTtx.length != 0) {
					if(sTab.search(sTtx) != -1) {
						oTab1.tBodies[0].rows[i].cells[1].style.backgroundColor = "gray";
					} else {
						oTab1.tBodies[0].rows[i].cells[1].style.backgroundColor = "";
					}
					if(sTaba.search(sTtx) != -1) {
						oTab1.tBodies[0].rows[i].cells[4].style.backgroundColor = "gray";
					} else {
						oTab1.tBodies[0].rows[i].cells[4].style.backgroundColor = "";
					}

				}

			}
		}
		if(oTtx.value == oTtx.value) {
			oTtx.value = "";

		} else {
			oTtx.value = oTtx.value;
		}

	}
	oA3.onclick = function() /*黄金积分点击事件*/ {
		oSp2.style.color = "#233A6E"; /*黄金积分变蓝*/
		this.style.borderColor = "#233A6E";
		oG2.style.display = "block"; /*更新时间*/
		oG1.style.display = "none"; /*更新时间*/
		oSp1.style.color = "#64563E"; /*积分排名变原来颜色*/
		oA2.style.borderColor = "#CDB48E";
		oJifen.style.display = "none";
		oHuangjin.style.display = "block";
		oImg.onclick = function() /*搜索点击事件*/ {

			for(var i = 1; i < oTab.tBodies[0].rows.length; i++) {
				var sTab = oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
				var sTaba = oTab.tBodies[0].rows[i].cells[4].innerHTML.toLowerCase();
				var sTtx = oTtx.value.toLowerCase();
				if(sTtx.length != 0) {

					if(sTab.search(sTtx) != -1) {
						oTab.tBodies[0].rows[i].cells[1].style.backgroundColor = "gray";
					} else {
						oTab.tBodies[0].rows[i].cells[1].style.backgroundColor = "";
					}
					if(sTaba.search(sTtx) != -1) {
						oTab.tBodies[0].rows[i].cells[4].style.backgroundColor = "gray";
					} else {
						oTab.tBodies[0].rows[i].cells[4].style.backgroundColor = "";
					}
				}
			}

		}
		if(oTtx.value == oTtx.value) {
			oTtx.value = "";
		} else {
			oTtx.value = oTtx.value;
		}
	}



oBottomtupian.onmouseover = function() {
	oBottomtupian2.style.display = "block";
}
oBottomtupian.onmouseout = function() {
	oBottomtupian2.style.display = "none";
}

}
