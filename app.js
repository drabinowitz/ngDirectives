var app = angular.module('myApp', []);

app.directive('yoYo', function(){

	return {

		templateUrl : './yo.html',

		transclude : true,

		restrict : 'E',

		replace : true

	};

});