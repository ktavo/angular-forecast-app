app.factory('forecast', ['$http', function($http){
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json').then(successCallback, errorCallback);
	function successCallback(response){
    return response;
	}
	function errorCallback(error){
    return err;
	}
}]);