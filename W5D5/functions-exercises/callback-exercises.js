class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    console.log(this);
    let date = new Date();
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let time = "";
    let padding = (this.hours < 10) ? "0" : "";
    time += padding + this.hours.toString();
    time += ":";
    padding = (this.minutes < 10) ? "0" : "";
    time += padding + this.minutes.toString();
    time += ":";
    padding = (this.seconds < 10) ? "0" : "";
    time += padding + this.seconds.toString();
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    if (this.seconds > 59) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes > 59) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours > 23) {
      this.hours = 0;
    }
    // console.log(this);
    this.printTime();
  }
}

// cont myTime = Clock.prototype.printTime
//const clock = new Clock();

const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let response;
// rl.question("Enter a number ", function (answer) {
//     response = answer;
//     // outside();
//     rl.close();
// });


// let outside = function(){
//     console.log('The user entered: ', response);
// };


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
      reader.question('Give me a number ', (res) => {
        console.log(`${res}`);
        addNumbers(sum + parseInt(res), numsLeft - 1, completionCallback);
      });
    } else {
      completionCallback(sum);
      reader.close();
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // console.log(`Entered askIfGreaterThan `);
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
    reader.question(`Does ${el1} come before ${el2}? (yes/no)\n`, (res) => {
      // console.log(`Entered reader.question `);
      // console.log(`closed reader `);
      if (res === 'yes') {
        callback(true);
      } else {
        callback(false);
      }
    });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
      // console.log(`Entered innerBubbleSortLoop `);
      // console.log(`arr: ${arr} i: ${i} madeAnySwaps: ${madeAnySwaps}`);
  if (i === arr.length - 1) {
    reader.close();
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
        madeAnySwaps = true;
      }
      // console.log(`arr: ${arr} i: ${i} isGreaterThan: ${isGreaterThan} madeAnySwaps: ${madeAnySwaps}`);
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}
innerBubbleSortLoop([1,2,3], 0, false, el => console.log("done with inner loop!") );

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     // Begin an inner loop if you made any swaps. Otherwise, call
//     // `sortCompletionCallback`.
//
//   }
//
//   // Kick the first outer loop off, starting `madeAnySwaps` as true.
// }

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


// let isSorted = false;
// while (!isSorted) {
//   isSorted = true;
//   for (let i = 0; i < arr.length; i++) {
//     let isGreaterThan;
//     askIfGreaterThan(arr[i], arr[i+1], value => { isGreaterThan = value; } );
//     reader.close();
//   }
// }

// askIfGreaterThan(1,2, bool => { my_bool = bool; console.log(`${bool}`);});
