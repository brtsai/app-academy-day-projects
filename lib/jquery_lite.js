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

const DOMNodeCollection = __webpack_require__(1);


const fnQueue = new Array;

window.$l = function (query) {
  if(query instanceof HTMLElement) {
    return new DOMNodeCollection([query]);
  } else if(query instanceof Function) {
    if (document.readyState === 'complete') {
      query();
    }else {
      fnQueue.push(query);
    }
  } else {
    const nodeList = document.querySelectorAll(query);
    return new DOMNodeCollection(Array.from(nodeList));
  }
};

const $l = window.$l;

document.addEventListener("DOMContentLoaded", function(){
  fnQueue.forEach( el => {
    el();
  });
});


Function.prototype.extend = function(...args) {
  let merged = function () {};

  args.forEach( el => {
    for( let key in el ){
      this[key] = el[key];
    }
  });
};

$l.ajax = function(request) {
  const optionsHash = {
    url: '127.0.0.1/',
    type: 'GET',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: () => {},
    error: () => {}
  };
  optionsHash.extend(...request);

  // step 1 - do stuff
  const xhr = new XMLHttpRequest();

  // step 2 - specify path and verb
  xhr.open(optionsHash.type, optionsHash.url);

  // step 3 - register a callback
  xhr.onload = optionsHash.success;
  xhr.onerror = optionsHash.error;

  // step 4 - send off the request with optional data
  xhr.send();
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(elements) {
    this.elements = elements;

  }

  html(newInnerHtml) {
    if (newInnerHtml === undefined) {
      if (this.elements.length > 0) {
        return this.elements[0].innerHTML;
      } else {
        return undefined;
      }
    } else {
      this.elements.forEach(function(el) {
        el.innerHTML = newInnerHtml;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(...collection) {
    if (collection.length < 1) return;
    console.log(`collection: ${collection}, typeof: ${typeof collection[0]}`);
    if (collection[0] instanceof HTMLElement) {
      this.elements.forEach( el => {
        collection.forEach( toAppend => {
          el.innerHTML = el.innerHTML + toAppend.outerHTML;
        });
      });
    } else if (typeof collection[0] === "string") {
      this.elements.forEach( el => {
        collection.forEach( toAppend => {
          el.innerHTML += toAppend;
        });
      });
    } else if (collection[0] instanceof DOMNodeCollection){
      this.elements.forEach( el => {
        collection.forEach( node => {
          el.innerHTML += node;
        });
      });
    } else {
      throw("Invalid type");
    }
  }

  attr(attribute, value) {
    if (value === undefined) {
      let ooAttribute = [];

      this.elements.forEach( el => {
        ooAttribute.push(el.getAttribute(attribute));
      });

      return ooAttribute;
    } else {
      this.elements.forEach( el => {
        el.setAttribute(attribute, value);
      });
    }
  }

  addClass(className) {
    this.elements.forEach( el => {
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.elements.forEach( el => {
      el.classList.remove(className);
    });
  }

  children() {
    let oochild = [];

    this.elements.forEach( el => {
      oochild = oochild.concat(Array.from(el.children));
    });

    return oochild;
  }


  parent() {
    const ooparent = [];
    this.elements.forEach( el => {
      ooparent.push(el.parentNode);
    });
    return ooparent;
  }

  find(selector) {
    let oomatches = [];

    this.elements.forEach( el => {
      oomatches = oomatches.concat(Array.from(el.querySelectorAll(selector)));
    });

    return oomatches;

  }

  remove() {
    this.elements.forEach(function(el) {
      el.outerHTML = "";
    });
  }

  on(eventType, callback) {
    this.elements.forEach( el => {
      el.addEventListener(eventType, callback);
    });

  }

  off(eventType, callback) {
    this.elements.forEach( el => {
      el.removeEventListener(eventType, callback);
    });
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);