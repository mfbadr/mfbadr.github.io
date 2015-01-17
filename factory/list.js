angular.module('mfbadr')
.factory('List', function(){
  'use strict';
  var firstList = [
    'Uber',
    'Tinder',
    'Facebook',
    'Craigslist',
    'Yelp',
    'eBay',
    'Bitcoin',
    'Reddit',
    'Github',
    'Twitter',
    'Youtube',
    'Snapchat',
    'Vine',
    'Instagram',
    'Spotify',
    'Netflix',
    'Games',
    'A blog',
    'Portfolios',
    ];
  var secondList = [
    'puppies',
    'hipsters',
    'vegans',
    'travelers',
    'artists',
    'kittens',
    'teenagers',
    'beers',
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

  function first(){
    return _.sample(firstList);
  };

  function second(){
    return _.sample(secondList);
  };

  return {first:first, second:second};

});
