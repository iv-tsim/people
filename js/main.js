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