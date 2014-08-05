var app = angular.module('myApp', []);

/*app.directive('yoYo', function(){

	return {

		// template : '<strong>Yo!</strong>',

		templateUrl : './yo.html',

		transclude : true,

		restrict : 'E',

		replace : true

	};

});*/

app.directive('optIn', function(){

	return {

		// template : '<strong>Yo!</strong>',

		templateUrl : './opt-in.html',

		transclude : true,

		restrict : 'E',

		replace : true

	};

});
