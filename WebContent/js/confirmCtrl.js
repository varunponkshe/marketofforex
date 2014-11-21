myApp.controller("confirmCtrl", function($routeParams, $timeout, $scope, grabJson, objPassFac){
	$scope.bought = $routeParams.pr;
	$scope.loadedJson = [];
	grabJson.fillArray();
	var trigger = function(){
		$scope.loadedJson = grabJson.returnData();
		$scope.x = $scope.loadedJson.allProducts[$scope.bought - 1].shipping_details;
		
		$scope.y = $scope.x.match(/\d{2}/);
		$scope.y = parseInt($scope.y[0]);
	};
	$timeout(trigger, 100);
	
	
	
	$scope.random = Math.floor((Math.random() * 100) + 1);
	
	$scope.$watch(function(){
		return objPassFac.getFirstName();
		},
		function (newValue){
			if(newValue){$scope.first = newValue;
			};
			
			});
	$scope.$watch(function(){
		return objPassFac.getLastName();
		},
		function (newValue){
			if(newValue){$scope.last = newValue;
			};
			});
	$scope.$watch(function(){
		return objPassFac.getA1();
		},
		function (newValue){
			if(newValue){$scope.address1 = newValue;
			};
			});
	$scope.$watch(function(){
		return objPassFac.getA2();
		},
		function (newValue){
			if(newValue){$scope.address2 = newValue;
			};
			});
	$scope.$watch(function(){
		return objPassFac.getCity();
		},
		function (newValue){
			if(newValue){$scope.city = newValue;
			};
			});
	$scope.$watch(function(){
		return objPassFac.getState();
		},
		function (newValue){
			if(newValue){$scope.state = newValue;
			};
			});
	$scope.$watch(function(){
		return objPassFac.getZip();
		},
		function (newValue){
			if(newValue){$scope.zip = newValue;
			};
			});
});