//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('mfbadr', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/view/home/home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
