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
                dots: true,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    }
                ]
            });
            $('.main_slider__block').each(function() {
                var $sliderFor = $(this).find('.slider-for');
                var $sliderNav = $(this).find('.slider-nav');
        
                $sliderFor.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: $sliderNav
                });
        
                $sliderNav.slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: $sliderFor,
                    dots: false,
                    arrows: false,
                    focusOnSelect: true
                });
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainSlider;