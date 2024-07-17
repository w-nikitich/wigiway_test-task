$(document).ready(function(){
    $('.proposal__slider').on('init', function(event,slick) {
        const sliderArrows = document.querySelectorAll('.slick-arrow');

        sliderArrows[0].innerHTML = '';
        sliderArrows[1].innerHTML = '';
    }).slick({
        autoplay: false,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    });
  });