let Game = require('./game.js');
let Ship = require('./ship.js');

const GameView = function(ctx) {
  this.ctx = ctx;
  this.game = new Game(ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  this.ship = new Ship();
};

GameView.prototype.run = function() {
  this.game.moveObjects();
  this.game.draw();
};

GameView.prototype.start = function() {
  setInterval(this.run, 1000/60);
};


module.exports = GameView;
