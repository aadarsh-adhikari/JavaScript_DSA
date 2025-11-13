/**
 * Problem: Reverse a Linked List
 * Difficulty: Intermediate
 * 
 * Reverse a singly linked list.
 * 
 * Example:
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 * Output: 5 -> 4 -> 3 -> 2 -> 1
 */

const { Node } = require('./01-linked-list');

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}

// Helper function to create linked list from array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  
  const head = new Node(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  
  return head;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.data);
    current = current.next;
  }
  return arr;
}

module.exports = { reverseLinkedList, createLinkedList, linkedListToArray };
