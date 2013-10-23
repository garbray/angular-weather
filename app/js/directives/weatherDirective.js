appWeather.directive('weather', function() {
    'use strict';
    return {
        restrict: 'A',
        scope: {
            // banana: 'lol'
        },
        template: '<ul class="pricing-table"><li class="title">Current location:xxx</li><li class="price">cloudcover:xxx</li><li class="description">humidity: xxxx</li><li class="bullet-item">temp: xxxx</li><li class="bullet-item">pressure: xxxx</li><li class="bullet-item">visibility: xxxx</li><li class="cta-button"><a class="button" href="#">Check all data</a></li></ul>',
        link: function(scope, element) {
            element.bind('mouseenter', function(){
                console.log('here');
            });
        }
    };
});