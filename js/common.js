$(document).ready(function () {
	$(".arrow-up span").click(function(){
		$("html, body").animate({scrollTop: $(".top-page").height() + 10}, "slow");	
	});

});

