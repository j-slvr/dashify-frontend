angular
  .module('app')
  .component('app', {
    replace: true,
    templateUrl: 'app/hello.html',
    controller() {
      this.hello = 'Hello World!';
    }
  });
