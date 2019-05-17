'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next; 
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    if (this.top === null) {
      this.top = new _Node(item, null);
      return;
    }

    this.top = new _Node(item, this.top);
  }

  pop() {
    if (this.top === null) {
      console.log('stack is empty');
      return;
    }

    const node = this.top;
    this.top = this.top.next;
    return node.value;
  }
}

module.exports = Stack;