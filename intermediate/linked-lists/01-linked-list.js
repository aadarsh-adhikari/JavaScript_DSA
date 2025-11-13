/**
 * Node class for Linked List
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Singly Linked List Implementation
 * Difficulty: Intermediate
 * 
 * A linked list is a linear data structure where elements are stored in nodes.
 * Each node contains data and a reference to the next node.
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Add element at the end
  append(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  // Add element at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  // Remove element by value
  remove(data) {
    if (!this.head) return;
    
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }
  
  // Find element
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  
  // Convert to array for easy testing
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

module.exports = { Node, LinkedList };
