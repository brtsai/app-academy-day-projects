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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);

$(() => {
	$('.follow-toggle').each(function(index, el) {
		let $el = $(el);
		new FollowToggle($el);
	});
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const FollowToggle = function($el) {
	this.userId = $el.data('user-id');
	this.followState = $el.data('initial-follow-state');
	this.$el = $el;

	this.addListeners();
	this.render();
};

FollowToggle.prototype.addListeners = function() {
	this.$el.on('click', event => {
		event.preventDefault();
		this.handleClick();
	});
};

FollowToggle.prototype.render = function() {
	if (this.followState === 'unfollowed') {
		this.$el.text('Follow!');
	} else {
		this.$el.text('Unfollow!');
	}
};

FollowToggle.prototype.handleClick = async function() {
	let method;

	if (this.followState === 'unfollowed') {
		method = 'post';
	} else {
		method = 'delete';
	}

	const followTogglePromise = await $.ajax({
		method: method,
		url: `/users/${this.userId}/follow`,
		dataType: 'json'
	});

	// followTogglePromise.then(() => {
	// 	this._toggle();
	// 	this.render();
	// });

	this._toggle();
	this.render();
};

FollowToggle.prototype._toggle = function() {
	if (this.followState === 'unfollowed') {
		this.followState = 'follow';
	} else {
		this.followState = 'unfollowed';
	}
};

module.exports = FollowToggle;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map