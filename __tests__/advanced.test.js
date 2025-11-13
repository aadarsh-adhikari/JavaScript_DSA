const { BinarySearchTree } = require('../advanced/trees/01-binary-search-tree');
const { maxDepth } = require('../advanced/trees/02-max-depth');
const { Graph } = require('../advanced/graphs/01-graph');
const { fibonacciMemo, fibonacciTabulation, fibonacciOptimized } = require('../advanced/dynamic-programming/01-fibonacci');
const { climbStairs, climbStairsOptimized } = require('../advanced/dynamic-programming/02-climbing-stairs');

describe('Advanced Data Structures and Algorithms', () => {
  describe('Binary Search Tree', () => {
    test('should insert and search', () => {
      const bst = new BinarySearchTree();
      bst.insert(5);
      bst.insert(3);
      bst.insert(7);
      bst.insert(1);
      bst.insert(9);
      
      expect(bst.search(7)).toBe(true);
      expect(bst.search(10)).toBe(false);
    });
    
    test('should perform inorder traversal', () => {
      const bst = new BinarySearchTree();
      bst.insert(5);
      bst.insert(3);
      bst.insert(7);
      
      expect(bst.inorder()).toEqual([3, 5, 7]);
    });
  });
  
  describe('Max Depth', () => {
    test('should calculate max depth', () => {
      const bst = new BinarySearchTree();
      bst.insert(3);
      bst.insert(9);
      bst.insert(20);
      bst.insert(15);
      bst.insert(7);
      
      expect(maxDepth(bst.root)).toBeGreaterThan(0);
    });
  });
  
  describe('Graph', () => {
    test('should add vertices and edges', () => {
      const graph = new Graph();
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');
      
      expect(graph.adjacencyList.has('A')).toBe(true);
      expect(graph.adjacencyList.has('B')).toBe(true);
    });
    
    test('should perform DFS', () => {
      const graph = new Graph();
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      
      const result = graph.dfs('A');
      expect(result).toContain('A');
      expect(result).toContain('B');
      expect(result).toContain('C');
    });
    
    test('should perform BFS', () => {
      const graph = new Graph();
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      
      const result = graph.bfs('A');
      expect(result[0]).toBe('A');
    });
  });
  
  describe('Fibonacci', () => {
    test('should calculate fibonacci with memoization', () => {
      expect(fibonacciMemo(6)).toBe(8);
      expect(fibonacciMemo(10)).toBe(55);
    });
    
    test('should calculate fibonacci with tabulation', () => {
      expect(fibonacciTabulation(6)).toBe(8);
      expect(fibonacciTabulation(10)).toBe(55);
    });
    
    test('should calculate fibonacci optimized', () => {
      expect(fibonacciOptimized(6)).toBe(8);
      expect(fibonacciOptimized(10)).toBe(55);
    });
  });
  
  describe('Climbing Stairs', () => {
    test('should count ways to climb stairs', () => {
      expect(climbStairs(2)).toBe(2);
      expect(climbStairs(3)).toBe(3);
      expect(climbStairs(5)).toBe(8);
    });
    
    test('optimized version should work', () => {
      expect(climbStairsOptimized(3)).toBe(3);
    });
  });
});
