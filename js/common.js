$(document).ready(function () {
	$(".arrow-up span").click(function(){
		$("html, body").animate({scrollTop: $(".top-page").height() + 10}, "slow");	
	});
		// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {
		myFunction();
		myFunction2();
		myFunction3();
		myFunction4();
		myFunction5();
		myFunction6();
	};

	// Get the header
	var arrow = document.getElementById("arrow-down1");
	var arrow2 = document.getElementById("arrow-up2");

	var arrow3 = document.getElementById("arrow-down2");
	var arrow4 = document.getElementById("arrow-up3");
	
	var arrow3 = document.getElementById("arrow-down2");
	var arrow4 = document.getElementById("arrow-up3");

	var arrow5 = document.getElementById("arrow-down3");
	var arrow6 = document.getElementById("arrow-up4");

	var arrow7 = document.getElementById("arrow-down4");

	// Get the offset position of the navbar
	var sticky = arrow.offsetTop;
	var sticky2 = arrow2.offsetTop;

	var sticky3 = arrow3.offsetTop;
	var sticky4 = arrow4.offsetTop;

	var sticky5 = arrow5.offsetTop;
	var sticky6 = arrow6.offsetTop;

	var sticky7 = arrow6.offsetTop;
	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    arrow.classList.add("sticky");
	  } else {
	    arrow.classList.remove("sticky");
	  }
	};
	function myFunction2(){
		if (window.pageYOffset < sticky2) {
	    arrow2.classList.add("sticky2");
	  } else {
	    arrow2.classList.remove("sticky2");
	  }
	};
	function myFunction3(){
		if (window.pageYOffset > sticky3) {
	    arrow3.classList.add("sticky");
	  } else {
	    arrow3.classList.remove("sticky");
	  }
	};
	function myFunction4(){
		if (window.pageYOffset > sticky4) {
	    arrow4.classList.add("sticky2");
	  } else {
	    arrow4.classList.remove("sticky2");
	  }
	};
	function myFunction5(){
		if (window.pageYOffset > sticky5) {
	    arrow5.classList.add("sticky");
	  } else {
	    arrow5.classList.remove("sticky");
	  }
	};
	function myFunction6(){
		if (window.pageYOffset > sticky6) {
	    arrow6.classList.add("sticky2");
	  } else {
	    arrow6.classList.remove("sticky2");
	  }
	};
	function myFunction7(){
		if (window.pageYOffset < sticky7) {
	    arrow7.classList.add("sticky");
	  } else {
	    arrow7.classList.remove("sticky");
	  }
	};
});

