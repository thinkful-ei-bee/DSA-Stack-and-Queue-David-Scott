'use strict';

const Queue = require('./Queue');

const mQueue = new Queue();
const fQueue = new Queue();


function squareDance(dancer) {
  let gender = dancer[0];

  if (gender === 'M') {
    mQueue.enqueue(dancer.slice(2));
  } else { fQueue.enqueue(dancer.slice(2));}

  if (mQueue.first && fQueue.first) {
    const male = mQueue.dequeue();
    const female = fQueue.dequeue();
    console.log(`pair: ${male} & ${female}`);
  }

  else {
    console.log('No pairs!');
  }
}

squareDance('F Jane');
squareDance('M Frank');
squareDance('M John');
squareDance('M Sherlock');
squareDance('F Madonna');
squareDance('M David');
squareDance('M Christopher');
squareDance('F Beyonce');