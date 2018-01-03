$(function(){
	var carousel = $("#carousel");
	var carouselList = carousel.find('.photo');
	var carouselMenu = carousel.find('.menu');
	var currentSlide = 1;
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
		currentSlide = target;
	}

	function animateSlide() {
		carouselList.animate({'margin-left': '-=400px'}, 1000, moveFirstSlide());
	}

	function moveFirstSlide() {
		currentSlide++;
		if(currentSlide === 5) {
			currentSlide = 1;
			carouselList.css({marginLeft:0});
		}
		console.log(currentSlide);
	}

	setInterval(animateSlide, 3000);

	//setInterval

	//starzałka target+1 -1









	/*var carouselList = $("#carousel ul");

	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	setInterval(changeSlide, 3000);*/
});


