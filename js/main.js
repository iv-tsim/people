$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

    $(document).on("click", ".modal-item__top", function(){
        var siblings_this = $(this).siblings(".modal-item__body"); 
        var this_custom   = $(this); 
        if (this_custom.hasClass("active")) {
          siblings_this.stop().slideUp();
          this_custom.removeClass("active");
        }else{
          siblings_this.stop().slideDown();
          this_custom.addClass("active");
        }
      });

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
            touchEventsTarget: 'wrapper',
            breakpoints: {

                1300: {

                    slidesPerView: 11

                },
                1200: {

                    slidesPerView: 10

                },
                1100: {

                    slidesPerView: 9

                },
                1000: {

                    slidesPerView: 8

                },
                900: {

                    slidesPerView: 7

                },
                650: {

                    slidesPerView: 6

                },
                500: {

                    slidesPerView: 5

                },
                390: {

                    slidesPerView: 4

                },
                0: {

                    slidesPerView: 3

                }

            }

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
            touchEventsTarget: 'wrapper',
            breakpoints: {

                1300: {

                    slidesPerView: 11

                },
                1200: {

                    slidesPerView: 10

                },
                1100: {

                    slidesPerView: 9

                },
                1000: {

                    slidesPerView: 8

                },
                900: {

                    slidesPerView: 7

                },
                650: {

                    slidesPerView: 6

                },
                500: {

                    slidesPerView: 5

                },
                390: {

                    slidesPerView: 4

                },
                0: {

                    slidesPerView: 3

                }

            }

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
        const quizBarItems = document.querySelectorAll('.begin-quiz__bar-item');
        const quizBodies = document.querySelectorAll('.begin-quiz__body');
        const quizInputs = document.querySelectorAll('.begin-quiz__item-input');
        const quizPrev = document.querySelector('.begin-quiz__prev');
        const quizNext = document.querySelector('.begin-quiz__next');
        const quizNextBtn = document.querySelector('.begin-quiz__next_btn');

        let quizData = {};
        let quizIndex = 0;
        let quizMaxIndex = quizBodies.length - 1;

        for (let i = 0; i <= quizMaxIndex; i++) {

            if (i === quizMaxIndex) {

                quizData.form = new Object();

                break;

            }

            quizData['quiz' + i] = new Object();

        }

        function resetQuiz() {

            quizIndex = 0;

            hideQuiz();

            quizInputs.forEach(function(item) {

                item.checked = false;

            });

            quizData = {};

        }

        function hideQuiz() {

            quizBarItems.forEach(function(item) {

                item.classList.remove('active');

            });

            quizBodies.forEach(function(item) {

                item.classList.remove('active');

            });

        }

        function checkIndex() {

            if (quizIndex === 0) {

                quizPrev.classList.add('hidden');

            } else {

                quizPrev.classList.remove('hidden');

            }

            if (quizIndex === quizMaxIndex) {

                quizNext.classList.add('hidden');
                quizNextBtn.classList.remove('hidden')

                console.log(quizData);

            } else {

                quizNextBtn.classList.add('hidden')

                quizNext.classList.remove('hidden');

            }

        }
        
        function nextQuizItem() {

            let currentItemTitle = quizBodies[quizIndex].querySelector('.begin-quiz__title').textContent.trim();

            let answer, input, inputParent;

            input = quizBodies[quizIndex].querySelector('.begin-quiz__item-input:checked');
            
            if (!input) {
                
                return;
                
            }
            
            inputParent = input.closest('.begin-quiz__item');

            if (!inputParent.classList.contains('begin-quiz__item_special')) {

                answer = input.value;

            } else {

                answer = inputParent.querySelector('.begin-quiz__item-special').value;

            }

            if (answer === '') {

                return;

            }

            console.log(answer);

            quizData['quiz' + quizIndex].question = currentItemTitle;
            quizData['quiz' + quizIndex].answer = answer;

            hideQuiz();

            quizIndex++;

            checkIndex();

            quizBarItems[quizMaxIndex - quizIndex].classList.add('active');
            quizBodies[quizIndex].classList.add('active');

        }

        function prevQuizItem() {

            quizIndex--;

            checkIndex();

            hideQuiz();

            quizBarItems[quizMaxIndex - quizIndex].classList.add('active');
            quizBodies[quizIndex].classList.add('active');

        }

        function hideQuizSpecialItems() {

            quizBodies[quizIndex].querySelectorAll('.begin-quiz__item-special').forEach(function(item) {

                item.classList.remove('active');

            });

        }

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

            if (target.closest('.begin-quiz__next')) {

                if (quizIndex < quizMaxIndex) {

                    nextQuizItem();
                    
                }

            }

            if (target.closest('.begin-quiz__prev')) {

                if (quizIndex !=0 ) {

                    prevQuizItem();

                }

            }

            if (target.closest('.begin-quiz__item')) {

                hideQuizSpecialItems();

            }
            
            if (target.closest('.begin-quiz__item_special')) {

                hideQuizSpecialItems();

                target.closest('.begin-quiz__item_special').querySelector('.begin-quiz__item-special').classList.add('active');

            }

            if (target.closest('.modal-toTop')) {

                document.querySelector('.modal-career').scrollIntoView({block: "start", behavior: "smooth"});

            }

            if (target.closest('.footer-btn_feedback')) {

                event.preventDefault();

                document.querySelector('#feedback').scrollIntoView({block: "start", behavior: "smooth"});

                show(1, tabsTop, tabsBodies);

            }

        });

        if (window.innerWidth > 1200) {

            if (document.querySelector('div#map')) {
                ymaps.ready(function () {
                    var myMap = new ymaps.Map('map', {
                        center: [59.21404026682815,39.913141780425995],
                        zoom: 16
                    });
                    
                    var myPlacemark = new ymaps.Placemark([59.21203606509942,39.91277699999998], {
                        hintContent: 'г. Вологда, ул. Машиностроительная, д. 19, оф. 239',
                        balloonContent: 'г. Вологда, ул. Машиностроительная, д. 19, оф. 239'
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

        } else {

            if (document.querySelector('div#mapMobile')) {
                ymaps.ready(function () {
                    var myMap = new ymaps.Map('mapMobile', {
                        center: [59.21404026682815,39.913141780425995],
                        zoom: 16
                    });
                    
                    var myPlacemark = new ymaps.Placemark([59.21203606509942,39.91277699999998], {
                        hintContent: 'г. Вологда, ул. Машиностроительная, д. 19, оф. 239',
                        balloonContent: 'г. Вологда, ул. Машиностроительная, д. 19, оф. 239'
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

        }

    });

})();