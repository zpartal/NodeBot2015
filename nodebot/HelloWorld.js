var five = require("johnny-five");
var board = new five.Board({
  port: "/dev/cu.MRROBOT-DevB"
});

board.on("ready", function() {
  // Create a standard `led` component instance
  var led = new five.Led(5);

  // "blink" the led in 500ms on-off phase periods
  led.blink(500);
});