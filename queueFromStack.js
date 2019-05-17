'use strict';

const Stack = require('./Stack');

const stackMain = new Stack();
const stackTemp = new Stack();

function enqueue(item) {
  while (stackMain.top) {
    stackTemp.push(stackMain.pop());
  }
  stackTemp.push(item);
  while (stackTemp.top) {
    stackMain.push(stackTemp.pop());
  }
}

function dequeue() {
  return stackMain.pop();
}


function main() {
  enqueue('Jane');
  enqueue('Frank');
  enqueue('John');
  enqueue('Sherlock');

  console.log(stackMain);

  console.log(dequeue());

  console.log(stackMain);

}

main();