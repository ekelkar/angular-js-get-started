(function () {

  var app = angular.module('githubViewer'); // Use [] to first define app, []);


  var mainController = function ($scope, $http, $interval, $log,
    $location) {

    $scope.search = function (username) {
      $scope.error = '';
      $scope.repos = [];
      $log.log('Search');
      $scope.countDownTimer = 0;
      $interval.cancel(timer);

      // $http.get("https://api.github.com/users/" + username)
      // httpTest.getUser(username)

      // set location here this function would be performed in userDetail controller

      //      githubmod.getUser(username)
      //        .then(onUserComplete, onError);

      $location.path('/user/' + username);
    };

    var decrementCountDownTimer = function () {
      $scope.countDownTimer -= 1;
      if ($scope.countDownTimer < 1) {
        $scope.search($scope.username);
      }
    };

    $scope.username = "angular";
    $scope.countDownTimer = 20; // set count to test the interval service

    var timer = $interval(decrementCountDownTimer, 1000, $scope.countDownTimer);
    console.log('Executing main controller')
  };

  console.log('setting up main controller');
  app.controller("mainController", mainController);

}());