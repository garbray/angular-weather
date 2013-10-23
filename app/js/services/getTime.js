appWeather.factory('getTime', function($http) {
    'use strict';

    var getTime;
    $http({method: 'GET', url: '/js/test.json'}).
        success(function(data) {
            getTime = data;
        // this callback will be called asynchronously
        // when the response is available
        }).
        error(function(data) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        });
    return getTime;
});