/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const MovingObject = function (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
};



MovingObject.prototype.draw = function (ctx) {

 ctx.fillStyle = this.color;
 ctx.beginPath();

 ctx.arc(
   this.pos[0],
   this.pos[1],
   this.radius,
   0,
   2 * Math.PI,
   false
 );

 ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

module.exports = MovingObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

let MovingObject = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let Asteroid = __webpack_require__(6);
let Bullet = __webpack_require__(1);
let Ship = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

let MovingObject = __webpack_require__(0);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Bullet = __webpack_require__(1);
const GameView = __webpack_require__(5);
const Game = __webpack_require__(2);
const MovingObject = __webpack_require__(0);
const Ship = __webpack_require__(3);
const Utils = __webpack_require__(7);
const Asteroid = __webpack_require__(6);

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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

let Game = __webpack_require__(2);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(0);
const Utils = __webpack_require__(7);

const defaultColor = "orange";
const defaultRadius = 12;

const Asteroid = function(pos) {
    console.log(Utils);
    const vel = Utils.randomVec(2);
    MovingObject.call(this, { pos: pos, vel: vel, color: defaultColor, radius: defaultRadius});
};

Utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};


module.exports = Util;


/***/ })
/******/ ]);