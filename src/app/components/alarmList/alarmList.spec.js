describe('alarmList component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('alarmList', () => {
      return {
        templateUrl: 'app/alarmList.html'
      };
    });
  }));

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<alarmList></alarmList>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
