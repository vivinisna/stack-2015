'use strict';

/**
 * @ngdoc function
 * @name uiWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiWebApp
 */
angular.module('uiWebApp')
  .controller('MainCtrl', function ($scope, $rootScope, AccessToken, Profile) {
    var setelahLogin = function(){
      $rootScope.currentUser = Profile.get();
      $rootScope.sudahLogin = true;
      $rootScope.token = AccessToken.get();
      console.log('Sudah Login : '+$scope.sudahLogin);
    };

    $scope.$on('oauth:authorized', function() {
      setelahLogin();
    });

    $scope.$on('oauth:login', function() {
      setelahLogin();
    });

    $scope.$on('oauth:logout', function() {
      $rootScope.currentUser = {};
      $rootScope.sudahLogin = false;
      $rootScope.token = {};
      console.log('Sudah Login : '+$scope.sudahLogin);
    });
  });
