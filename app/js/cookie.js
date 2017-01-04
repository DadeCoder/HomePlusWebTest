var myCookie = angular.module("myCookie",['ngCookies']);

myCookie.controller("btnCtrl",["$scope","$cookieStore","$http",function($scope,$cookieStore,$http){
	
	$scope.process = function(){
		var userid = $cookieStore.get("AngularJs");
		$http({
	        method  : 'get',
	        url     : 'http://localhost:8090/api/test/cookie/' + userid,
	    }).success(function(data) {
	    	console.log("from server: " + data);
    	});
	}
}])

myCookie.controller("cookieCtrl",["$scope","$cookieStore","$http",function($scope,$cookieStore,$http){
	$scope.userinfo={
		username:"",
		password:""
	};

 	


	 $scope.getData=function(){
         console.log($scope.userinfo); 
     };

     $scope.setData=function(){
         $scope.userinfo={
            username:"Dade",
			password:"123456"
          } 
     };

   $scope.processForm = function() {
    $http({
        method  : 'POST',
        url     : 'http://localhost:8090/api/test/userid',
        data:$scope.userinfo,
    }).success(function(data) {
    	console.log("from server: " + data);
    	$cookieStore.put("AngularJs", data);
    	var xx = $cookieStore.get("AngularJs");
    	console.info("from cookie: " + xx);


    });
};


}])