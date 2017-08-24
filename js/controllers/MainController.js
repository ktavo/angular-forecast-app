app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
	forecast.then(function(data)
	{
		$scope.fiveDay = data;
	});
}]);