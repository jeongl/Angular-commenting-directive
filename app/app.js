var app = angular.module('noteApp', []);

app.controller('commentsController', ['$scope', 'commentsCollection', function($scope, commentsCollection ){

  commentsCollection().then(function(result){
    $scope.commentsCollection = result;
  }).then(function(){

  });


}]);

app.directive('notepad', function(){
    function changeColor(elem ){
      if ( /blue/.test(elem.find('.two-thirds').attr('style'))  ){
        elem.find('.two-thirds').css('color', 'red');
      } else elem.find('.two-thirds').css('color', 'blue');
      
    }

    return {
      restrict: 'AE',
      scope: {
        comment: '=',
        test: '='
      },
      link: function($scope, elem, attrs) {

        console.log('$scope: ', $scope );

        elem.find('.row').bind('click', function(a, b, c ){
          $scope.$apply(function(){
            $scope.show = 'true';  
          });
          changeColor( elem);
        });

      },
      templateUrl: 'templateurl.html'
    }

});

app.factory('commentsCollection', function($timeout, $q ){


  return function asyncFetch(){
    var deferred = $q.defer();

    $timeout(function(){
      deferred.resolve([
        { 
          id: '1',
          name: 'John Doe',
          text: 'Hello, this is my first comment',
          dateCreated: 'Monday, November 23, 2015',
          dateUpdated: 'Monday, November 24, 2015'
        },
        { 
          id: '2',
          name: 'Mary Doe',
          text: 'Hello, this is my response',
          dateCreated: 'Monday, November 23, 2015',
          dateUpdated: 'Monday, November 24, 2015'
        }
      ]);

    }, 0 )

    return deferred.promise;
  }

});