/**
 * Queue Implementation
 * Difficulty: Intermediate
 * 
 * A queue is a FIFO (First In First Out) data structure.
 * Elements are added at the rear and removed from the front.
 */

class Queue {
  constructor() {
    this.items = [];
  }
  
  // Add element to rear of queue
  enqueue(element) {
    this.items.push(element);
  }
  
  // Remove and return front element
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  
  // Return front element without removing
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  
  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Return size of queue
  size() {
    return this.items.length;
  }
  
  // Clear the queue
  clear() {
    this.items = [];
  }
}

module.exports = { Queue };
