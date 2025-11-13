/**
 * Problem: Graph - Depth First Search (DFS)
 * Difficulty: Advanced
 * 
 * Description:
 * Implement Depth First Search traversal for a graph.
 * Given a graph represented as an adjacency list, perform DFS starting from a given node.
 * 
 * Example:
 * Graph:     0
 *           / \
 *          1   2
 *         / \
 *        3   4
 * 
 * Input: graph with adjacency list, start = 0
 * Output: [0, 1, 3, 4, 2] (one possible DFS traversal)
 */

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
  }
  
  // Solution 1: Recursive DFS
  dfsRecursive(start) {
    const result = [];
    const visited = new Set();
    
    const dfs = (vertex) => {
      if (vertex === null || vertex === undefined) return;
      
      visited.add(vertex);
      result.push(vertex);
      
      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };
    
    dfs(start);
    return result;
  }
  
  // Solution 2: Iterative DFS using Stack
  dfsIterative(start) {
    const result = [];
    const visited = new Set();
    const stack = [start];
    
    while (stack.length > 0) {
      const vertex = stack.pop();
      
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        
        const neighbors = this.adjacencyList.get(vertex);
        // Push neighbors in reverse order to match recursive DFS order
        for (let i = neighbors.length - 1; i >= 0; i--) {
          if (!visited.has(neighbors[i])) {
            stack.push(neighbors[i]);
          }
        }
      }
    }
    
    return result;
  }
  
  // Bonus: Breadth First Search (BFS) for comparison
  bfs(start) {
    const result = [];
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      
      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    
    return result;
  }
}

// Test cases
console.log('Test Case 1: Simple graph');
const graph1 = new Graph();
[0, 1, 2, 3, 4].forEach(v => graph1.addVertex(v));
graph1.addEdge(0, 1);
graph1.addEdge(0, 2);
graph1.addEdge(1, 3);
graph1.addEdge(1, 4);

console.log('DFS Recursive:', graph1.dfsRecursive(0));
console.log('DFS Iterative:', graph1.dfsIterative(0));
console.log('BFS:', graph1.bfs(0));

console.log('\nTest Case 2: Larger graph');
const graph2 = new Graph();
[0, 1, 2, 3, 4, 5, 6].forEach(v => graph2.addVertex(v));
graph2.addEdge(0, 1);
graph2.addEdge(0, 2);
graph2.addEdge(1, 3);
graph2.addEdge(2, 4);
graph2.addEdge(3, 5);
graph2.addEdge(4, 5);
graph2.addEdge(5, 6);

console.log('DFS Recursive:', graph2.dfsRecursive(0));
console.log('DFS Iterative:', graph2.dfsIterative(0));
console.log('BFS:', graph2.bfs(0));

// Time Complexity:
// DFS Recursive: O(V + E) where V is vertices and E is edges
// DFS Iterative: O(V + E)
// BFS: O(V + E)
//
// Space Complexity:
// DFS Recursive: O(V) for call stack and visited set
// DFS Iterative: O(V) for stack and visited set
// BFS: O(V) for queue and visited set
