(function() {
  var userData = {
    'ekelkar': {
      'data': {
        'name': 'Erin Kelkar',
        'location': 'Peachtree Corners, GA',
        'avatar_url': 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/000/27a/27d/18888da.jpg',
        'repos': [{
          'name': 'Repo 1',
          'stargazers_count': 5,
          'language': 'javascript'
        }, {
          'name': 'Repo 2',
          'stargazers_count': 10,
          'language': 'c'
        }, {
          'name': 'Repo 3',
          'stargazers_count': 30,
          'language': 'PL/1'
        }]
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

  var httpTest = function($q, $log) {

    // In order to simulate an async http call, getUser must return a
    // the data in a promise.

    var getUser = function(username) {
      // replace new Promise with angular promises $q
      return $q(function(resolve, reject) {
        if (userData[username]) { // This user exists.
          $log.log('userData:', userData[username]);
          resolve(userData[username].data);
        } else {
          $log.log('reject');
          // Removed sending an Error object
          // Would that be better 
          // reject(Error('User not found'));

          reject('User not found');
        }
      })
    };

    var getRepos = function(username) {
      return $q(function(resolve, reject) {
        if (userData[username].data.repos) {
          $log.log('repos:', userData[username].data.repos);
          resolve(userData[username].data.repos);
        }
      });
    };

    return ({
      getUser: getUser,
      getRepos: getRepos
    });
  };

  var module = angular.module('githubViewer');
  module.factory('httpTest', httpTest);

}());