const MovingObject = require('./moving_object.js');
const Utils = require('./utils.js');

const defaultColor = "orange";
const defaultRadius = 12;

const Asteroid = function(pos) {
    console.log(Utils);
    const vel = Utils.randomVec(2);
    MovingObject.call(this, { pos: pos, vel: vel, color: defaultColor, radius: defaultRadius});
};

Utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
