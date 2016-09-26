describe('DashService service', () => {
  beforeEach(module('app'));
  it('should', angular.mock.inject(DashService => {
    expect(DashService.getData()).toEqual(3);
  }));
});
