console.log('load github.js');

(function () {

  var github = function ($http) {
    var getUser = function (username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function (response) {
          return response.data;
        });
    };

    // Get a list of repos for this user
    var getRepos = function (username) {
      //                       https://api.github.com/users/ekelkar/repos
      return $http.get("https://api.github.com/users/" + username + "/repos")
        .then(function (response) {
          return response.data;
        });
    };

    // Get details of a single repo
    var getRepo = function (username, reponame) {
      return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
        .then(function (response) {
          return response.data;
        });
    };

    // Get the first 5 contributors of a repo
    var getContributors = function (username, reponame) {
      return $http.get("https://api.github.com/repos/" + username + "/" + reponame + "/contributors")
        .then(function (response) {
          console.log(response.data.slice(0, 5));
          return response.data.slice(0, 5);
        })
    };

    return ({
      getUser: getUser,
      getRepos: getRepos,
      getRepo: getRepo,
      getContributors: getContributors
    });
  };

  var module = angular.module("githubViewer");
  module.factory('github', github);
  // Is it possible to use $log here? How?
  console.log('register github factory');
}());