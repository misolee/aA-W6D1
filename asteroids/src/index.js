console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function(){
  let el = document.getElementById("game-canvas");
  let context = el.getContext("2d");
  const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 10,
    color: "#000000"}
  );
  mo.draw(context);
  console.log(Asteroid);
  const a = new Asteroid({pos: [30, 30]});
  console.log(a);
  a.draw(context);
});

// const a = new Asteroid({ pos: [30, 30] });