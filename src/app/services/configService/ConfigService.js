class ConfigService {
  getBaseURL() {
    return 'http://hal-9000:9000/';
  }
}

angular
  .module('app')
  .service('ConfigService', ConfigService);

