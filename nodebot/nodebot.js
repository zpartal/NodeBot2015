var five = require("johnny-five");
var board = new five.Board({
  port: "/dev/cu.MRROBOT-DevB"
});

board.on("ready", function() {
  var configs = five.Motor.SHIELD_CONFIGS.SEEED_STUDIO;

  var motorA = new five.Motor(configs.A);
  var motorB = new five.Motor(configs.B);

  this.repl.inject({
    motorA: motorA,
    motorB: motorB
  });

  // motorA.forward(255);
  // motorB.forward(255);

  // board.wait(2000, function() {
  //   motorA.stop();
  //   motorB.stop();
  // });

});