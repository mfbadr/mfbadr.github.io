//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('mfbadr', ['ngRoute', 'ui.bootstrap'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/skills', {templateUrl:'/views/skills/skills.html', controller:'SkillsCtrl'})
    .when('/portfolio', {templateUrl:'/views/portfolio/portfolio.html', controller:'PortfolioCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
