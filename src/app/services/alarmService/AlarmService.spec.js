describe('AlarmService service', () => {
  beforeEach(module('app'));
  it('should', angular.mock.inject(AlarmService => {
    expect(AlarmService.getData()).toEqual(3);
  }));
});
