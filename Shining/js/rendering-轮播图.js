window.onload = function(){
	slider.style.display = "block";
	var num = 0;
	var timer = null;
	timer = setInterval(timeFn,3000);
	//  slider移入事件
	$('#slider').on('mouseover',function(){
		clearInterval(timer);
	});
	//  slider移出事件
	$('#slider').on('mouseout',function(){
		timer = setInterval(timeFn,3000);
	});
	//  小点的点击事件
	$('#slider li').each(function(){
		$(this).on('click',function(){
			num = $(this).index();
			changeFn();
		})
	})
	// 定时器方法
	function timeFn(){
		num++;
		if (num>2) {
			num = 0;
		}
		changeFn();
	}
	//  图片和小点变化方法
	function changeFn(){
		$('#move_photo img').each(function(){
			$(this).css('opacity','0');
		})
		$('#slider li').each(function(){
			$(this).css('backgroundColor','#8291a0');
		})
		$('#move_photo img:eq('+num+')').animate({opacity:1},500);
		$('#slider li:eq('+num+')').css('backgroundColor','#cfdb00');
	}

	//  给开关添加时间
	//  点击轮播图暂停
	$('.switch #stop img:eq(1)').on('click',function(){
		clearInterval(timer);
		$('.switch #stop img:eq(1)').hide();
		$('.switch #start img:eq(1)').hide();
	})
	//  点击轮播图开始
	$('.switch #start img:eq(0)').on('click',function(){
		timer = setInterval(timeFn,3000);
		$('.switch #start img:eq(1)').show();
		$('.switch #stop img:eq(1)').show();
	})
}
