const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


function Asteroid(color, radius) {
  this.color = "red";
  this.radius = "10";
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;