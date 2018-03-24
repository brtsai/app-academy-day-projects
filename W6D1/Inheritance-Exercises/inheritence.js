Function.prototype.inherits = function(parent) {
  // function Surrogate() {}
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate;
  // this.prototype.constructor = this;

  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;

};

function MovingObject () {}

MovingObject.prototype.sayHi = function() {
  console.log("hi");
};

function Ship () {}
Ship.inherits(MovingObject);

Ship.prototype.waveGoodBye = function() {
  console.log("I'm waving goodbye");
};

function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.finalGoodBye = function() {
  console.log("goodbye cruel world");
};

let mO = new MovingObject();
mO.sayHi();
try {
  mO.waveGoodBye();
} catch(err) {
  console.log("Moving object can't wave goodbye");
}
try {
  mO.finalGoodBye();
} catch(err) {
  console.log("Moving object can't sodoku");
}

let s = new Ship();
s.sayHi();
s.waveGoodBye();

try {
  s.finalGoodBye();
} catch (err) {
  console.log("Ship can't sodoku");
}

let a = new Asteroid();
a.sayHi();
try {
  a.waveGoodBye();
} catch (err) {
  console.log("Asteroid can only sodoku");
}

a.finalGoodBye();
