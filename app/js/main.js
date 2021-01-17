'use strict';

new Swiper('.slider__items', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 3,
	spaceBetween: 35,
	loop: true,
	freeMode: true,
	autoplay: {
		delay: 3500,
		disableOnInteractive: false
	},
	speed: 800,

});

new Swiper('.slides__items', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 1,
	spaceBetween: 35,
	loop: true,
	freeMode: true,
	autoplay: {
		delay: 3500,
		disableOnInteractive: false
	},
	speed: 800,

});


(function ($) {
	$(document).ready(function () {
		// Code

	});
})(jQuery);
