$(document).ready(function () {
	$(".arrow-up span").click(function(){
		$("html, body").animate({scrollTop: $(".top-page").height() + 10}, "slow");	
	});
	window.onscroll = function() {
		myFunction();
	};

	var arrowDown = document.getElementById("second2");
	var sticky = arrowDown.offsetTop;

	var arrowUp = document.getElementById("second");
	var sticky2 = arrowUp.offsetTop;

	var arrowDown2 = document.getElementById("third2");
	var sticky3 = arrowDown2.offsetTop;

	var arrowUp2 = document.getElementById("third");
	var sticky4 = arrowUp2.offsetTop;
	
	var arrowDown3 = document.getElementById("fourth2");
	var sticky5 = arrowDown3.offsetTop;

	var arrowUp3 = document.getElementById("fourth");
	var sticky6 = arrowUp3.offsetTop;

	function myFunction() {

	  if (window.pageYOffset > sticky) {
	    arrowDown.classList.add("fixed");
	  } else{
	    arrowDown.classList.remove("fixed");
	  };

	   if (window.pageYOffset < sticky2) {
	     arrowUp.classList.add("fixed2");
	   } else{
	     arrowUp.classList.remove("fixed2");
	     arrowDown.classList.remove("fixed");
		}; 	
	 	 

	 	 if (window.pageYOffset < sticky3) {
	    	arrowDown2.classList.add("fixed");
		  } else{
		    arrowDown2.classList.remove("fixed");
		  };
		  if (window.pageYOffset < sticky4) {
	    	arrowUp2.classList.add("fixed2");
		  } else{
		  	arrowDown2.classList.remove("fixed");
		    arrowUp2.classList.remove("fixed2");
		  };

		  if (window.pageYOffset > sticky4) {
	    	arrowDown3.classList.add("fixed");
		  } else{
		    arrowDown3.classList.remove("fixed");
		  };
		  if (window.pageYOffset < sticky6) {
	    	arrowUp3.classList.add("fixed2");
		  } else{
		  	arrowDown2.classList.remove("fixed");
		    arrowUp3.classList.remove("fixed2");
		  };
	};
 
});

