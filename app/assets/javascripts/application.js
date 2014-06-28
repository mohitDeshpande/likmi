// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

ready = function(){
		// get height and width of section equal to that of the browser
		var pageWidth = $(window).width();
		var pageHeight = $(window).height();
	    
	    // set height and width of each section equal to that of browser
	    $("section").height(pageHeight);
	    $("section").width(pageWidth);
		    
	    // different styles for desktop and mobile
		if (pageWidth > 768) { //desktop style
	    	$(".center-block").css('padding-top', ($(window).height())*(23/100));
	    	$("#hero").css('margin-top', ($(window).height())*(30/100));
	    } else { // mobile style
	    	$("#cover").css('margin-top', (25));
	    	$("#cover").css('height', (pageHeight - 75));
	    	$("#hero").css('margin-top', (0));
	    	$("#caption").css('margin-top', (20));
	    	$("#modal-button-top").css('margin-top', (20));
	    	$("#order-button-top").css('margin-top', (40));
	    	$("#products-button").css('padding-bottom', (40));
	    	$("header").css('top', (15));
	    }
	    
	    // scrolls with a smooth transition to the next section.
 	    $("#scroll-button").click(function() {
			$('html, body').animate({
				scrollTop: $("#second").offset().top
				}, 2000);
		});

 	    // reloads page when window is resized
		$(window).resize(function() {
        	location.reload();
		}); 
	};

$(document).ready(ready);
$(document).on('page:load', ready);

