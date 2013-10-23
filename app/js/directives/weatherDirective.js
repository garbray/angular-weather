appWeather.directive('weather', function() {
    'use strict';
    return {
        restrict: 'A',
        scope: {
            data: '='
        },
        templateUrl: 'templates/table.html'
    };
});