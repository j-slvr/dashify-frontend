class AlarmListController {

  constructor(AlarmService,$mdToast) {

    this.mdToast = $mdToast;

    this.alarmList = [];
    this.alarmResource = AlarmService.resource;

    this.getAllAlarms();

    this.status = "n"

  }

  getAllAlarms() {
    this.alarmResource.query().$promise.then( resp => {
        this.alarmList = resp;
    })
  }

  deleteAlarm(id){

    this.alarmResource.delete({id: id}).$promise.then( resp => {
      this.getAllAlarms();
      this.mdToast.showSimple('done, ok ' + resp.ok)
    })

  }

  updateAlarm(alarm){

    this.alarmResource.update({id: alarm._id},alarm).$promise.then( resp => {
      this.mdToast.showSimple('done, ok ' + resp.ok)
    })

  }

}

angular
  .module('app')
  .component('alarmList', {
    templateUrl: 'app/components/alarmList/alarmList.html',
    controller: AlarmListController
  });

