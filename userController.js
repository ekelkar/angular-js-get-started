(function () {
  var app = angular.module('githubViewer');

  var userControlller = function ($scope, $http, $log,
    $location, $routeParams, github, httpTest) {

    var onReposComplete = function (response) {
      $log.log('Got repos');
      $scope.repos = response;
    };

    var onUserComplete = function (response) {
      $log.log(response);
      $scope.user = response;
      githubmod.getRepos($scope.username)
        .then(onReposComplete, onError);

      // $http.get("https://api.github.com/users/" + username +"/repos");
      // $log.log('get repos');
      // httpTest.getRepos($scope.username)
      //   .then(onReposComplete, onError);
    };

    var onError = function (reason) {
      $log.log(reason);
      $scope.error = "Could not fetch the data: " + reason;
    };

    // httpTest returns mock data
    // use github to get the actual data    
    var githubmod = github; // httpTest; // or github

    console.log('search for user: ', $routeParams.username);
    $scope.username = $routeParams.username;
    githubmod.getUser($scope.username).then(onUserComplete, onError);
    $scope.sortOrder = "-stargazers_count";

    console.log('Executing user controller');
  };

  console.log('Adding user controller');
  app.controller('userController', userControlller);
})();