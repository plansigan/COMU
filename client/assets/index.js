var app = angular.module('index',['ui.router']);

app.config(($stateProvider, $urlRouterProvider)=>{
  $stateProvider
    .state('index',{
      url:'/index',
      templateUrl:'./../pages/index.html',
      controller:'indexController'
    })
    .state('option',{
      url:'/option',
      templateUrl:'./../pages/option.html',
      controller:'optionController'
    })
    .state('Etherium', {
      url: '/Etherium',
      templateUrl: './../pages/EtheriumPage.html',
      controller: 'etheriumController'
    })
});










