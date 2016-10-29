console.log('load github.js');


(function() {

  var github = function($http) {
    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(username) {
 //                       https://api.github.com/users/ekelkar/repos
      return $http.get("https://api.github.com/users/" + username + "/repos")
       .then(function(response) {
          return response.data;
        });
    };

    return ({
      getUser: getUser,
      getRepos: getRepos
    });
  };

  var module = angular.module("githubViewer");
  module.factory('github', github);
  // Is it possible to use $log here? How?
  console.log('register github factory');
}());