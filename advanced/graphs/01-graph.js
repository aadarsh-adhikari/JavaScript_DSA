/**
 * Graph Implementation (Adjacency List)
 * Difficulty: Advanced
 * 
 * A graph is a data structure consisting of vertices (nodes) and edges.
 * This implementation uses an adjacency list representation.
 */

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  
  // Add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  
  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }
  
  // Remove an edge
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1).filter(v => v !== vertex2)
      );
    }
    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2).filter(v => v !== vertex1)
      );
    }
  }
  
  // Remove a vertex
  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) return;
    
    // Remove all edges to this vertex
    for (let adjacentVertex of this.adjacencyList.get(vertex)) {
      this.removeEdge(vertex, adjacentVertex);
    }
    
    this.adjacencyList.delete(vertex);
  }
  
  // Depth First Search
  dfs(start) {
    const result = [];
    const visited = new Set();
    
    const traverse = (vertex) => {
      if (!vertex) return;
      
      visited.add(vertex);
      result.push(vertex);
      
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          traverse(neighbor);
        }
      }
    };
    
    traverse(start);
    return result;
  }
  
  // Breadth First Search
  bfs(start) {
    const result = [];
    const visited = new Set();
    const queue = [start];
    
    visited.add(start);
    
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    
    return result;
  }
}

module.exports = { Graph };
