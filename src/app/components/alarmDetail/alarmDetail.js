class AlarmDetailController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

angular
  .module('app')
  .component('alarmDetail', {
    templateUrl: 'app/components/alarmDetail/alarmDetail.html',
    controller: AlarmDetailController
  });

