app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
	forecast.then(function(data)
	{
		console.log('Inside MainController');
		$scope.fiveDay = data;
		$scope.test = "prueba";
		console.log(JSON.stringify($scope.fiveDay));
	});
}]);