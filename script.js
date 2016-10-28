(function() {

  var app = angular.module('githubViewer', []);

  var mainController = function($scope, $http, httpTest) {

    var onReposComplete = function() {
      console.log('Got repos');
      $scope.repos = repos;
    };

    var onUserComplete = function(response) {
      console.log(response.data);
      $scope.user = response.data;
      // getRepos($scope.user.name)
      //   .then(onReposComplete, onError);
    };

    var onError = function(reason) {
      console.log(reason);
      $scope.error = "Could not fetch the data" + reason;
      $scope.error = reason;
      // $scope.error = reason;
    };

    var getRepos = function(username) {
      console.log('get repos');
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };

    $scope.search = function(username) {
      console.log('search');

      // $http.get("https://api.github.com/users/" + username)
      httpTest.getUser(username)
        .then(onUserComplete, onError);
    };

    $scope.username = "ekelkar";
    $scope.message = "GitHub Viewer";
  };

  app.controller("mainController", mainController);

}());