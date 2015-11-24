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
              name: 'Frank Doe',
              text: 'Hello, this is my first reply',
              dateCreated: 'Monday, November 23, 2015',
              dateUpdated: 'Monday, November 24, 2015',
            },
            {
              id: guidGenerator(),
              name: 'Charles Doe',
              text: 'Hello, this is my second reply',
              dateCreated: 'Monday, November 23, 2015',
              dateUpdated: 'Monday, November 24, 2015',

            }                        
          ]
        },
        { 
          id: guidGenerator(),
          name: 'Mary Doe',
          text: 'Hello, world - testing.',
          dateCreated: 'Monday, November 23, 2015',
          dateUpdated: 'Monday, November 24, 2015'
        },
        { 
          id: guidGenerator(),
          name: 'Jane Doe',
          text: 'Hello, this is my other response',
          dateCreated: 'Monday, November 23, 2015',
          dateUpdated: 'Monday, November 24, 2015',
          replies: [
            {
              id: guidGenerator(),
              name: 'Mary',
              text: 'I see your comment.',
              dateCreated: 'Monday, November 23, 2015',
              dateUpdated: 'Monday, November 24, 2015',
            },
            {
              id: guidGenerator(),
              name: 'Tim',
              text: 'I as well.',
              dateCreated: 'Monday, November 23, 2015',
              dateUpdated: 'Monday, November 24, 2015',

            }                        
          ]          
        }        
      ]);

    }, 1000 )

    return deferred.promise;
  }

});