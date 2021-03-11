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

        function checkSlides(slidesPerView, slidesAmount) {

            let center, loop;

            if (slidesAmount >= slidesPerView) {

                center = false;
                loop = true;

            } else {

                center = true;
                loop = false;

            }

            return {loop: loop, center: center};

        }

        const resultResultThumbsNumber = document.querySelectorAll('.feedback-thumbs_result .feedback-thumbs__item-wrapper').length;
        const resultCommentThumbsNumber = document.querySelectorAll('.feedback-thumbs_comment .feedback-thumbs__item-wrapper').length;

        let feedbackThumbsResult = new Swiper('.feedback-thumbs_result', {

            speed: 600,
            spaceBetween: 3,
            slidesPerView: 11,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            init: false,
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

        feedbackThumbsResult.params.loop = checkSlides(feedbackThumbsResult.params.slidesPerView, resultResultThumbsNumber).loop;
        feedbackThumbsResult.params.centerInsufficientSlides = checkSlides(feedbackThumbsResult.params.slidesPerView, resultResultThumbsNumber).center;

        feedbackThumbsResult.init();

        let feedbackThumbsComment = new Swiper('.feedback-thumbs_comment', {

            speed: 600,
            spaceBetween: 3,
            slidesPerView: 11,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            init: false,
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

        feedbackThumbsComment.params.loop = checkSlides(feedbackThumbsComment.params.slidesPerView, resultCommentThumbsNumber).loop;
        feedbackThumbsComment.params.centerInsufficientSlides = checkSlides(feedbackThumbsComment.params.slidesPerView, resultCommentThumbsNumber).center;

        feedbackThumbsComment.init();

        let feedbackSliderResult = new Swiper('.feedback-slider_result', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            loop: true,
            navigation: {
                prevEl: '.feedback-slider__arrow.feedback-slider__arrow_prev.feedback-slider__arrow_result',
                nextEl: '.feedback-slider__arrow.feedback-slider__arrow_next.feedback-slider__arrow_result'
            },
            thumbs: {
                swiper: feedbackThumbsResult
            }

        });

        let feedbackSliderComment = new Swiper('.feedback-slider_comment', {

            speed: 600,
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            loop: true,
            observeParents: true,
            touchEventsTarget: 'wrapper',
            loop: true,
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
        const quizControls = document.querySelector('.begin-quiz__controls');
        const quizPrev = document.querySelector('.begin-quiz__prev');
        const quizNext = document.querySelector('.begin-quiz__next');
        const quizNextBtn = document.querySelector('.begin-quiz__next_btn');
        const quizDataInput = document.querySelector('#quizData');
        const quizFinal = document.querySelector('.begin-quiz__final');

        let quizIndex = 0;
        let quizMaxIndex = quizBodies.length - 1;

        function resetQuiz() {

            quizIndex = 0;

            hideQuiz();

            quizInputs.forEach(function(item) {

                item.checked = false;

            });

            quizBarItems[quizMaxIndex].classList.add('active');
            quizFinal.classList.remove('active');
            quizBodies[quizIndex].classList.add('active');
            quizControls.classList.add('active');
            quizPrev.classList.add('hidden');
            quizNext.classList.remove('hidden');
            quizNextBtn.classList.add('hidden')

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

            quizDataInput.value += 'Вопрос: ' + currentItemTitle + '\nОтвет: ' + answer + '\n \n';

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

        document.addEventListener('wpcf7mailsent', function( event ) {

            if (event.detail.contactFormId != 9) {
        
                alertify.success(event.detail.apiResponse.message);
                
            } else {

                hideQuiz();

                quizControls.classList.remove('active');

    
                quizFinal.classList.add('active');
    
            }
            
        }, false);
    
        document.addEventListener('wpcf7invalid', function( event ) {
            alertify.warning(event.detail.apiResponse.message);
        }, false);
    
        document.addEventListener('wpcf7mailfailed', function( event ) {
            alertify.error(event.detail.apiResponse.message);
        }, false);

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

            if (target.closest('.begin-quiz__next_btn')) {

                document.querySelector('.quiz-hiddenSubmit').click();

            }

            if (target.closest('.begin-quiz__reset')) {

                resetQuiz();

            }

        });

        const strategyTextWrapper = document.querySelector('.strategy-number__text');
        const strategyText = document.querySelectorAll('.strategy-number__text div');
        const radius = 200;

        function randomInteger(min, max) {

            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
            
        }

        strategyText.forEach(function(item) {

            let array = item.textContent.trim().split('');
            item.textContent = '';

            array.forEach(function(subItem) {

                let strategyItem = document.createElement('span');
                strategyItem.textContent = subItem;

                item.append(strategyItem);
                
            });

        });

        const strategyLetters = document.querySelectorAll('.strategy-number__text div span');

        strategyLetters.forEach(function(item) {

            let x = randomInteger(-1 * radius, radius),
                y = randomInteger(-1 * radius, radius);

                item.style.display = 'inline-block';
                item.style.transition = '.5s transform';
                item.style.transitionDelay = '.2s';
                item.style.transform = 'translate(' + x + 'px, ' + y + 'px)'; 

        });

        function isScrolledIntoView(el) {
            let rect = el.getBoundingClientRect();
            let elemTop = rect.top;
            let elemBottom = rect.bottom;
            return elemTop < window.innerHeight && elemBottom >= 0;
        }

        window.addEventListener('scroll', function() {

            if (isScrolledIntoView(strategyTextWrapper)) {

                strategyLetters.forEach(function(item) {

                    item.style.transform = 'translate(0, 0)'; 
        
                });

            }

        });

    });

})();

$(document).ready(function() {

    $('input[type=tel]').mask("+7 (999) 999-99-99");

    alertify.set('notifier', 'position', 'bottom-right');
    alertify.set('notifier', 'delay', 10);

    $(document).on('click', '.wpcf7-submit', function(e){
        if( $('.ajax-loader').hasClass('is-active') ) {
            e.preventDefault();
            return false;
        }
    });

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

    function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
					
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
						
				$('.'+className).spincrement({
					thousandSeparator: ''
				});
			}
		})	
	}

    countup("spin");

});