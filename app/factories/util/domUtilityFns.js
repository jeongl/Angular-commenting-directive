var app = angular.module('domUtilityService', []);
app.factory('stringToggler', function(){
	return function toggleShowVal($scope, val ){
		var toggleVar = (val === 'show' ) ? 'show' :  val;
		var newVal = ($scope[toggleVar] === 'false') ? 'true' : 'false';
	  
	  $scope.$apply(function(){
	    $scope[toggleVar] = newVal;
	  });
	}

});
