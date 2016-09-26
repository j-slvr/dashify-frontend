class DashListController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

angular
  .module('app')
  .component('dashList', {
    templateUrl: 'app/components/dashList/dashList.html',
    controller: DashListController
  });

