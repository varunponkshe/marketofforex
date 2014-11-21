myApp.service("grabJson", function($http){
	//make sure you pass grabJson into your controller function
	
	
	data=[];
	// grabJson.fillArray() must be called separately before the returnData function	
	this.fillArray = function(){	
		$http.get("libs/guitardata.json") //insert your json file here
	.success(function(resp){// json is cached
		data=resp;
		
	});};
	// data is not accessible until returnData called
	this.returnData = function(){
		return data;
	};
});
/*
* this service works with this controller
* 
* myApp.controller("myCtrls",function($scope,grabJson){
	
	$scope.loadedJson = [];
	grabJson.fillArray();
	var trigger = function(){
		$scope.loadedJson = grabJson.returnData();	
	};
	$timeout(trigger, 100);
	
});
*

*/