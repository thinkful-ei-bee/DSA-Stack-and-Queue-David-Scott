'use strict';

//const Queue = require('./Queue');
const Queue = require('./doubleQueue');

function peek(queue) {
  const first = queue.first;

  if (!first) {
    return;
  }

  return first.value;
}

function isEmpty(queue) {
  return (queue.first === null);
}

function display(queue) {
  if (isEmpty(queue)) {
    console.log('Queue is empty');
    return;
  }
  let temp = queue.first;
  while (temp !== null) {
    console.log(temp.value);
    temp = temp.next;
  }
}

function main() {
  const starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  // starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  
  console.log(peek(starTrekQ));
  display(starTrekQ);
}

main();