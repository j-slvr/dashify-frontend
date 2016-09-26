describe('ConfigService service', () => {
  beforeEach(module('app'));
  it('should', angular.mock.inject(ConfigService => {
    expect(ConfigService.getData()).toEqual(3);
  }));
});
