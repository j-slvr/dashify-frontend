angular
  .module('app', ['ui.router', 'ngMaterial', 'ngResource']);

angular
  .module('app')
  .config(config);


function config($mdIconProvider) {

   $mdIconProvider.iconSet('md', './assets/mdi.svg', 24);

}

