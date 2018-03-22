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
const UsersSearch = __webpack_require__(3);

$(() => {
	$('.follow-toggle').each(function(index, el) {
		let $el = $(el);
		new FollowToggle($el);
	});

	$('nav.users-search').each(function(index, el) {
		new UsersSearch(el);
	});
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

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

FollowToggle.prototype.handleClick = function() {
	let followPromise;

	if (this.followState === 'unfollowed') {
		followPromise = APIUtil.followUser;
	} else {
		followPromise = APIUtil.unfollowUser;
	}

	const followToggle = this;

	followPromise(this.userId).then(function() {
		followToggle._enableButton();
		followToggle._toggle();
		followToggle.render();
	});

	this._disableButton();
};

FollowToggle.prototype._disableButton = function() {
	this.$el.prop('disabled', true);
};

FollowToggle.prototype._enableButton = function() {
	this.$el.prop('disabled', false);
};

FollowToggle.prototype._toggle = function() {
	if (this.followState === 'unfollowed') {
		this.followState = 'follow';
	} else {
		this.followState = 'unfollowed';
	}
};

module.exports = FollowToggle;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const APIUtil = {
	followUser: id => {
		return $.ajax({
			method: 'post',
			url: `/users/${id}/follow`,
			dataType: 'json'
		});
	},

	unfollowUser: id => {
		return $.ajax({
			method: 'delete',
			url: `/users/${id}/follow`,
			dataType: 'json'
		});
	}
};

module.exports = APIUtil;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class UsersSearch {
	constructor(el) {
		this.$el = $(el);
		this.$input = this.$el.find('input');
		this.$usersList = this.$el.find('ul');
	}
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map