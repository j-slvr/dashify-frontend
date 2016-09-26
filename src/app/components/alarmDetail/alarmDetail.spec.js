describe('alarmDetail component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('alarmDetail', () => {
      return {
        templateUrl: 'app/alarmDetail.html'
      };
    });
  }));

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<alarmDetail></alarmDetail>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
