var app = angular.module('myApp', []);

app.directive('yoYo', function(){

	return {

		// templateUrl : './yo.html',

		template : '<div><h1>Yo</h1><p ng-transclude></p></div>',

		transclude : true,

		restrict : 'E',

		replace : true

	};

});