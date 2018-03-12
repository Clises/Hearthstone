 window.onload=function(){
 	            var oUl=document.getElementById('t3_ul')
 	            var oH4=document.getElementById('h4');
			   	var oP1=document.getElementById('hero-intro');
			   	var oSk=document.getElementById('skill-img');
			   	var oSi=document.getElementById('skill-intro');
			   	var oHs=document.getElementById('hero-skillchild');
			   	var OTx=document.getElementById('texing');
			   	var OLi1 =document.getElementById('oli1');
			   	OLi1.onmouseover=function(){
			   		OLi1.style.backgroundPositionX='-18px';
			   		OLi1.style.backgroundPositionY='-88px';
			   		OLi1.style.width='60px';
			   		OLi1.style.height='60px';
			   		oUl.style.backgroundImage='url(img/法师.png)';
			   		oH4.innerHTML='<span>法师</br></span>吉安娜·普罗德摩尔';
			        oP1.innerHTML='若要说谁最擅长把法力转化成燃烧的烈焰，恐怕没有人能和吉安娜相比。 她会把套牌中大量的直接伤害法术肆无忌惮地砸在对手身上，包括许多强大的清场法术。 再加上她那能够有效地对付小型随从的英雄技能， 以及各种奥秘，吉安娜可算得上是一个全面而致命的对手。';
			   	    oSk.style.backgroundPositionX="0px";
			   	    oSi.innerHTML='火焰冲击：';
			   	    oHs.innerHTML='造成1点伤害';
			   	    OTx.innerHTML="<h5>特性简介</h5>法师是掌控魔法的智者。吉安娜•普罗德摩尔在魔兽系列中，已是一名历经数战的著名大法师。 她能熟练地掌控奥术、冰霜和火焰魔法，拥有丰富的法术和强大的火力输出。 火焰冲击能无视嘲讽对任意目标造成伤害。作为拥有秘能卡的英雄之一，吉安娜能通过寒冰护体来保护自己， 也能使用镜像实体来复制对手的随从。她拥有强大的AOE能力，同时，她的火球术和炎爆术，更是极为强大的火力输出。 而法师的招牌技能——变形术，也为吉安娜提供了控制对手的手段，往往能为战局带来更多变化和惊喜";
			   	} 
			   	OLi1.onmouseleave=function(){
			   		OLi1.style.backgroundPositionX='-27px';
			   		OLi1.style.backgroundPositionY='-15px';
			   		OLi1.style.width='40px';
			   		OLi1.style.height='40px';
			   	}
			    var OLi2 =document.getElementById('oli2');
			   	OLi2.onmouseover=function(){
			   		OLi2.style.backgroundPositionX='-90px';
			   		OLi2.style.backgroundPositionY='-88px';
			   		OLi2.style.width='60px';
			   		OLi2.style.height='60px';
			   		oUl.style.backgroundImage='url(img/猎人.png)';
			   		oH4.innerHTML='<span>猎人</br></span>雷克萨';
			        oP1.innerHTML='如果说音乐能够平息野兽狂野的怒火，那么对于雷克萨来说，没有什么音乐能比他的野兽们撕裂猎物时所发出的声音更动听的了。他很沉稳，却也很狂野，这听上去有些矛盾，但这正是我们想说的。';
			   	    oSk.style.backgroundPositionX="-95px";
			   	    oSi.innerHTML='稳固射击：';
			   	    oHs.innerHTML='对敌方英雄造成2点伤害';
			   	    OTx.innerHTML="<h5>特性简介</h5>英雄技能稳固射击能固定地对敌方英雄造成伤害，奥术射击、多重射击等法术卡也能带来可观的输出。作为奥秘卡的爆炸陷阱、冰冻陷阱等，经常能带来意想不到的收获。而作为一个猎人，最可怕的并不是这些——猎人可是万兽之王！雷克萨的增强法术能够将最弱小的野兽随从变成杀戮机器，甚至召唤出传说中的古老暴龙王！而他箭筒里暗藏着的各种直接攻击法术则能消灭任何阻挡他的野兽前进的敌人。狩猎开始了！";
			   	}
			   	OLi2.onmouseleave=function(){
			   		OLi2.style.backgroundPositionX='-99px';
			   		OLi2.style.backgroundPositionY='-15px';
			   		OLi2.style.width='40px';
			   		OLi2.style.height='40px';
			   	}
            	var OLi3 =document.getElementById('oli3');
			   	OLi3.onmouseover=function(){
			   		OLi3.style.backgroundPositionX='-163px';
			   		OLi3.style.backgroundPositionY='-88px';
			   		OLi3.style.width='60px';
			   		OLi3.style.height='60px';
			   		oUl.style.backgroundImage='url(img/圣骑士.png)';
			   		oH4.innerHTML='<span>圣骑士</br></span>乌瑟尔·光明使者';
			   		oP1.innerHTML='设想你是一个随从，你更愿意加入谁的套牌呢？是会把你喂给恶魔的古尔丹，还是会增强你，治疗你，然后派遣大量援军支持你的乌瑟尔？想一想吧。乌瑟尔能够赐予一个弱小的随从以攻无不克的钢铁之躯，也能够让一个强大的随从在忏悔中变得软弱。他还能够不断地将白银之手新兵招至麾下，所以他几乎永远不会缺少随从。';
			   	    oSk.style.backgroundPositionX="-190px";
			        oSi.innerHTML='白银新兵：';
			   	    oHs.innerHTML='召唤一个1/1的白银之手新兵';
			   	    OTx.innerHTML="<h5>特性简介</h5>乌瑟尔能源源不断地召唤白银之手新兵加入战斗，并用骑士特有的各种祝福来强化他们。他能使用圣光为自己治疗，也能使用惩戒的力量来制裁邪恶，甚至复活已经阵亡的随从。请不要放过圣骑士的每一个随从，因为骑士的祝福随时都能让他们变成可怕的对手！";
			   	}
			   	OLi3.onmouseleave=function(){
			   		OLi3.style.backgroundPositionX='-173px';
			   		OLi3.style.backgroundPositionY='-15px';
			   		OLi3.style.width='40px';
			   		OLi3.style.height='40px';
			   	}
 				var OLi4=document.getElementById('oli4');
			   	OLi4.onmouseover=function(){
			   		OLi4.style.backgroundPositionX='-238px';
			   		OLi4.style.backgroundPositionY='-88px';
			   		OLi4.style.width='60px';
			   		OLi4.style.height='60px';
			   		oUl.style.backgroundImage='url(img/战士.png)';
			   		oH4.innerHTML='<span>战士</br></span>加尔鲁什•地狱咆哮';
			   		oP1.innerHTML='作为艾泽拉斯最强大的战士，加尔鲁什所带到场上的不仅有各种战斗兵器，大群嗜血的随从，还带来了一种愈战愈勇的战斗模式。这么说并不夸张——加尔鲁什的套牌能够在制造大量伤害的同时，将随从受到的伤害转化成让他们更加强大的力量。而当他那些浴血奋战的疯狂随从们在被召唤后就直接向你扑面而来的时候，可别被惊呆了。';
			   	    oSk.style.backgroundPositionX="-283px";
			        oSi.innerHTML='全副武装：';
			   	    oHs.innerHTML='获得2点护甲值';
			   	    OTx.innerHTML="<h5>特性简介</h5>全副武装能每回合给自己叠加2护甲，敌人需要更多的输出来打破它们。加尔鲁什能号令麾下的勇士冲锋，也能斩杀受伤的弱者，更能利用自己的盾牌进行反击！并且，由于战士们都拥有熟练地使用武器的技巧，加尔鲁什能使用的武器，也是《炉石传说》中数量最多的！加尔鲁什甚至能召唤他的父亲——格罗玛什•地狱咆哮！在战士的怒吼中颤抖吧!";
			   	}
			   	OLi4.onmouseleave=function(){
			   		OLi4.style.backgroundPositionX='-248px';
			   		OLi4.style.backgroundPositionY='-15px';
			   		OLi4.style.width='40px';
			   		OLi4.style.height='40px';
			   	}
              var OLi5=document.getElementById('oli5');
			   	OLi5.onmouseover=function(){
			   		OLi5.style.backgroundPositionX='-310px';
			   		OLi5.style.backgroundPositionY='-88px';
			   		OLi5.style.width='60px';
			   		OLi5.style.height='60px';
			   		oUl.style.backgroundImage='url(img/德鲁伊.png)';
			   		oH4.innerHTML='<span>德鲁伊</br></span>玛法里奥·怒风';
			   		oP1.innerHTML='对于玛法里奥来说，这款游戏是他展现德鲁伊多才多艺，无所不能的又一个舞台。他的许多法术可以从两种效果中选择一种进行施放，甚至他的随从都能够变身成为不同的形态来适应当时的需要。他能够加速法力值的增长，在资源上超越对手，然后施放强大的伤害性法术和清场技能，宛如一只巨熊横扫一切。';
			        oSk.style.backgroundPositionX="-380px";
			   	    oSi.innerHTML='变形术：';
			   	    oHs.innerHTML='本回合+1攻击力，+1护甲值';
			   	    OTx.innerHTML="<h5>特性简介</h5>变形术奠定了德鲁伊攻守兼备的优势，不仅能叠加护甲，还能每回合进行攻击。玛法里奥能使用自然的能量来治愈自己，也能召唤自然卫士来保卫他的领土。他能使用月火术和星火术来打击敌人，也能使用爪击和横扫让敌人知道激怒德鲁伊的后果。玛法里奥还能召唤他的恩师——塞纳留斯，与他并肩作战。";
			   	}
			   	OLi5.onmouseleave=function(){
			   		OLi5.style.backgroundPositionX='-322px';
			   		OLi5.style.backgroundPositionY='-15px';
			   		OLi5.style.width='40px';
			   		OLi5.style.height='40px';
			   	}
              var OLi6=document.getElementById('oli6');
			   	OLi6.onmouseover=function(){
			   		OLi6.style.backgroundPositionX='-388px';
			   		OLi6.style.backgroundPositionY='-88px';
			   		OLi6.style.width='60px';
			   		OLi6.style.height='60px';
			   		oUl.style.backgroundImage='url(img/古尔丹.png)';
			   		oH4.innerHTML='<span>术士</br></span>古尔丹';
			   		oP1.innerHTML='恶魔法术非常强大，但是会令施法者付出沉痛的代价。古尔丹对这一点了然于心。他所能控制的恶魔数量令人咋舌，尽管有些恶魔会因为太过强大或是太容易被召唤而造成一些“与众不同”的效果。由于古尔丹的英雄技能的存在，他想要建立起卡牌优势可谓轻而易举，这位年迈的术士让任何对手都无法小觑。';
			   	    oSk.style.backgroundPositionX="-480px";
			   	    oSi.innerHTML='生命分流：';
			   	    oHs.innerHTML='抽一张牌并受到2点伤害';
			   	    OTx.innerHTML="<h5>特性简介</h5>古尔丹能通过生命分流来获得额外的手牌。同时，他与黑暗进行了交易，能从他人身上汲取生命来治疗自己。古尔丹也能支配各种各样的恶魔，小鬼、魅魔、虚空行者，甚至可怕的地狱火都是被他支配的随从。不仅如此，他还能以自身为代价召唤强大的加拉克苏斯大王！谁敢阻挡术士的道路，那他一定会面对死亡！";
			   	}
			   	OLi6.onmouseleave=function(){
			   		OLi6.style.backgroundPositionX='-399px';
			   		OLi6.style.backgroundPositionY='-15px';
			   		OLi6.style.width='40px';
			   		OLi6.style.height='40px';
			   	} 
			   var OLi7=document.getElementById('oli7');
			   	OLi7.onmouseover=function(){
			   		OLi7.style.backgroundPositionX='-465px';
			   		OLi7.style.backgroundPositionY='-88px';
			   		OLi7.style.width='60px';
			   		OLi7.style.height='60px';
			   		oUl.style.backgroundImage='url(img/萨尔.png)';
			   		oH4.innerHTML='<span>萨满</br></span>萨尔';
			   		oP1.innerHTML='当一个萨满凭一己之力将整个世界多次从彻底崩坏的边缘拯救出来之后，他下一步会做什么呢？当然是到旅店里坐下来玩玩牌啦！萨尔的套牌仿佛是一个锦囊，包含着各种增强卡牌、伤害法术、治疗法术以及各种凶悍的随从。在和这位部落前任大酋长对战时，他看似均衡却全面的法术和随从组合总是能够出奇制胜。';
			        oSk.style.backgroundPositionX="-578px";
			   	    oSi.innerHTML='召唤图腾：';
			   	    oHs.innerHTML='随机召唤一个图腾';
			   	    OTx.innerHTML="<h5>特性简介</h5>萨尔有四种功能各异的图腾，有些能给对手带来麻烦，有些则能给自身带来增益。他是所有英雄中唯一拥有“过载”天赋的英雄——带有过载效果的卡牌往往能以极低的耗费带来可观的收益，但相应的下一回合却将受到惩罚。这决定了萨满能在一回合能打出伤害可观的爆发，加上风怒、火舌图腾、嗜血等萨满招牌技能……大地母亲在护佑着你！ 过载：过载的法力水晶数量将从下回合的可用法力水晶数量中扣除";
			   	}
			   	OLi7.onmouseleave=function(){
			   		OLi7.style.backgroundPositionX='-474px';
			   		OLi7.style.backgroundPositionY='-15px';
			   		OLi7.style.width='40px';
			   		OLi7.style.height='40px';
			   	} 
			   var OLi8=document.getElementById('oli8');
			   	OLi8.onmouseover=function(){
			   		OLi8.style.backgroundPositionX='-545px';
			   		OLi8.style.backgroundPositionY='-88px';
			   		OLi8.style.width='60px';
			   		OLi8.style.height='60px';
			   		oUl.style.backgroundImage='url(img/牧师.png)';
			   		oH4.innerHTML='<span>牧师</br></span>安度因·乌瑞恩';
			   		oP1.innerHTML='我们知道你现在的想法：他是个牧师，那么他要如何击败我呢？就靠它的治疗技能？没错，安度因的套牌中确实有许多强力而特别的治疗法术，然而他的暗影法术会立即让你大惊失色，然后，他能够使用诸如精神控制这样强大的控场法术击败你，而给于你最后一击的，可能还是你自己的随从。';
			   	    oSk.style.backgroundPositionX="-680px";
			   	    oSi.innerHTML='次级治疗术：';
			   	    oHs.innerHTML='恢复2点生命值';
			   	    OTx.innerHTML="<h5>特性简介</h5>安度因的治疗能力十分强大，可以很好的保证自己和随从的存活。他能使用真言术：盾等卡牌来提高随从的生命上限，也能用群体驱散来沉默对手所有的随从，甚至能使用神圣新星来同时达到群体治疗和AOE的效果。但牧师们往往光影相生，如有必要，安度因也可以使用暗影天赋来进行战斗，将治疗天赋变为强大的进攻能力。";
			   	}
			   	OLi8.onmouseleave=function(){
			   		OLi8.style.backgroundPositionX='-555px';
			   		OLi8.style.backgroundPositionY='-15px';
			   		OLi8.style.width='40px';
			   		OLi8.style.height='40px';
			   	} 
			   var OLi9=document.getElementById('oli9');
			   	OLi9.onmouseover=function(){
			   		OLi9.style.backgroundPositionX='-622px';
			   		OLi9.style.backgroundPositionY='-88px';
			   		OLi9.style.width='60px';
			   		OLi9.style.height='60px';
			   		oUl.style.backgroundImage='url(img/盗贼.png)';
			   		oH4.innerHTML='<span>潜行者</br></span>瓦莉拉•萨古纳尔';
			   		oP1.innerHTML='潜行者们总是善于偷袭、刺探和诡计，而瓦莉拉也不例外。这不仅仅是因为她的套牌中含有出色的直接攻击法术和强力的移除手段，她的卡牌之间还能打出连击效果，造成极为致命的威胁。更糟糕的是（对于他的对手而言），她能够掏出暗藏的匕首，这意味着在必要时，她会亲自来到战场上，把一些麻烦的随从轻易地解决掉。';
			   	    oSk.style.backgroundPositionX="-785px";
			   	    oSi.innerHTML='匕首精通：';
			   	    oHs.innerHTML='装备一把1/2的匕首';
			   	    OTx.innerHTML="<h5>特性简介</h5>瓦莉拉•萨古纳尔是一名出色的潜行者，匕首精通配合她的毒药，能让武器伤害变得异常恐怖。瓦莉拉的战斗以快节奏著称，众多低耗费的卡牌让她习惯于速战速决。而潜行者所独具的特色——连击，更可以为她带来强大的爆发和意想不到的收获。如果你喜欢干脆利落、不给对手任何喘息机会的战斗，瓦莉拉是你最好的选择！连击：当你在使用带有连击效果的卡牌前已经使用过其他卡牌（任何类型，例如法术、武器、随从等），那么就会触发连击效果。";
			   	}
			   	OLi9.onmouseleave=function(){
			   		OLi9.style.backgroundPositionX='-634px';
			   		OLi9.style.backgroundPositionY='-15px';
			   		OLi9.style.width='40px';
			   		OLi9.style.height='40px';
			   	} 
   
 
 
 
 
 
 
 
 
 }