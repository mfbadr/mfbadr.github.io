(function(){
  'use strict';

  angular.module('mfbadr')
  .controller('HomeCtrl', ['$scope', 'List', function($scope, List){

    $scope.newIdea = function(){
      $scope.first = List.first();
      $scope.second = List.second();
    };

    $scope.newIdea();

    $scope.collapseKnow = true;
    $scope.collapseMade = true;

  }]);
})();
