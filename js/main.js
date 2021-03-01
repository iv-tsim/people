$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

});

(function() {
    
    document.addEventListener('DOMContentLoaded', function() {

        function hide(item1, item2) {

            item1.forEach(function(item, index) {

                item1[index].classList.remove('active');
                item2[index].classList.remove('active');

            });
            
        }

        function show(b, item1, item2) {

            if (!item1[b].classList.contains('active')) {

                hide(item1, item2);
                item1[b].classList.add('active');
                item2[b].classList.add('active');

            }

        }

        let feedbackThumbsResult = new Swiper('.feedback-thumbs_result', {

            speed: 600,
            spaceBetween: 3,
            slidesPerView: 11,
            slidesPerGroup: 1,
            centerInsufficientSlides: true,
            freeMode: true,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper'

        });

        let feedbackSliderResult = new Swiper('.feedback-slider_result', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.feedback-slider__arrow.feedback-slider__arrow_prev.feedback-slider__arrow_result',
                nextEl: '.feedback-slider__arrow.feedback-slider__arrow_next.feedback-slider__arrow_result'
            },
            thumbs: {
                swiper: feedbackThumbsResult
            }

        });

        let feedbackThumbsComment = new Swiper('.feedback-thumbs_comment', {

            speed: 600,
            spaceBetween: 3,
            slidesPerView: 11,
            slidesPerGroup: 1,
            centerInsufficientSlides: true,
            freeMode: true,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper'

        });

        let feedbackSliderComment = new Swiper('.feedback-slider_comment', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            navigation: {
                prevEl: '.feedback-slider__arrow.feedback-slider__arrow_prev.feedback-slider__arrow_comment',
                nextEl: '.feedback-slider__arrow.feedback-slider__arrow_next.feedback-slider__arrow_comment'
            },
            thumbs: {
                swiper: feedbackThumbsComment
            }

        });

        const tabsTop = document.querySelectorAll('.feedback-tabs__item');
        const tabsBodies = document.querySelectorAll('.feedback-body');

        document.addEventListener('click', function(event) {

            const target = event.target;

            if (target.matches('.feedback-tabs__item')) {

                tabsTop.forEach(function(item, index) {

                    if (target.closest('.feedback-tabs__item') === tabsTop[index]) {

                        show(index, tabsTop, tabsBodies);
                        return;

                    }

                });

            }

        });

        if (document.querySelector('div#map')) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [59.21554026682815,39.913141780425995],
                    zoom: 16
                });
                
                var myPlacemark = new ymaps.Placemark([59.21203606509942,39.91277699999998], {
                    hintContent: '140056, Россия, Москва, ул. Смоленская, д. 47/б, оф. 289, м. Смоленская',
                    balloonContent: '140056, Россия, Москва, ул. Смоленская, д. 47/б, оф. 289, м. Смоленская'
                },
                {
                    preset: 'islands#redIcon',
                    iconLayout: 'default#image',
                    iconImageHref: './img/general/mark.svg',
                    iconImageSize: [20, 20],
                    iconImageOffset: [-10, -10]
                });
    
                myMap.geoObjects.add(myPlacemark);
    
                myMap.controls
                    .remove('geolocationControl')
                    .remove('fullscreenControl')
                    .remove('typeSelector')
                    .remove('searchControl')
                    .remove('trafficControl')
                    .remove('rulerControl')
                    .remove('zoomControl');
    
                myMap.behaviors.disable([
                    'scrollZoom',
                    'dblClickZoom'
                ]);
            });
        }

    });

})();