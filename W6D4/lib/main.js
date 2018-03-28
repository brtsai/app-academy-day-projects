const DOMNodeCollection = require('./dom_node_collection.js');


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
