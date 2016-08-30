var uls = document.querySelectorAll('#p_wrap ul');
var p = document.querySelector("#progressWrap p");
// var imgSrc = ['http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0001.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0002.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0003.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0004.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0005.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0006.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0007.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0008.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0009.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0010.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0011.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0012.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0013.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0014.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0015.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0016.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0017.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0018.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0019.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0020.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0021.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0022.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0023.jpg','http://www.shiningcg.com/uploads/allimg/151021/%E5%AE%A4%E5%A4%961021%E6%9B%B4%E6%96%B0-0024.jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(5).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(13).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(14).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(15).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(16).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(17).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(18).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(20).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(21).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(35).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(42).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(44).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(46).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(53).jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(54).jpg','http://www.shiningcg.com/uploads/150901/1-150Z1103942428.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1133Q94S.jpg','http://www.shiningcg.com/uploads/150901/1-150Z110411A47.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1134JM27.jpg','http://www.shiningcg.com/uploads/150901/1-150Z113513L10.jpg','http://www.shiningcg.com/uploads/150901/1-150Z11341353I.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1134304C6.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1133944394.jpg','http://www.shiningcg.com/uploads/150901/1-150Z113493G23.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1135225557.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1135TX03.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1135I1I6.jpg','http://www.shiningcg.com/uploads/150901/1-150Z114104U13.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1135334937.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1140A5516.jpg','http://www.shiningcg.com/uploads/150901/1-150Z113403C95.jpg','http://www.shiningcg.com/uploads/150901/1-150Z11414345K.jpg','http://www.shiningcg.com/uploads/allimg/151020/SHINING%20(8).jpg','http://www.shiningcg.com/uploads/150901/1-150Z1140205329.jpg','http://www.shiningcg.com/uploads/150901/1-150Z114055W60.jpg','http://www.shiningcg.com/uploads/150901/1-150Z114095NC.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1135954a2.jpg','http://www.shiningcg.com/uploads/150901/1-150Z11405042O.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1140Q53C.jpg','http://www.shiningcg.com/uploads/150901/1-150Z114152E57.jpg','http://www.shiningcg.com/uploads/150901/1-150Z114125a24.jpg','http://www.shiningcg.com/uploads/150901/1-150Z110342W02.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1141634519.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1103G2403.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1103315305.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1140313109.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1140Z0612.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1141QH22.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1140410615.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1103546234.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1102440O6.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1102621105.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1102Z4209.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1101T5U8.jpg','http://www.shiningcg.com/uploads/150901/1-150Z1103204a4.jpg',];
var imgSrc = [
'img/rendering/M001.jpg','img/rendering/M002.jpg','img/rendering/M003.jpg','img/rendering/M004.jpg','img/rendering/M005.jpg','img/rendering/M006.jpg',
'img/rendering/01.jpg','img/rendering/02.jpg','img/rendering/03.jpg','img/rendering/04.jpg','img/rendering/05.jpg','img/rendering/06.jpg','img/rendering/07.jpg','img/rendering/08.jpg','img/rendering/09.jpg','img/rendering/10.jpg','img/rendering/11.jpg','img/rendering/12.jpg','img/rendering/13.jpg','img/rendering/14.jpg','img/rendering/15.jpg','img/rendering/16.jpg','img/rendering/17.jpg','img/rendering/18.jpg','img/rendering/19.jpg','img/rendering/20.jpg','img/rendering/21.jpg','img/rendering/22.jpg','img/rendering/23.jpg','img/rendering/24.jpg','img/rendering/25.jpg','img/rendering/26.jpg','img/rendering/27.jpg','img/rendering/28.jpg','img/rendering/29.jpg','img/rendering/30.jpg','img/rendering/31.jpg','img/rendering/32.jpg','img/rendering/33.jpg','img/rendering/34.jpg','img/rendering/35.jpg','img/rendering/36.jpg','img/rendering/37.jpg','img/rendering/38.jpg','img/rendering/39.jpg',
'img/rendering/SHINING01.jpg','img/rendering/SHINING02.jpg','img/rendering/SHINING03.jpg','img/rendering/SHINING04.jpg','img/rendering/SHINING05.jpg','img/rendering/SHINING06.jpg','img/rendering/SHINING07.jpg','img/rendering/SHINING08.jpg','img/rendering/SHINING09.jpg','img/rendering/SHINING10.jpg','img/rendering/SHINING11.jpg','img/rendering/SHINING12.jpg','img/rendering/SHINING13.jpg','img/rendering/SHINING14.jpg','img/rendering/SHINING15.jpg','img/rendering/SHINING16.jpg',
'img/rendering/室外1021更新-0001.jpg','img/rendering/室外1021更新-0002.jpg','img/rendering/室外1021更新-0003.jpg','img/rendering/室外1021更新-0004.jpg','img/rendering/室外1021更新-0005.jpg','img/rendering/室外1021更新-0006.jpg','img/rendering/室外1021更新-0007.jpg','img/rendering/室外1021更新-0008.jpg','img/rendering/室外1021更新-0009.jpg','img/rendering/室外1021更新-0010.jpg','img/rendering/室外1021更新-0011.jpg','img/rendering/室外1021更新-0012.jpg','img/rendering/室外1021更新-0013.jpg','img/rendering/室外1021更新-0014.jpg','img/rendering/室外1021更新-0015.jpg','img/rendering/室外1021更新-0016.jpg','img/rendering/室外1021更新-0017.jpg','img/rendering/室外1021更新-0018.jpg','img/rendering/室外1021更新-0019.jpg','img/rendering/室外1021更新-0020.jpg','img/rendering/室外1021更新-0021.jpg','img/rendering/室外1021更新-0022.jpg','img/rendering/室外1021更新-0023.jpg','img/rendering/室外1021更新-0024.jpg'];
var imgArr = [];
var count = 0;
var wrapHeight = 0;
function createFn(){
	for(var i = 0; i < imgSrc.length; i ++){
		var img = new Image();
		img.src = imgSrc[i];
		imgArr.push(img);
		imgArr[i].onload = function(){
			// 调用图片加载函数
			loadFn();
			// 创建li
			var li = document.createElement('li');
			var minUl = uls[0];
			for(var k = 0; k < uls.length; k ++){
				if(minUl.offsetHeight > uls[k].offsetHeight){
					minUl = uls[k];
				}
			}
			minUl.appendChild(li);
			li.innerHTML = '<a href="###">'+'<img src = "' + this.src + '">'+'<div></div>'+'</a>';
			li.className = 'animated bounceIn';
			// 给瀑布流里的图片点击事件
			$(li).children("a").on('click',function(){
				var clonePic = $(this).children('img').clone();
				$('#hideBody').show();
				$('#hideDiv').append(clonePic);
				var pwidth = $(this).children('img').width();
				var pheight = $(this).children('img').height();
				if (pwidth>=pheight) {
					$('#hideDiv').css('width',2.4*pwidth+'px');
					$('#hideDiv').css('height',2.4*pheight+'px');
				}else{
					$('#hideDiv').css('width',1.6*pwidth+'px');
					$('#hideDiv').css('height',1.6*pheight+'px');
				}
			})
		}
	}
	// 给放大的图片点击事件
	$('#hideBody').on('click',function(){
		$('#hideBody').hide();
		$('#hideDiv').children().remove();
	});
}
createFn();

// 图片加载函数
function loadFn(){
	count++;
	var rate = parseInt(count / imgArr.length * 100 )+ "%";
	p.innerHTML = rate;
	loadingprogress.style.width = rate;
	if (count >= imgArr.length) {
		h.innerHTML = "加载完成";
		setTimeout(function(){
			progressWrap.style.display = "none";
		},1000)
	}
}