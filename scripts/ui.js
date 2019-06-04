jQuery(window).on('load', function(){

  $(".parallax-window, #our-impact").css("min-height", $(window).height());

	$(window).on("resize", function (e) {
		$(".parallax-window, #our-impact").css("min-height", $(window).height());
	});

	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
	     $(".parallax-window, #our-impact").css("height", $(window).height());
	}

});
