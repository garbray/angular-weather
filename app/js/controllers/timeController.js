appWeather.controller('timeController', function($scope, $timeout) {
	'use strict';
	$scope.time = '00:00:00';


	(function update() {
	    $timeout(update, 1000);
	    var date = new Date(),
		h= date.getHours(),
		m= date.getMinutes(),
		s= date.getSeconds();
		if(s < 10) {
			s = '0'+s;
		}
		if(m < 10) {
			m = '0'+m;
		}
		if(h < 10) {
			h = '0'+h;
		}

		$scope.time = h+':'+m+':'+s;
	    
	}());

});