appWeather.controller('timeController', function($scope, $timeout) {
	'use strict';
	$scope.time = '00:00:00';


	(function update() {
	    $timeout(update, 1000);
	    var date = new Date(),
		h= date.getHours(),
		m= date.getMinutes(),
		s= date.getSeconds();
		$scope.time = h+':'+m+':'+s;
	    
	}());

});