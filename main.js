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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  const letters = new Stack();

  let backwards = '';

  for (let i = 0; i < s.length; i++) {
    letters.push(s[i]);
  }

  while (!isEmpty(letters)) {
    backwards += letters.pop();
  }

  return s === backwards;

}


function parenthCheck(s) {

  const open = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      open.push(i);
    }
    if (s[i] === ')') {
      if (isEmpty(open)) {
        console.log(`close parentheses w/out open at postion: ${i}`);
        return;
      }
      open.pop();
    }
  }

  if (!isEmpty(open)) {
    console.log(`open parentheses w/out close at position: ${open.pop()}`);
  } else {
    console.log('string is valid');
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

console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

parenthCheck('((())');
parenthCheck('(()))');
parenthCheck('((()))');
parenthCheck(')))(((');