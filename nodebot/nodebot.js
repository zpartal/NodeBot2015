var five = require('johnny-five');

var leftStickVal, rightStickVal;

var robotBoard = new five.Board({
  port: '/dev/cu.MRROBOT-DevB'
});

var controlBoard = new five.Board({
  port: '/dev/cu.usbserial-A900cfzF'
});

robotBoard.on('ready', function() {

  // All of da lights
  var led = new five.Led({ pin: 5, board: robotBoard });
  led.blink(500);

  // Le motors
  var configs = five.Motor.SHIELD_CONFIGS.SEEED_STUDIO;

  var leftMotor = new five.Motor(configs.B);
  var rightMotor = new five.Motor(configs.A);

  this.loop(50, function() {
    if (leftStickVal > 0) {
      leftMotor.forward(255*leftStickVal);
    }
    else {
      leftMotor.reverse(-1*255*leftStickVal);
    }

    if (rightStickVal > 0) {
      rightMotor.forward(255*rightStickVal);
    }
    else {
      rightMotor.reverse(-1*255*rightStickVal);
    }
  });

});

controlBoard.on('ready', function() {

  // Left Stick
  var leftStick = new five.Joystick({
    // [ x, y ]
    pins: ["A0","A1"],
    invertX: true,
    board: controlBoard
  })
  .on("change", function() {
    leftStickVal = this.x;
    console.log('LEFT: ' + this.x)
  });

  // Right Stick
  var rightStick = new five.Joystick({
    // [ x, y ]
    pins: ["A2","A3"],
    invertX: true,
    board: controlBoard
  })
  .on("change", function() {
    rightStickVal = this.x;
    console.log('RIGHT: ' + this.x);
  });

});