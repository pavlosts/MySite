$(document).ready(function() {
	$(window).scroll(function() {
	    $(".Header").css({
	    'opacity' : 1 - (($(this).scrollTop())/250)
	    });          
	});
});