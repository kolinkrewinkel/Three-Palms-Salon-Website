$(function() {
	loadPage();
});
function loadPage() {
	var showItem = function() {
		var self = this;
		$(self).stop().animate({ 
			'opacity': 1
			}, 1500, 'easeOutExpo');
	};
	var timeout = 0;
	$('.init').each(function(n) {
		var self = this;
		$(self).css({
			'opacity': 0
			});
		setTimeout(function() {
			showItem.apply(self)
		}, timeout += 150);		
	});
};
$(function(){$('#services.a').append('<span class="hover" />').each(function(){var $span=$('> span.hover',this).css('opacity',0);$(this).hover(function(){$span.stop().animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine',function(){$span.animate({'opacity':0.5},900,'easeOutSine',function(){$span.animate({'opacity':1.0},900,'easeOutSine')})})})})})})})})})})})})})})})})})})},function(){$span.stop().animate({'opacity':0},750)})})});
 $(document).ready(function () {
 	$('a').hover(function () {
 		$(this).stop().animate({'color':'#0fb214'}, 900, 'easeOutQuint')
 			}, function () {
 		$(this).stop().animate({'color': '#0b8511'}, 1200, 'easeOutSine')}
 		);
  
$(window).keydown(function (event) {
    // handle cursor keys
    if (event.keyCode == 37) {
		$('#lef').stop().animate({'opacity': 0}, 750, 'easeOutExpo');
		    } else if (event.keyCode == 39) {
		$('#rgh').stop().animate({'opacity': 0}, 750, 'easeOutExpo');
    }
  });
$(window).keyup(function (event) {
    // handle cursor keys
    if (event.keyCode == 37) {
		$('#lef').stop().animate({'opacity': 1}, 750, 'easeOutExpo');
		    } else if (event.keyCode == 39) {
		$('#rgh').stop().animate({'opacity': 1}, 750, 'easeOutExpo');
    }
  });
});