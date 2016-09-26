class DashService {
  getData() {
    return 1 + 2;
  }
}

angular
  .module('app')
  .service('DashService', DashService);

