var five = require('johnny-five');

var board = new five.Board({
  port: '/dev/cu.usbserial-A900cfzF'
});

var sleep = function (time, callback) {
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {
    ;
  }
  callback();
}

board.on('ready', function() {
  var left = new five.Joystick({
    pins: ['A2', 'A0']
  });

  var right = new five.Joystick({
    pins: ['A3', 'A1']
  });

  var printY = function () {
    console.log('left  y = ' + left.y + '  ' + 'right y = ' + right.y);
  }

  for (var i = 0; i < 10; ++i) {
    sleep(1000, function () {
      console.log('left  y = ' + left.y + '  ' + 'right y = ' + right.y);
    });
  }

  // left.on('data', function () {
  //   console.log('left joystick');
  //   // console.log('x = ' + this.x);
  //   console.log('y = ' + this.y);
  //   console.log('-------------');
  // });

  // right.on('data', function () {
  //   console.log('right joystick');
  //   // console.log('x = ' + this.x);
  //   console.log('y = ' + this.y);
  //   console.log('-------------');
  // });
});