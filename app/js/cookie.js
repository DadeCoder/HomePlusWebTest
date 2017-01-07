var myCookie = angular.module("myCookie",['ngCookies']);

myCookie.controller("btnCtrl",["$scope","$cookieStore","$http",function($scope,$cookieStore,$http){
	
	$scope.process = function(){
		var userid = $cookieStore.get("AngularJs");
        console.log("miss cookie: " + userid);
        if (userid=="undefined") {
            window.location = "./testcookie.html";
        }
		$http({
	        method  : 'get',
	        url     : 'http://localhost:8090/api/public/test/cookie/' + userid,
	    }).success(function(data) {
	    	console.log("from server: " + data);
    	});
	}
}])

myCookie.controller("headerCtrl",["$scope","$cookieStore","$http",function($scope,$cookieStore,$http){

    $scope.setHeader = function(){
        var userid = $cookieStore.get("AngularJs");
        console.log("setHeader beofore: " + userid);
        $http({
            method  : 'get',
            url     : 'http://localhost:8090/api/private/test/header',
            headers : {'userid' : "test"},
        }).success(function(data) {
            console.log("from server: " + data);
        }).error(function(data){
            console.log("error: " + data);
        });
    }

}])

myCookie.controller("cookieCtrl",["$scope","$cookieStore","$http",function($scope,$cookieStore,$http){
	$scope.userinfo={
		username:"",
		password:""
	};

 	


	 $scope.getData=function(){
         // console.log($scope.userinfo); 
        var id = $cookieStore.get("AngularJs");
        console.info("from cookie_getData(): " + id);
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
        url     : 'http://localhost:8090/api/public/test/userid',
        data:$scope.userinfo,
    }).success(function(data) {
    	console.log("from server: " + data);
        var now = new Date(),
        // this will set the expiration to 12 months
        exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
    	$cookieStore.put("AngularJs", data, {'expires': exp});
    	var xx = $cookieStore.get("AngularJs");
    	console.info("from cookie_submitSuccess: " + xx);


    });
};


}])