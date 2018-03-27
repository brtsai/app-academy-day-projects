const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let response;
rl.question("Enter a number ", function (answer) {
  rl.close();
  response = answer;
  outside();
});

let outside = function(){
    console.log('The user entered: ', response);
};
