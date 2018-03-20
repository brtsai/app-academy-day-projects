let Asteroid = require('./asteroid.js');
let Bullet = require('./bullet.js');
let Ship = require('./ship.js');


const Game = function (dim_x, dim_y, num_asteroids){
  this.dim_x = dim_x;
  this.dim_y = dim_y;
  this.num_asteroids = num_asteroids;
  this.asteroids = new Array;
  this.addAsteroids();
};

Game.prototype.addAsteroids = function (){
  for (var i = 0; i < this.num_asteroids; i++){
    switch(i % 4) {
      case 0:
        this.asteroids.push(new Asteroid([0,0]));
        break;

      case 1:
        this.asteroids.push(new Asteroid([this.dim_x,0]));
        break;

      case 2:
        this.asteroids.push(new Asteroid([this.dim_x, this.dim_y]));
        break;

      case 3:
      default:
        this.asteroids.push(new Asteroid([0,this.dim_y]));
        break;
    }
  }
};

Game.prototype.draw = function (ctx) {

  ctx.fillStyle="black";
  ctx.fillRect(0, 0, this.dim_x, this.dim_y);


  for (let i = 0; i < this.num_asteroids; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function () {
  for (let i = 0; i < this.num_asteroids; i++) {
    this.asteroids[i].move();
  }
};

module.exports = Game;
