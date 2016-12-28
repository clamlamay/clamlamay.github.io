console.log('Linked');

angular.module('portfolioApp', ['ngRoute']).config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false // good for anything IE9+
    })

    $routeProvider
      .when('/', {
        templateUrl: 'ngViews/index.html',
        controller: 'homeCtrl'
      })
       .when('/about', {
        templateUrl: 'ngViews/about.html',
      })
        .when('/portfolio', {
        templateUrl: 'ngViews/portfolio.html',
      })
         .when('/contact', {
        templateUrl: 'ngViews/contact.html',
      });
   
    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);