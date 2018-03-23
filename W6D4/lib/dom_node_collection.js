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
