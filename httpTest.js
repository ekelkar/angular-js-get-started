(function() {
  var userData = {
    'ekelkar': {
      'data': {
        'name': 'Erin Kelkar',
        'location': 'Peachtree Corners, GA',
        'avatar_url': 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/000/27a/27d/18888da.jpg'
      }
    },
    'jkelkar': {
      'data': {
        'name': 'Jay Kelkar',
        'location': 'Peachtree Corners, GA',
        'avatar_url': 'https://pbs.twimg.com/profile_images/1250452527/jaykelkar_400x400.png'
      }
    },
    'AllisonFisher': {
      'data': {
        'name': 'Allison Fisher',
        'location': 'Pittsburgh, PA',
        'avatar_url': 'http://charpiescholars.appspot.com/images/allison_fisher.jpg'
      }
    }
  };

  var httpTest = function($q) { 

    // In order to simulate an async http call, getUser must return a
    // the data in a promise.

    var getUser = function(username) {
      // replace new Promise with angular promises $q
      return $q(function(resolve, reject) {
        if (userData[username]) { // This user exists.
          console.log('userData:', userData[username]);
          resolve(userData[username]);
        } else {
          console.log('reject');
          // Removed sending an Error object
          // Would that be better 
          // reject(Error('User not found'));
          
               reject('User not found');
        }
      })
    };

    return ({
      getUser: getUser
    });
  };

  var module = angular.module('githubViewer');
  module.factory('httpTest', httpTest);

}());