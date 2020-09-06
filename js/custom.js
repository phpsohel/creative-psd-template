$(function(){
	"use strict";
	// ==================

  // mean-menu
  $('#header-nav').meanmenu({
      meanMenuContainer:'.mean-menu',
      meanScreenWidth:"991",
    });

	$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
   dots: true,
  infinite: true,
  autoplay: true,
  dotsClass: 'slick-dots',
  arrows: true,
});


// ==================
});