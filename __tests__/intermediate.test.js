const { LinkedList } = require('../intermediate/linked-lists/01-linked-list');
const { reverseLinkedList, createLinkedList, linkedListToArray } = require('../intermediate/linked-lists/02-reverse-linked-list');
const { Stack } = require('../intermediate/stacks/01-stack');
const { isValidParentheses } = require('../intermediate/stacks/02-valid-parentheses');
const { Queue } = require('../intermediate/queues/01-queue');

describe('Data Structures - Intermediate', () => {
  describe('Linked List', () => {
    test('should append elements', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });
    
    test('should prepend elements', () => {
      const list = new LinkedList();
      list.prepend(1);
      list.prepend(2);
      expect(list.toArray()).toEqual([2, 1]);
    });
    
    test('should remove elements', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(2);
      expect(list.toArray()).toEqual([1, 3]);
    });
  });
  
  describe('Reverse Linked List', () => {
    test('should reverse linked list', () => {
      const head = createLinkedList([1, 2, 3, 4, 5]);
      const reversed = reverseLinkedList(head);
      expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
    });
  });
  
  describe('Stack', () => {
    test('should push and pop', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });
    
    test('should peek', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toBe(1);
      expect(stack.size()).toBe(1);
    });
  });
  
  describe('Valid Parentheses', () => {
    test('should validate parentheses', () => {
      expect(isValidParentheses('()')).toBe(true);
      expect(isValidParentheses('()[]{}')).toBe(true);
      expect(isValidParentheses('(]')).toBe(false);
      expect(isValidParentheses('([)]')).toBe(false);
      expect(isValidParentheses('{[]}')).toBe(true);
    });
  });
  
  describe('Queue', () => {
    test('should enqueue and dequeue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
    });
    
    test('should return front', () => {
      const queue = new Queue();
      queue.enqueue(1);
      expect(queue.front()).toBe(1);
      expect(queue.size()).toBe(1);
    });
  });
});
