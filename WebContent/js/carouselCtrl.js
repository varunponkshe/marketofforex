myApp.controller("carouselCtrl", ["$interval", "$timeout", "$scope", "grabJson", function($interval, $timeout, $scope, grabJson){
	$scope.len = 0;
	$scope.loadedJson = [];
	grabJson.fillArray();
	var trigger = function(){
		$scope.loadedJson = grabJson.returnData();
		$scope.len = $scope.loadedJson.allProducts.length;		
		$scope.avail = $scope.loadedJson.allProducts[$scope.slide - 1].stock_availability;
	};
	//auto-loads the json data through function above
	$timeout(trigger, 100);
	
	$scope.slide = 1;	
	 //below wraps the slider
	$scope.$watch("slide", function(newValue, oldValue, scope){
		
		if(newValue == 0 ){
			scope.slide = scope.len;
		}else if(newValue == scope.len + 1){
			scope.slide = 1;
		}else{scope.slide = scope.slide;};
		
		
		scope.avail = scope.loadedJson.allProducts[scope.slide - 1].stock_availability;
		console.log(scope.avail);
console.log(scope.loadedJson.allProducts[scope.slide - 1].stock_availability);
		});
	
	
	
	$interval(function(){
		$scope.slide++;
	},4000, [10]);

	
}]);


