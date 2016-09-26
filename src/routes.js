angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/alarm-list');

  $stateProvider
    .state('app', {
      // url: '/a',
      abstract: true,
      component: 'app'
    })
    .state('app.alarmList', {
      url: '/alarm-list',
      component: 'alarmList'
    })
    .state('app.alarmDetail', {
      url: '/alarm/:id',
      component: 'alarmDetail'
    })
    .state('app.dashList', {
      url: '/dash-list',
      component: 'dashList'
    });
}
