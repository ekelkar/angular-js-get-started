(function () {
  var app = angular.module('githubViewer');

  var repoControlller = function ($scope, $http, $log,
    $location, $routeParams, github, httpTest) {

    var onRepoComplete = function (response) {
      $log.log('Got repo detail');
      console.log('repo detail: ', response);
      $scope.repo = response;
      githubmod.getContributors($scope.username, $scope.reponame)
        .then(onContributorsComplete, onError);
    };

    var onContributorsComplete = function (response) {
      $scope.contributors = response;
      console.log(response);
    };
    //
    //    var onUserComplete = function (response) {
    //      $log.log(response);
    //      $scope.user = response;
    //      githubmod.getRepos($scope.username)
    //        .then(onReposComplete, onError);
    //
    //      // $http.get("https://api.github.com/users/" + username +"/repos");
    //      // $log.log('get repos');
    //      // httpTest.getRepos($scope.username)
    //      //   .then(onReposComplete, onError);
    //    };
    //
    var onError = function (reason) {
      $log.log(reason);
      $scope.error = "Could not fetch the data: " + reason;
    };

    // httpTest returns mock data
    // use github to get the actual data    
    var githubmod = github; // httpTest; // or github

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    console.log('username: ', $scope.username, 'repo: ', $scope.reponame);
    githubmod.getRepo($scope.username, $scope.reponame)
      .then(onRepoComplete, onError);
    //    githubmod.getUser($scope.username).then(onUserComplete, onError);
    //    $scope.sortOrder = "-stargazers_count";

    console.log('Executing repo controller');
  };

  console.log('Adding repo controller');
  app.controller('repoController', repoControlller);
})();