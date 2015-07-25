var five = require('johnny-five');

var board = new five.Board({
  port: '/dev/cu.usbserial-A900cfzF'
});

board.on('ready', function() {
  var left = new five.Joystick({
    pins: ['A2', 'A0']
  });

  var right = new five.Joystick({
    pins: ['A3', 'A1']
  });

  

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