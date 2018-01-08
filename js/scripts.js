$(function(){
	var carousel = $("#carousel");
	var carouselList = carousel.find('.photo');
	var carouselMenu = carousel.find('.menu');

	carouselList.find('li').each(function() {
		carouselMenu.append('<li></li>');
	});

	var doc = carouselMenu.find('li');
	doc.first().addClass('active');

	doc.click(function() {
		target = $(this).index();
		changeSlide(target);
	});

	function changeSlide(target) {
		var position = -400 * target;
		carouselList.stop().animate({'left':position});
		doc.removeClass('active').eq(target).addClass('active');

	}

	carousel.find('.carousel-arrow-left').click(function() {
		target = doc.siblings('.active').index();
		target == 0 ? target = doc.length - 1 : target -= 1;
		changeSlide(target);
		console.log(target);
	});

	carousel.find('.carousel-arrow-right').click(function() {
		target = doc.siblings('.active').index();
		target == doc.length - 1 ? target = 0 : target += 1;
		changeSlide(target);
		console.log(target);
	});

	var autoMove = setInterval(function(target) {changeSlide()}, 3000);
});


