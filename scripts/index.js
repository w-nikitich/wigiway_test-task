const programs = document.getElementsByClassName('programs')[0];
const programsList = document.getElementsByClassName('programs__list')[0];
const about = document.getElementsByClassName('about')[0];
const aboutList = document.getElementsByClassName('about__list')[0];
const language = document.getElementsByClassName('laguage__item')[0];
const languageList = document.getElementsByClassName('language__list')[0];
const burgerMenu = document.getElementsByClassName('burger__menu')[0];
const navigationList = document.getElementsByClassName('navigation')[0];

let clickCounter = 0;

$(document).ready(function() {
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

function openMenu(menu) {
    clickCounter++;
    const openedElements = document.querySelectorAll('.opened');
    menu.classList.add('opened');

    openedElements.forEach(element => {
        element.classList.remove('opened');
    });

    if (clickCounter % 2 === 0) {
        menu.classList.remove('opened');
    }
}

programs.addEventListener('click', function() {
    openMenu(programsList)
}, false)
about.addEventListener('click', function() {
    openMenu(aboutList)
}, false)
language.addEventListener('click', function() {
    openMenu(languageList)
}, false)
burgerMenu.addEventListener('click', function() {
    openMenu(navigationList)
}, false)

document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.getElementsByClassName('navigation')[0];
    
    if (window.screen.width <= 720 || window.innerWidth <=720) {
        navigation.classList.add('mobile__menu');
    }
});