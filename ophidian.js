'use strict';

const Queue = require('./Queue');

function display(queue) {
  if (!queue.first) {
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
  const customers = new Queue();

  for (let i = 1; i < 10; i++) {
    customers.enqueue(i);
  }

  for (let i = 11; i < 20; i++) {
    customers.enqueue(i);
    if (Math.random() < 0.25) {
      customers.enqueue(customers.dequeue());
    } else {
      customers.dequeue();
    }
  }
 
  display(customers); 
}

main();