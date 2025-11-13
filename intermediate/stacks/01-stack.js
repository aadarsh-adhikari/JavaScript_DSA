/**
 * Stack Implementation
 * Difficulty: Intermediate
 * 
 * A stack is a LIFO (Last In First Out) data structure.
 * Elements are added and removed from the same end (top).
 */

class Stack {
  constructor() {
    this.items = [];
  }
  
  // Add element to top of stack
  push(element) {
    this.items.push(element);
  }
  
  // Remove and return top element
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }
  
  // Return top element without removing
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
  
  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Return size of stack
  size() {
    return this.items.length;
  }
  
  // Clear the stack
  clear() {
    this.items = [];
  }
}

module.exports = { Stack };
