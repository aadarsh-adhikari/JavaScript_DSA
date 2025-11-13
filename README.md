# JavaScript DSA (Data Structures & Algorithms)

A comprehensive collection of Data Structures and Algorithms problems solved in JavaScript, organized from beginner to advanced level to improve JavaScript core knowledge and problem-solving skills.

## 📚 Repository Structure

```
JavaScript_DSA/
├── beginner/
│   ├── arrays/          # Array manipulation problems
│   └── strings/         # String manipulation problems
├── intermediate/
│   ├── linked-lists/    # Linked list implementations and problems
│   ├── stacks/          # Stack implementations and problems
│   └── queues/          # Queue implementations and problems
├── advanced/
│   ├── trees/           # Binary trees and BST problems
│   ├── graphs/          # Graph algorithms (DFS, BFS)
│   └── dynamic-programming/  # DP problems
└── __tests__/           # Jest test files
```

## 🎯 Topics Covered

### Beginner Level
#### Arrays
- Find maximum element
- Reverse array
- Array sum
- Remove duplicates

#### Strings
- Palindrome check
- Reverse string
- Count vowels
- First non-repeating character

### Intermediate Level
#### Linked Lists
- Linked list implementation
- Reverse linked list

#### Stacks
- Stack implementation
- Valid parentheses

#### Queues
- Queue implementation

### Advanced Level
#### Trees
- Binary Search Tree implementation
- Tree traversals (inorder, preorder, postorder)
- Maximum depth of binary tree

#### Graphs
- Graph implementation (adjacency list)
- Depth First Search (DFS)
- Breadth First Search (BFS)

#### Dynamic Programming
- Fibonacci sequence (multiple approaches)
- Climbing stairs problem

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aadarsh-adhikari/JavaScript_DSA.git
cd JavaScript_DSA
```

2. Install dependencies:
```bash
npm install
```

### Running Tests

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## 📖 How to Use

Each problem file includes:
- Problem description
- Difficulty level
- Example input/output
- Multiple solution approaches where applicable
- Time and space complexity considerations

Example:
```javascript
const { findMax } = require('./beginner/arrays/01-find-max');

const numbers = [1, 5, 3, 9, 2];
console.log(findMax(numbers)); // Output: 9
```

## 🎓 Learning Path

1. **Start with Beginner**: Master array and string manipulation
2. **Move to Intermediate**: Understand linear data structures (linked lists, stacks, queues)
3. **Advance to Complex**: Tackle trees, graphs, and dynamic programming

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new problems
- Improve existing solutions
- Add more test cases
- Fix bugs or typos

## 📝 License

MIT

## 🌟 Acknowledgments

This repository is designed for anyone looking to:
- Prepare for coding interviews
- Improve JavaScript programming skills
- Learn data structures and algorithms
- Practice problem-solving
