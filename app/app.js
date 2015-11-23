var app = angular.module('noteApp', ['commentsCollectionService', 'guidGeneratorService']);

app.controller('commentsController',  ['$scope', 'commentsCollection', 'guidGenerator', function($scope, commentsCollection ){

  commentsCollection().then(function(result){
    $scope.commentsCollection = result;    
  }).then(function(){
    // console.log('1: ')
  }).then(function(){
    // console.log('2: ');
  });


}]);

app.directive('comments', function(){
  return {
    restrict: 'AE',
    scope: {
      comment: '=',
      test: '='
    },
    transclude: true,
    controller: function($scope){ },
    link: function($scope, elem, attrs) {
      elem.find('.row').bind('click', function(a, b, c ){
        var newVal = $scope.show === 'false' ? 'true' : 'false'
        $scope.$apply(function(){
          $scope.show = newVal;
        });
      });

      elem.bind('mouseover', function(){
        elem.css('cursor', 'pointer');
      });

    },

    templateUrl: 'templates/commentsTemplate.html'
  }

})
.directive('replies', function() {
  return {
    scope: {},
    restrict: 'AE',
    require: '^comments',
    link: function($scope, elem, attrs, controllerInstance) {
      console.log('$scope: ', $scope.$parent.$parent.reply );
      $scope.reply = $scope.$parent.$parent.reply;
    },
    templateUrl: 'templates/repliesTemplate.html'
  };
});