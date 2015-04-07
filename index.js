//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('mfbadr', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/skills', {templateUrl:'/views/skills/skills.html', controller:'HomeCtrl'})
    .when('/portfolio', {templateUrl:'/views/portfolio/portfolio.html', controller:'HomeCtrl'})
    .when('/draftkings', {templateUrl:'/views/home/draftkings.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
