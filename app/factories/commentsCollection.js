var app = angular.module('commentsCollectionService', ['guidGeneratorService']);
app.factory('commentsCollection', function($timeout, $q, guidGenerator ){

  return function asyncFetch(){
    var deferred = $q.defer();

    $timeout(function(){
      deferred.resolve([
        { 
          id: guidGenerator(),
          name: 'John Doe',
          text: 'Hello, this is my first comment',
          dateCreated: 'Monday, November 23, 2015',
          dateUpdated: 'Monday, November 24, 2015',
          replies: [
            {
              id: guidGenerator(),
              name: 'John Doe',
              text: 'Hello, this is my first comment',
              dateCreated: 'Monday, November 23, 2015',
              dateUpdated: 'Monday, November 24, 2015',

            }            
          ]
        },
        { 
          id: guidGenerator(),
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