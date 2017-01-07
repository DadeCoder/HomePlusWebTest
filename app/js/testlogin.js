var myLogin = angular.module("myLogin",[]);

myLogin.controller("loginCtrl",["$scope","$http","$location",function($scope, $http, $location){

	$scope.privatelogin = function(){
		$http({
	        method  : 'get',
	        url     : 'http://localhost:8090/api/private/test/security',
	    }).success(function(data) {
	    	console.log("from server: " + data);
    	}).error(function(data){
    		// console.log("from server error: " + data);
    		window.location = "./testcookie.html";
    	});
	}

	$scope.publiclogin = function(){
		$http({
	        method  : 'get',
	        url     : 'http://localhost:8090/api/public/test/security',
	    }).success(function(data) {
	    	console.log("from server: " + data);
    	}).error(function(data){
    		// console.log("from server error: " + data);
    		window.location = "./testcookie.html";
    	});
	}

}]);