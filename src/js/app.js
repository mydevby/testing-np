import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function() {

	$(document, window).scroll(function() {
		var height = $(window).scrollTop();
		if(height > 100){
			$('.header__container').addClass('header__container--scroll');
			$('.navigation__list').addClass('navigation__list--scroll');
		} else {			
			$('.header__container').removeClass('header__container--scroll');
			$('.navigation__list').removeClass('navigation__list--scroll');
		}	
	});

	$(document, window).on('wheel', function(e){
		if (e.originalEvent.wheelDelta >= 0) {
			$('.pre-header').removeClass('pre-header--scroll');
		} else {
			$('.pre-header').addClass('pre-header--scroll');
		}
	});

	$('.catalog__carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		responsive:{
			0:{
				items:1,
			},
			481:{
				items:2,
			},
			769: {
				items:2,
				margin: 15,
			},
			993: {
				items:2,
				margin: 20,
			},
		}
	});

	$('.products__carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		responsive:{
			0: {
				items: 1
			},
			481: {
				items: 2,
				margin: 10,
			},
			769: {
				items: 3,
				margin: 15,
			},
			993: {
				items: 4
			},
		}
	});

	$('.header__mob-menu-btn--category').on('click', function(){
		$('.menu-categories').addClass('open');
	});

	$('.menu-categories__close').on('click', function(){
		$('.menu-categories').removeClass('open');
	});

	$('.menu-categories__open-sublist').on('click', function(){
		if (!$(this).hasClass('open')) {
			$('.menu-categories__open-sublist').removeClass('open');
			$(this).addClass('open');
		} else {
			$('.menu-categories__open-sublist').removeClass('open');
			$(this).removeClass('open');
		}
	});

	$('.header__mob-menu-btn--menu').on('click', function(){
		$('.menu-mob').addClass('open');
	});

	$('.menu-mob__close').on('click', function(){
		$('.menu-mob').removeClass('open');
	});

});