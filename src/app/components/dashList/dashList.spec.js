describe('dashList component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('dashList', () => {
      return {
        templateUrl: 'app/dashList.html'
      };
    });
  }));

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<dashList></dashList>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
