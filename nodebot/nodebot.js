var five = require("johnny-five");
var ports = [
  { id: "A", port: "/dev/cu.MRROBOT-DevB" },
  { id: "B", port: "/dev/cu.usbserial-A900cfzF" }
];

var boards = new five.Boards(ports).on("ready", function() {
  var configs = five.Motor.SHIELD_CONFIGS.SEEED_STUDIO;

  var motorA = new five.Motor(configs.A);
  var motorB = new five.Motor(configs.B);

  var led1 = new five.Led({
      pin: 13,
      board: A
    });

  var led2 = new five.Led({
      pin: 5,
      board: B
    });

  led1.blink(500);
  led2.blink(500);

  // this.repl.inject({
  //   motorA: motorA,
  //   motorB: motorB
  // });

  // motorA.forward(255);
  // motorB.forward(255);

  // board.wait(2000, function() {
  //   motorA.stop();
  //   motorB.stop();
  // });

  // Create a standard `led` component instance
  var led = new five.Led(5);

  // "blink" the led in 500ms on-off phase periods
  led.blink(500);

});