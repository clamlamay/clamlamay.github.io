angular.module('portfolioApp')
.controller('homeCtrl', function($scope, $http, $location, $rootScope) {

  $scope.portfolioPage = function (){
      $location.path('/portfolio');
  };

});


 