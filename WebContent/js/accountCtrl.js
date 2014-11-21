myApp.controller("accountCtrl", function($routeParams, $timeout, $scope, grabJson, objPassFac){
	
	$scope.loadedJson = [];
	grabJson.fillArray();
	var trigger = function(){
		$scope.loadedJson = grabJson.returnData();	
	};
	$timeout(trigger, 100);
	$scope.ind = $routeParams.pr;
	
	$scope.blank = {};
	$scope.reset = function(){
		$scope.accounts = angular.copy($scope.blank);
	};
	
	$scope.hider = true;
	$scope.first = '';
	$scope.$watch('first', function(newValue){
		if(newValue) {objPassFac.setFirstName(newValue);}
	});
	$scope.last = '';
	$scope.$watch('last', function(newValue){
		if(newValue) {objPassFac.setLastName(newValue);}
	});
	$scope.email = '';
	$scope.$watch('email', function(newValue){
		if(newValue) {objPassFac.setEmail(newValue);}
	});
	$scope.phone = '';
	$scope.$watch('phone', function(newValue){
		if(newValue) {objPassFac.setPhone(newValue);}
	});
	$scope.creditCard = '';
	$scope.$watch('creditCard', function(newValue){
		if(newValue) {objPassFac.setCC(newValue);}
	});
	$scope.address1 = '';
	$scope.$watch('address1', function(newValue){
		if(newValue) {objPassFac.setA1(newValue);}
	});
	$scope.address2 = '';
	$scope.$watch('address2', function(newValue){
		if(newValue) {objPassFac.setA2(newValue);}
	});
	$scope.city = '';
	$scope.$watch('city', function(newValue){
		if(newValue) {objPassFac.setCity(newValue);}
	});
	$scope.state = '';
	$scope.$watch('state', function(newValue){
		if(newValue) {objPassFac.setState(newValue);}
	});
	$scope.zip = '';
	$scope.$watch('zip', function(newValue){
		if(newValue) {objPassFac.setZip(newValue);}
	});
});