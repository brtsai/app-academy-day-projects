const Bullet = require('./bullet.js');
const GameView = require('./game_view.js');
const Game = require('./game.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship.js');
const Utils = require('./utils.js');
const Asteroid = require('./asteroid.js');

document.addEventListener("DOMContentLoaded", function(){
const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

const ctx = canvasEl.getContext("2d");
ctx.fillStyle = "purple";
ctx.fillRect(0, 0, 500, 500);

window.MovingObject = new MovingObject({pos: [30, 30], vel: [2, 0],
                                       radius: 5, color: "#00FF00"});



window.MovingObjects = new Array;
window.MovingObjects.push(new Asteroid([50,50]));
window.MovingObjects.push(new Asteroid([50,50]));
window.MovingObjects.push(new Asteroid([50,50]));
window.MovingObjects.push(new Asteroid([50,50]));
window.MovingObjects.push(new Asteroid([50,50]));

function animate() {
  // game.advanceState();
  // game.clearScreen();
  // game.drawEverything();


  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);

  window.MovingObject.draw(ctx);
  window.MovingObject.move();
  for (var i = 0; i < window.MovingObjects.length; i++) {
    window.MovingObjects[i].draw(ctx);
    window.MovingObjects[i].move(); 
  }
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

 });
