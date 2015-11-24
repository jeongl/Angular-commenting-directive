var app = angular.module('noteApp', ['commentsCollectionService', 'guidGeneratorService', 'domUtilityService' ]);

app.controller('commentsController',  ['$scope', 'commentsCollection', 'guidGenerator', function($scope, commentsCollection, stringToggler ){

  commentsCollection().then(function(result){
    $scope.commentsCollection = window.commentsCollection = result;

  }).then(function(){

  }).then(function(){});

}]);

app.directive('comments', function(stringToggler ){
  return {
    restrict: 'AE',
    scope: {
      comment: '=',
      test: '=',
      commentsCollection: '='
    },
    transclude: true,
    controller: function($scope){ },
    link: function($scope, elem, attrs) {

      $scope.show = 'true';

      elem.find('.editButton').bind('click', function(){
        stringToggler($scope, 'show');
      });

      elem.find('.submitButton').bind('click', function(a,b,c){
        $scope.comment.text = elem.parent().find('textarea').val();
        stringToggler($scope, 'show');
      });

      elem.find('.deleteButton').bind('click', function(e){
        var collection = $scope.$parent.$parent.commentsCollection;
        $scope.$apply(function(){
          $scope.$parent.$parent.commentsCollection =
          _.without(collection, _.findWhere(collection,  {id: $scope.comment.id } ));
        });
        

      });

    },

    templateUrl: 'templates/commentsTemplate.html'
  }

});

app.directive('replies', function(stringToggler ) {
  return {
    scope: {},
    restrict: 'AE',
    require: '^comments',
    link: function($scope, elem, attrs, controllerInstance) {
      $scope.reply = $scope.$parent.$parent.reply;
      $scope.showReply = 'false';

      elem.bind('mouseover', function(){
        elem.css('cursor', 'pointer');
        $scope.$apply(function(){
          $scope.showEditTip = 'true';  
        });
      }).bind('mouseleave', function(){
        $scope.$apply(function(){
          $scope.showEditTip = 'false';
        });        
      })

      elem.find('span').first().bind('click', function(){
        stringToggler($scope, 'showReply' );
      });

      elem.find('.editButton').bind('click', function(){
        $scope.$apply(function(){
          $scope.reply.text = elem.parent().find('textarea').val();
        });
        stringToggler($scope, 'showReply' );
      });

      elem.find('.deleteButton').bind('click', function(){
        $scope.$apply(function(){
          delete $scope.reply;
        });
        elem.parents('.replies').hide()
        stringToggler($scope, 'showReply' );
      });


    },

    templateUrl: 'templates/repliesTemplate.html'
  };
});






