appWeather.controller('dataController', function($scope, position, getTime) {

	console.log(getTime);

	position.getCurrentPosition(function showPosition(poss){
		$scope.temp = { 'latitude': poss.coords.latitude, 'Longitude': poss.coords.longitude};
		console.log($scope);
	});
	
});