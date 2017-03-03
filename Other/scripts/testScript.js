$('document').ready(function(){
	$('body').css("font-size", "1.5em");

	$('.promo:nth-child(1)').css({
			'-webkitTransition': 'all 2.2s',
			'margin-right': '10px',
			'left': '-400px'	
		});
	
//	$('.promo:nth-child(2)').css({
//			'-webkitTransition': 'all 2.2s',
//			'margin-right': '10px'
//		});
	
	$('.promo').mouseover(function(){
		$(this).css({
			'-webkitTransition': 'all 0.2s',
			'margin-top': '-4px'
		});
	});
	
	$('.promo').mouseout(function(){
		$(this).css({
			'-wedkitTransition': 'all 0.2s',
			'margin-top': '0'
		})
	});
}); 