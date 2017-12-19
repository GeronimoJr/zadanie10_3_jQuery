$(function(){
	var carouselList = $("#carousel ul");
	$(function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
});
$(setInterval(changeSlide, 3000));
});


