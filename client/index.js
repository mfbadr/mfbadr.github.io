//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('mfbadr', [])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
