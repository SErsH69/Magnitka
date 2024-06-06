import $ from 'jquery';
import 'slick-carousel';

import lightGallery from 'lightgallery';

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
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 768,
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

            const lightgalleryElements = document.querySelectorAll('.lightgallery');
            for (let i = 0; i < lightgalleryElements.length; i++) {
                lightGallery(lightgalleryElements[i], {
                    speed: 500,
                    selector: '.main_slider__img img'
                });
            }
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainSlider;