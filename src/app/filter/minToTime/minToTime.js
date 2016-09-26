function minToTime() {
  return (time) => {
    const min = time % 60;
    const h   = ((time - min) / 60 ).toFixed(0);
    return zeroPad(h,2) + ":" + zeroPad(min,2);
  };
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

angular
  .module('app')
  .filter('minToTime', minToTime);

