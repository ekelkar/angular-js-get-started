(function() {

  var app = angular.module('githubViewer', []);


  var mainController = function($scope, $http, $interval, $log,
    $location, $anchorScroll, github, httpTest) {


    var onReposComplete = function(response) {
      $log.log('Got repos');
      $scope.repos = response;
      $location.hash('userDetail');
      $anchorScroll();
    };

    var onUserComplete = function(response) {
      $log.log(response);
      $scope.user = response;
      githubmod.getRepos($scope.username)
        .then(onReposComplete, onError);

      // $http.get("https://api.github.com/users/" + username +"/repos");
      // $log.log('get repos');
      // httpTest.getRepos($scope.username)
      //   .then(onReposComplete, onError);
    };

    var onError = function(reason) {
      $log.log(reason);
      $scope.error = "Could not fetch the data: " + reason;
    };

    $scope.search = function(username) {
      $scope.error = '';
      $scope.repos = [];
      $log.log('Search');
      $scope.countDownTimer = 0;
      $interval.cancel(timer);

      // $http.get("https://api.github.com/users/" + username)
      // httpTest.getUser(username)
      githubmod.getUser(username)
        .then(onUserComplete, onError);
    };

    var decrementCountDownTimer = function() {
      $scope.countDownTimer -= 1;
      if ($scope.countDownTimer < 1) {
        $scope.search($scope.username);
      }
    };

    // httpTest returns mock data
    // use github to get the actual data    
    var githubmod = httpTest; // or github

    $scope.username = "ekelkar";
    $scope.message = "GitHub Viewer";
    $scope.sortOrder = "-stargazers_count";
    $scope.countDownTimer = 20; // set count to test the interval service
    
    var timer = $interval(decrementCountDownTimer, 1000, $scope.countDownTimer);
  };

  app.controller("mainController", mainController);

}());