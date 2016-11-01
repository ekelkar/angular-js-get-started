(function () {

  // The app depends upon ngRoute
  var app = angular.module('githubViewer', ['ngRoute']);

  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: 'test.html',
        controller: 'testController'
      })
      .when('/main', {
        templateUrl: 'main.html',
        controller: 'mainController'
      })
      .when('/user/:username', {
        templateUrl: 'user.html',
        controller: 'userController'
      })
      .otherwise({
        redirectTo: '/main'
      });
    $locationProvider.html5Mode({
      enabled: true //,
        // requireBase: false
    });
  });
  console.log("setting up app");
  console.log("app: ", app);


}());