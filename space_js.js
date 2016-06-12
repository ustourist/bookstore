	$(function(){
	var $block = $('.pic'), 
		$ad = $block.find('.sliderbg'),
		showIndex = 0,			// 預設要先顯示那一張
		fadeOutSpeed = 1000,	// 淡出的速度
		fadeInSpeed = 1000,		// 淡入的速度
		speed = 3000,
		defaultZ = 5;			// 預設的 z-index
 
	// 先把其它圖片的變成透明
	$ad.css({opacity: 0,zIndex: defaultZ - 1}).eq(showIndex).css({opacity: 1,zIndex: defaultZ});
 
	// 當按鈕被點選時
	$('.map li').click(function(){
		// 取得目前點擊的號碼
		showIndex = $(this).text() * 1 - 1;
 
		// 顯示相對應的區域並把其它區域變成透明
		$ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1).css('zIndex', defaultZ).siblings('.sliderbg').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
		// 讓 a 加上 .on
		$(this).addClass('active').siblings().removeClass('active');
 
		return false;

	}).focus(function(){
		$(this).blur();
	}).eq(showIndex).addClass('active');

// });

	$('.map li').click(function(){
		isClick = true;
		// 停止計時器
		clearTimeout(timer);
	}, function(){
		isClick = false;
		clearTimeout(timer);
		// 啟動計時器
		timer = setTimeout(autoClick, speed);
	})
 
	// 自動點擊下一個
	function autoClick(){
		// if(isHover) return;
		showIndex = (showIndex + 1) % $('.map li').length;
		$ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1).css('zIndex', defaultZ).siblings('.sliderbg').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
		$('.map li').eq(showIndex).click();
	}
 
	// 啟動計時器
	timer = setTimeout(autoClick, speed);
});




