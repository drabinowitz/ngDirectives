var app = angular.module('myApp', []);

app.

run(function($rootScope){

	$rootScope.alert = function(){alert("You've been alerted!")};

}).

directive('myClick', function(){

	return function($scope, element, attrs){

		// debugger;

		element.on('click',function() {

			$scope.$apply(function() {

				$scope.$eval(attrs.myClick);

			});

		});

	};

});