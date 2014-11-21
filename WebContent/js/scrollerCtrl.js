var myApp = angular.module("my_app", []);
myApp.controller("scrollerCtrl", function($scope, grabJson){
	console.log("here");
	
	/*
	$scope.loadedJson = [];
	grabJson.fillArray();
	
	
	var trigger = function(){
		$scope.loadedJson = grabJson.returnData();
		$scope.x = $scope.loadedJson.allProducts[$scope.bought - 1].shipping_details;
		
		$scope.y = $scope.x.match(/\d{2}/);
		$scope.y = parseInt($scope.y[0]);
	};
	$timeout(trigger, 100);
	*/
	
});