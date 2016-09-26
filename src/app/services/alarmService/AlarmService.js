class AlarmService {

  constructor(ConfigService, $resource) {
    const URL = ConfigService.getBaseURL() + 'alarm/:id';
    this.resource = $resource(URL, {}, {
      'query': { method: 'GET', isArray: true },
      'get': {
        method: 'GET',
        transformResponse: data => {
          data = angular.fromJson(data);
          return data;
        }
      },
      'update': { method: 'PUT' }
    });
  }
}

angular
    .module('app')
    .service('AlarmService', AlarmService);
