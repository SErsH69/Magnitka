import $ from 'jquery';
import 'slick-carousel';

const MainSlider = class MainSlider {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_slides').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                infinite: false,
                dots: true
            });
            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: false,
                arrows: false,
                focusOnSelect: true
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainSlider;