var myApp = angular.module("my_app", ["ngRoute"]);




myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
.when("/home", {
	templateUrl: "views/carousel.html",
controller: "carouselCtrl"
}).when("/account/:pr", {
	templateUrl: "views/account.html",
	controller: "accountCtrl"
}).when("/confirm/:pr", {
	templateUrl: "views/confirm.html",
controller: "confirmCtrl"
}).otherwise({redirectTo:"/home"});
}]);