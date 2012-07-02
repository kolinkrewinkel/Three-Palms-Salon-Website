$(function() {
    	loadPage();
});

function loadPage() {
	// Staggered fade effect
	var showItem=function() {
		var self=this;
		$(self).stop().animate({'opacity':1},1500,'easeOutExpo')
	};
	var timeout=0;
	$('.init').each(function(n) {
		var self=this;
		$(self).css({'opacity':0});
		setTimeout(function() {
			showItem.apply(self)
		},timeout+=150)
	});

    $("#slider").responsiveSlides({
		auto: true,
		speed: 600,
		timeout: 5000,
		pause: true
	});
}
  
$(function () {
	$('#lef').append('<span class="hover" />').each(function () {
		var $span = $('> span.hover', this).css('opacity', 0);
		$(this).hover(function () {
			$span.stop().animate({
				'opacity': 1
			}, 650, 'easeOutQuint')
		}, function () {
			$span.stop().animate({
				'opacity': 0
			}, 750, 'easeOutSine')
		});
	});
});

$(function () {
        $('#services a').append('<span class="hover" />').each(function () {
                    var $span = $('> span.hover', this).css('opacity', 0);
                    $(this).hover(function () {
                        $span.stop().animate({
                            'opacity': 1
                                }, 650, 'easeOutQuint')
                    }, function () {
                        $span.stop().animate({
                            'opacity': 0
                                }, 750, 'easeOutSine')
                    });
                    $span.click(function () {
						$('.table-slide, .jq-class').animate({ height: "100%"}, 500, 'easeInQuint');
						$('.table-fade').animate({ opacity: 0.6 }, 1200, 'easeInQuint');
						$('.table-fade-opaque').animate({ opacity: 1.0 }, 1200, 'easeInQuint');
						$('#table-curtains, #table-curtain-bottom').css({'display' : 'block', 'opacity' : '0'});
						$('#table-curtains, #table-curtain-bottom').animate({opacity: 1.0}, 1290, 'easeOutSine');
	   				 	$('.table-fade').css({'display' : 'block', 'z-index' : '9900'});
    	                  });             
                    $('#table-bg').hover(function () {
                        $(this).stop().animate({
                            'opacity': 0.3
                                }, 350, 'easeOutQuint')
                    }, function () {
                        $(this).stop().animate({
                            'opacity': 0.5
                                }, 450, 'easeOutSine')
                    });
                                                 
        });
});
$(function () {
        $('.map').append('<span class="hover" />').each(function () {
                    var $span = $('> span.hover', this).css('opacity', 0);
                    $(this).hover(function () {
                        $span.stop().animate({
                            'opacity': 1
                                }, 650, 'easeOutQuint')
                    }, function () {
                        $span.stop().animate({
                            'opacity': 0
                                }, 750, 'easeOutSine')
                    });
                    $span.click(function () {
                        $('#map_canvas').css({'z-index' : '9900', 'display' : 'block', 'opacity' : '0'});						
                        $('#map_canvas').animate({ opacity: 1.0 }, 1200, 'easeInQuint');
						$('.table-fade').css({'display' : 'block', 'z-index' : '9890'});
						$('.table-fade').animate({ opacity: 0.8 }, 1200, 'easeInQuint');
					});                                                
        });
});

function dismiss() {		
	$('.table-slide, .jq-class').animate({ height: "0px"}, 500, 'easeOutSine');
	$('.table-fade').animate({ opacity: 0.0 }, 1200, 'easeInQuint');
	$('.table-fade-opaque').animate({ opacity: 0.0 }, 1200, 'easeInQuint');
	$('#map_canvas').animate({opacity: 0.0  }, 900, function() {
	$('#map_canvas').css({'display' : 'none', 'z-index' : '9900'});});
	                
	$('#table-curtains, #table-curtain-bottom').animate({opacity: 0.0}, 1290, 'easeOutSine');
	$('#table-curtains, #table-curtain-bottom').css({'display' : 'none', 'opacity' : '0'});
	$('.table-fade').css({'display' : 'none', 'z-index' : '9900'});
}

$(function () {
	$('.table-fade').click(function () {
		dismiss();
	});
});

$(function () {
        $('.header-fade a').append('<span class="hover" />').each(function () {
                    var $span = $('> span.hover', this).css('opacity', 0);
                    $(this).hover(function () {
                        $span.stop().animate({
                            'opacity': 1
                                }, 650, 'easeOutQuint')
                    }, function () {
                        $span.stop().animate({
                            'opacity': 0
                                }, 750, 'easeOutSine')
                    });
         });
});
$(document).keyup(function(e) {
	// Escape
	if (e.keyCode == 27) { 
		dismiss();
	}
});