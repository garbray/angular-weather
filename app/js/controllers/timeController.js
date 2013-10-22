appWeather.controller('timeController', function($scope) {
	'use strict';
	$scope.time = '00:00:00';

	window.setInterval(function() {
		var date = new Date(),
		h= date.getHours(),
		m= date.getMinutes(),
		s= date.getSeconds();
		$scope.time = h+':'+m+':'+s;
	}, 1000)

	// (function update() {
	//     $timeout(update, 1000);

	    
	// }());

});