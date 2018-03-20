
function sumArgs() {
  let arg = Array.from(arguments);

  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  return sum;
}

function sumRest(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// console.log(sumArgs(1,2,3,4,5));
// console.log(sumRest(1,2,3,4,5));
//
Function.prototype.myBind = function(context) {
  const fn = this;
  const args = Array.from(arguments);
  const boundArgs = args.slice(1);
    return function(){
      const callArgs = Array.from(arguments);
      return fn.apply(context, boundArgs.concat(callArgs));
    };
};

Function.prototype.myBind = function(context, ...boundArgs) {
  let fn = this;
    return function(...callArgs){
      return fn.apply(context, boundArgs.concat(callArgs));
    };
};

//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

function curriedSum(numargs) {
  let numbers = new Array;

  return function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numargs) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };
}
//
// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56
//

// Function.prototype.curry = function (numargs){
//   let fn = this;
//   let args = new Array;
//
//   return function _curriedFunction(arg) {
//     args.push(arg);
//
//     if (args.length === numargs) {
//       return fn.apply(fn, args);
//     } else {
//       return _curriedFunction;
//     }
//
//   };
// };

Function.prototype.curry = function (numargs){
  let fn = this;
  let args = new Array;

  return function _curriedFunction(arg) {
    args.push(arg);

    if (args.length === numargs) {
      return fn.call(fn, ...args);
    } else {
      return _curriedFunction;
    }

  };
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
