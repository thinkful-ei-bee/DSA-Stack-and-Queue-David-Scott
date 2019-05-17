'use strict';

const Stack = require('./Stack');

function peek(stack) {
  const top = stack.pop();
  if (!top) {
    return;
  }

  stack.push(top);
  return top;
}

function isEmpty(stack) {
  return !stack.top;
}

function display(stack) {
  const storage = new Stack();
  while (!isEmpty(stack)) {
    const val = stack.pop();
    console.log(val);
    storage.push(val);
  }
  while (!isEmpty(storage)) {
    stack.push(storage.pop());
  }
}


function main() {
  const starTrek = new Stack();
  const emptyStack = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log('looking at top:', peek(starTrek));
  console.log('Is it empty:', isEmpty(starTrek));
  console.log('Empty stack is empty:', isEmpty(emptyStack));
  
  starTrek.pop();
  starTrek.pop();
  starTrek.push('Scotty');
  display(starTrek);


}

main();