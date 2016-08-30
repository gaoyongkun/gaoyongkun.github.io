var num = 0;
// 给每一个小圆点添加移入事件
$('#slider li p').on('mouseover',function(){
	$('#slider li p').each(function(){
		$(this).css({width:6,height:6,border:'none'});
	});
	$(this).css({width:10,height:10,border:'5px solid #cccccc'});
});
//  给每一个小圆点添加移出事件
$('#slider li p').on('mouseout',function(){
	$('#slider li p').each(function(){
		$(this).css({width:6,height:6,border:'none'});
	});
	$('#slider li p:eq('+num+')').css({width:10,height:10,border:'5px solid #cccccc'});
});
// 给每一个小圆点添加点击事件
$('#slider li').on('click',function(){
	num = $(this).index();
	scrollFn();
});

// 给下一页箭头添加点击事件
$('.godown').on('click',function(){
	num++;
	if (num>4) {
		num=4;
	}
	scrollFn();
	sliderFn();
});

// 页面滚动方法
function scrollFn(){
	$('.godown').hide();
	if (num <= 1) {
		$('html,body').animate({scrollTop:num*656},500,function(){
			$('.godown').show();
		});
	}else{
		$('html,body').animate({scrollTop:588+(num-1)*724},500,function(){
			if (num != 4) {
				$('.godown').show();
			};
		});
	};
};
//  圆点变化方法
function sliderFn(){
	$('#slider li p').each(function(){
		$(this).css('border','none');
		$(this).animate({width:6,height:6},100);
	});
	$('#slider li p:eq('+num+')').animate({width:10,height:10},100,function(){
		$(this).css('border','5px solid #CCCCCC');
	});
};


//  滚轮事件
function mouseWheel(obj,fn) {
	var ff = navigator.userAgent.indexOf("Firefox");

	if (ff != -1) {
		obj.addEventListener("DOMMouseScroll",wheel,false);
	}else{
		obj.onmousewheel = wheel;
	}
	function wheel(event){
		var event = event || window.event;
		var down = true;
		if (event.detail) {
			down = event.detail > 0;
		}else{
			down = event.wheelDelta < 0;
		}
		fn.apply(obj,[event,down]);
	}
	return false;
}
mouseWheel(document,function(event,down){
	if (down) {
		num++;
		if (num>4) {
			num=4;
		}
		scrollFn();
		$('#slider li p').each(function(){
			$(this).css({width:6,height:6,border:'none'});
		});
		$('#slider li p:eq('+num+')').css({width:10,height:10,border:'5px solid #cccccc'});
	}else{
		num--;
		if (num<0) {
			num=0;
		}
		scrollFn();
		$('#slider li p').each(function(){
			$(this).css({width:6,height:6,border:'none'});
		});
		$('#slider li p:eq('+num+')').css({width:10,height:10,border:'5px solid #cccccc'});
	}
});

//  键盘事件
$(document).keydown(function(event){
	if(event.keyCode == 38){
		num--;
		if (num<0) {
			num=0;
		}
		scrollFn();
		sliderFn();
	};
	if(event.keyCode == 40){
		num++;
		if (num>4) {
			num=4;
		}
		scrollFn();
		sliderFn();
	};
});