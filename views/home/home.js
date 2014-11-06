(function(){
  'use strict';

  angular.module('mfbadr')
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.firstList = [
      'Uber',
      'Tinder',
      'Facebook',
      'Craigslist',
      'Yelp',
      'eBay',
      'Bitcoin',
      'Reddit',
      'Youtube',
      'Instagram',
      'Spotify',
      'Netflix',
      'Games',
      'A blog',
      'Portfolios',
      'A store'
      ];

    $scope.secondList = [
      'puppies',
      'hipsters',
      'vegans',
      'travelers',
      'artists',
      'kittens',
      'teenagers',
      'memes',
      'bros',
      'gamers',
      'board games',
      'cosplayers',
      'facial hair',
      'unicorns',
      'video games',
      'musicians',
      'politicians',
      'hackers'
    ];

    $scope.first = _.sample($scope.firstList);
    $scope.second = _.sample($scope.secondList);

    $scope.newIdea = function(){
      $scope.first = _.sample($scope.firstList);
      $scope.second = _.sample($scope.secondList);
    };


  }]);
})();
